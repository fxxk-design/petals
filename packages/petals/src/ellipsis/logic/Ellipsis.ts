import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IEllipsisComponent } from '../typing';

class EllipsisHeadlessComponent extends BaseHeadlessComponent<IEllipsisComponent> {
  public getComponentName(): string {
    return getComponentConfig('ellipsis', 'name') || 'Ellipsis';
  }
}

export { EllipsisHeadlessComponent };
