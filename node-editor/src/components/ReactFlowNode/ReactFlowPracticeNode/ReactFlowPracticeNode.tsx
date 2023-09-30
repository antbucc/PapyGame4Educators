import { background, position } from '@chakra-ui/react';
import { useTheme } from '@fluentui/react';
import { Handle, Position } from 'reactflow';
import useStore from '../../../store';
import { PracticeNode } from '../../../types/polyglotElements';
import Card from '../../Card/Card';
import { ReactFlowNodeProps } from '../ReactFlowNode';

type ReactFlowPracticeProps = ReactFlowNodeProps & PracticeNode;

const ReactFlowPractice = ({ id }: ReactFlowPracticeProps) => {
  const [onConnect, label] = useStore((state) => [
    state.onConnect,
    state.nodeMap.get(id)?.title,
  ]);
  const theme = useTheme();

  return (
    <Card
      className="Card-react-flow"
      style={{
        borderColor: theme.palette.tealDark,
        background: `${theme.palette.teal}08`,
      }}
    >
      {label}
      <Handle type="source" position={Position.Right} onConnect={onConnect} />
      <Handle type="target" position={Position.Left} />
    </Card>
  );
};

export default ReactFlowPractice;
