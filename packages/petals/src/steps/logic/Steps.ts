import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IStepsComponent } from '../typing';

class StepsHeadlessComponent extends BaseHeadlessComponent<IStepsComponent> {
  public getComponentName(): string {
    return getComponentConfig('steps', 'name') || 'Steps';
  }
}

export { StepsHeadlessComponent };
