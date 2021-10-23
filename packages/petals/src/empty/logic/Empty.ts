import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IEmptyComponent } from '../typing';

class EmptyHeadlessComponent extends BaseHeadlessComponent<IEmptyComponent> {
  public getComponentName(): string {
    return getComponentConfig('empty', 'name') || 'Empty';
  }
}

export { EmptyHeadlessComponent };
