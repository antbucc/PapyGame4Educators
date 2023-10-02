import * as t from 'io-ts';
import OCLConstraintsEdgeProperties from '../../../components/Properties/Edges/OCLConstraintsEdgeProperties';
import { ReactFlowSmartBezierEdge } from '../../../components/ReactFlowEdge';
import { polyglotEdgeComponentMapping } from '../elementMapping';
import { defaultPolyglotEdgeData, EdgeData, PolyglotEdge } from './Edge';


export const PassFailEdgeConditionKind_IoTs = t.union([
  t.literal('pass'),
  t.literal('fail'),
]);

type PassFailEdgeConditionKind = t.TypeOf<
  typeof PassFailEdgeConditionKind_IoTs
>;

export type OCLConstraintsEdgeData = EdgeData & {
  // TODO: this should be generic and should match the type of the answer of the node it is connected to
  value: string;
  conditionKind: PassFailEdgeConditionKind;
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
    conditionKind: 'pass',
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
