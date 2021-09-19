import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IFormFieldHintComponent } from '../typing';

class FormFieldHintHeadlessComponent extends BaseHeadlessComponent<IFormFieldHintComponent> {
  public getComponentName(): string {
    return getComponentConfig('formFieldHint', 'name') || 'FormFieldHint';
  }
}

export { FormFieldHintHeadlessComponent };
