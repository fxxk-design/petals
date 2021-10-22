import { IFormControl } from '../../form-control';

import {
  TreeNodeKey,
  TreeNodeData,
  TreeNode,
  TreeNodeRenderer,
  TreeData,
  ConfigurableTreeNodeDataField,
} from './aliases';

interface ITreeComponent extends IFormControl<TreeNodeKey[]> {
  readonly dataSource: TreeData;
  readonly checkable: boolean;
  readonly expanded: boolean;
  readonly expandedKeys: TreeNodeKey[];
  readonly selectedKeys: TreeNodeKey[];
  readonly nodeField: ConfigurableTreeNodeDataField;
  readonly nodeRenderer: TreeNodeRenderer;
  readonly emptyText: string;
  onChange(checkedKeys: TreeNodeKey[], data: TreeNodeData[], nodes: TreeNode[]): void;
  onSelect(selectedKeys: TreeNodeKey[], data: TreeNodeData[], nodes: TreeNode[]): void;
  onExpand(expandedKeys: TreeNodeKey[], data: TreeNodeData[], nodes: TreeNode[]): void;
}

export { ITreeComponent };
