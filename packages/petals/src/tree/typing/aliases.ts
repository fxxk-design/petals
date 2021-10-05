type TreeNodeData = {
  key?: string;
  label?: string;
  children?: TreeNodeData[];
  selectable?: boolean;
  checkable?: boolean;
  disabled?: boolean;
  checkboxDisabled?: boolean;
  render?: (...args: any[]) => any;
  [key: string]: any;
};

type TreeData = TreeNodeData[];

type ConfigurableTreeNodeDataField = {
  key?: string;
  label?: string;
  children?: string;
};

export { TreeNodeData, TreeData, ConfigurableTreeNodeDataField };
