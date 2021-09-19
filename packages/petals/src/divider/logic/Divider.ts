import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDividerComponent } from '../typing';

class DividerHeadlessComponent extends BaseHeadlessComponent<IDividerComponent> {
  public getComponentName(): string {
    return getComponentConfig('divider', 'name') || 'Divider';
  }
}

export { DividerHeadlessComponent };
