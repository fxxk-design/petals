import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IWaitComponent } from '../typing';

class WaitHeadlessComponent extends BaseHeadlessComponent<IWaitComponent> {
  public getComponentName(): string {
    return getComponentConfig('wait', 'name') || 'Wait';
  }
}

export { WaitHeadlessComponent };
