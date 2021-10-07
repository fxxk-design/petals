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

type TreeNodeRenderer<TreeNode = any> = (data: TreeNodeData) => TreeNode;

type TreeData = TreeNodeData[];

type ConfigurableTreeNodeDataField = {
  key?: string;
  label?: string;
  children?: string;
};

export { TreeNodeKey, TreeNodeData, TreeNodeRenderer, TreeData, ConfigurableTreeNodeDataField };
