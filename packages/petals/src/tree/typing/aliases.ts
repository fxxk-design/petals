import { NumberOrString } from '../../basic';

type TreeNodeKey = NumberOrString;

type TreeNodeData = {
  key?: TreeNodeKey;
  label?: string;
  children?: TreeNodeData[];
  selectable?: boolean;
  checkable?: boolean;
  disabled?: boolean;
  checkboxDisabled?: boolean;
  [key: string]: any;
};

type TreeNodeId = NumberOrString;

type TreeNode = {
  id: TreeNodeId;
  level: number;
  expanded: boolean;
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
  children: TreeNode[];
};

type TreeNodeRenderer<TreeRenderNode = any> = (
  data: TreeNodeData,
  node: TreeNode,
) => TreeRenderNode;

type TreeData = TreeNodeData[];

type ConfigurableTreeNodeDataField = {
  key?: string;
  label?: string;
  children?: string;
};

export {
  TreeNodeKey,
  TreeNodeData,
  TreeNodeId,
  TreeNode,
  TreeNodeRenderer,
  TreeData,
  ConfigurableTreeNodeDataField,
};
