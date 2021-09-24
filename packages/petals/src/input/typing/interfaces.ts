import { ITextualFormControl } from '../../form-control';

interface IInputComponent extends ITextualFormControl {
  readonly type: string;
  readonly showWordLimit: boolean;
}

export { IInputComponent };
