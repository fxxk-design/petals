import { IFormControl } from '../../form-control';

interface ITreeComponent extends IFormControl<string[]> {
  readonly dataSource: any[];
  readonly checkable: boolean;
}

export { ITreeComponent };
