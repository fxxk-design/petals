import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IPhoneInputComponent } from '../typing';

class PhoneInputHeadlessComponent extends BaseHeadlessComponent<IPhoneInputComponent> {
  public getComponentName(): string {
    return getComponentConfig('phoneInput', 'name') || 'PhoneInput';
  }
}

export { PhoneInputHeadlessComponent };
