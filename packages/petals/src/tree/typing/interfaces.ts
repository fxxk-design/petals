import { IFormControl } from '../../form-control';

import { TreeNodeKey, TreeNodeRenderer, TreeData, ConfigurableTreeNodeDataField } from './aliases';

interface ITreeComponent extends IFormControl<TreeNodeKey[]> {
  readonly dataSource: TreeData;
  readonly checkable: boolean;
  readonly expanded: boolean;
  readonly expandedKeys: TreeNodeKey[];
  readonly selectedKeys: TreeNodeKey[];
  readonly nodeField: ConfigurableTreeNodeDataField;
  readonly nodeRenderer: TreeNodeRenderer;
  readonly emptyText: string;
  onChange(checkedKeys: TreeNodeKey[]): void;
  onSelect(selectedKeys: TreeNodeKey[]): void;
  onExpand(expandedKeys: TreeNodeKey[]): void;
}

export { ITreeComponent };
