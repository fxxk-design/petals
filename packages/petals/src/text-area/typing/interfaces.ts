import { ResizeType } from '../../basic';
import { ITextualFormControl } from '../../form-control';

interface ITextAreaComponent extends ITextualFormControl {
  readonly rows: number;
  readonly wordage: boolean;
  readonly resize: ResizeType;
}

export { ITextAreaComponent };
