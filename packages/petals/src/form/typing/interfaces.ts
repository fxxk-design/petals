import { FormControlSize } from '../../form-control';
import { FormLayoutType, FormFieldLabelOption, FormValidationOption } from './aliases';

interface IFormFieldBasic {
  readonly labelOption: FormFieldLabelOption;
  readonly controlSize: FormControlSize;
  readonly hideMessage: boolean;
}

interface IFormComponent extends IFormFieldBasic {
  readonly value: Record<string, any>;
  readonly validation: FormValidationOption;
  readonly layout: FormLayoutType;
}

interface IFormFieldComponent extends IFormFieldBasic {
  readonly required: boolean;
  readonly label: string;
  readonly hint: string;
  readonly message: string;
  readonly separator: string;
}

interface IFormFieldLabelComponent extends Readonly<Required<FormFieldLabelOption>> {}

interface IFormFieldHintComponent {}

export {
  IFormFieldBasic,
  IFormComponent,
  IFormFieldComponent,
  IFormFieldLabelComponent,
  IFormFieldHintComponent,
};
