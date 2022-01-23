import { FormControlPrefixAndSuffix, ITextualFormControl } from '../../form-control';

interface ITextInputComponent extends ITextualFormControl {
  readonly prefix: string | FormControlPrefixAndSuffix;
  readonly suffix: string | FormControlPrefixAndSuffix;
}

export { ITextInputComponent };
