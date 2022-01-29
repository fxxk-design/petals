import { ITextualFormControl } from '../../form-control';

interface IUrlInputComponent extends ITextualFormControl {
  readonly scheme: string | string[];
  readonly noAuthority: boolean;
}

export { IUrlInputComponent };
