import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IInputComponent } from '../typing';

class InputHeadlessComponent extends BaseHeadlessComponent<IInputComponent> {
  public getComponentName(): string {
    return getComponentConfig('input', 'name') || 'Input';
  }
}

export { InputHeadlessComponent };
