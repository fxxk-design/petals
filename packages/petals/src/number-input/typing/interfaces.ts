import { FormControlPrefixAndSuffix, INumericFormControl } from '../../form-control';

interface INumberInputComponent extends INumericFormControl {
  readonly prefix: string | FormControlPrefixAndSuffix;
  readonly suffix: string | FormControlPrefixAndSuffix;
}

export { INumberInputComponent };
