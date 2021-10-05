import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITreeComponent } from '../typing';

class TreeHeadlessComponent extends BaseHeadlessComponent<ITreeComponent> {
  public getComponentName(): string {
    return getComponentConfig('tree', 'name') || 'Tree';
  }
}

export { TreeHeadlessComponent };
