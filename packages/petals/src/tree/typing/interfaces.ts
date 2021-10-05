import { IFormControl } from '../../form-control';

import { TreeData, ConfigurableTreeNodeDataField } from './aliases';

interface ITreeComponent extends IFormControl<string[]> {
  readonly dataSource: TreeData;
  readonly checkable: boolean;
  readonly nodeField: ConfigurableTreeNodeDataField;
  readonly expandedKeys: string[];
  readonly selectedKeys: string[];
  onChange(...args: any[]): void;
  onSelect(...args: any[]): void;
  onExpand(...args: any[]): void;
}

export { ITreeComponent };
