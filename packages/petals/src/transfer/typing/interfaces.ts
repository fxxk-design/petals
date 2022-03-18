import { IFormControl } from '../../form-control';

import { TransferData } from './aliases';

interface ITransferComponent extends IFormControl<string[]> {
  readonly dataSource: TransferData;
  readonly titles: string[];
  readonly operationText: string[];
  readonly filterable: boolean;
  readonly onSelect: (sourceSelected: string[], targetSelected: string[]) => void;
}

export { ITransferComponent };
