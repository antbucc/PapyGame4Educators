import OCLConstraintsEdgeProperties from '../../../components/Properties/Edges/OCLConstraintsEdgeProperties';
import { ReactFlowSmartBezierEdge } from '../../../components/ReactFlowEdge';
import { polyglotEdgeComponentMapping } from '../elementMapping';
import { defaultPolyglotEdgeData, EdgeData, PolyglotEdge } from './Edge';

export type OCLConstraintsEdgeData = EdgeData & {
  // TODO: this should be generic and should match the type of the answer of the node it is connected to
  value: string;
};

export type OCLConstraintsEdge = PolyglotEdge & {
  type: 'exactValueEdge';
  data: OCLConstraintsEdgeData;
};

polyglotEdgeComponentMapping.registerMapping<OCLConstraintsEdge>({
  elementType: 'OCLConstraintsEdge',
  name: 'OCL Constraints',
  propertiesComponent: OCLConstraintsEdgeProperties,
  elementComponent: ReactFlowSmartBezierEdge,
  defaultData: {
    ...defaultPolyglotEdgeData,
    value: '',
  },
  transformData: (edge) => {
    const code = `
async Task<(bool, string)> validate(PolyglotValidationContext context) {
    return (String.Equals(context.Condition.Data.value, context.JourneyContext.SubmittedCode), "Exact value edge");
}`;

    return {
      ...edge,
      code,
    };
  },
});
