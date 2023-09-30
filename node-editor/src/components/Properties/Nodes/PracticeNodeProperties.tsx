import MarkDownField from '../../Forms/Fields/MarkDownField';
import TextField from '../../Forms/Fields/TextField';
import NodeProperties from './NodeProperties';

const PracticeNodeProperties = () => {
  return (
    <>
      <NodeProperties />
      <MarkDownField label="Text" name="data.question" />
      <TextField label="Hint" name="data.hint" isTextArea />
    </>
  );
};

export default PracticeNodeProperties;
