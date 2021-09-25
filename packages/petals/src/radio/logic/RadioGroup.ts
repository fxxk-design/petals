import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IRadioGroupComponent } from '../typing';

class RadioGroupHeadlessComponent extends BaseHeadlessComponent<IRadioGroupComponent> {
  public getComponentName(): string {
    return getComponentConfig('radioGroup', 'name') || 'RadioGroup';
  }
}

export { RadioGroupHeadlessComponent };
