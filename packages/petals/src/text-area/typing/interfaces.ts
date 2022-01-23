import { ResizeType } from '../../basic';
import { ITextualFormControl } from '../../form-control';

interface ITextAreaComponent extends ITextualFormControl {
  readonly rows: number;
  readonly showWordage: boolean;
  readonly resize: ResizeType;
}

export { ITextAreaComponent };
