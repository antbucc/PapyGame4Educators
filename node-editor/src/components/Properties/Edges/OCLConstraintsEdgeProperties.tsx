import CodeField from '../../Forms/Fields/CodeField';
import EnumField from '../../Forms/Fields/EnumField';
import EdgeProperties from './EdgeProperties';

const ExactValueEdgeProperties = () => {
  return (
    <>
      <EdgeProperties />
      <EnumField
        label="Condition Kind"
        name="data.conditionKind"
        options={
          <>
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
          </>
        }
      />
      <CodeField label="Code" name="data.constraints" language="OCL" />
    </>
  );
};

export default ExactValueEdgeProperties;
