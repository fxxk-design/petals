import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IStepComponent } from '../typing';

class StepHeadlessComponent extends BaseHeadlessComponent<IStepComponent> {
  public getComponentName(): string {
    return getComponentConfig('step', 'name') || 'Step';
  }
}

export { StepHeadlessComponent };
