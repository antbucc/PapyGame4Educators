import PracticeNodeProperties from '../../../components/Properties/Nodes/PracticeNodeProperties';
import { ReactFlowPracticeNode } from '../../../components/ReactFlowNode';
import { polyglotNodeComponentMapping } from '../elementMapping';
import {
  ChallengeContent,
  ChallengeSetup,
  defaultPolyglotNodeData,
  NodeData,
  PolyglotNode,
} from './Node';

export type PracticeNodeData = NodeData & {
  question: string;
  hint: string;
};

export type PracticeNode = PolyglotNode & {
  type: 'PracticeNode';
  data: PracticeNodeData;
};

polyglotNodeComponentMapping.registerMapping<PracticeNode>({
  elementType: 'practiceNode',
  name: 'Practice',
  propertiesComponent: PracticeNodeProperties,
  elementComponent: ReactFlowPracticeNode,
  defaultData: {
    question: '',
    hint: '',
    ...defaultPolyglotNodeData,
  },
  transformData: (node) => {
    const PracticeNode = node as PracticeNode;

    const challengeSetup: ChallengeSetup[] = [];
    const challengeContent: ChallengeContent[] = [
      {
        type: 'markdown',
        content: PracticeNode.data?.question,
      },
    ];

    return {
      ...node,
      runtimeData: {
        challengeSetup,
        challengeContent,
      },
    };
  },
});
