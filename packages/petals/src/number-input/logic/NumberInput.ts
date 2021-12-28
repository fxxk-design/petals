import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { INumberInputComponent } from '../typing';

class NumberInputHeadlessComponent extends BaseHeadlessComponent<INumberInputComponent> {
  public getComponentName(): string {
    return getComponentConfig('numberInput', 'name') || 'NumberInput';
  }
}

export { NumberInputHeadlessComponent };
