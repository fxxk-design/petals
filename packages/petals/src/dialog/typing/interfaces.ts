import { IModal } from '../../modal';

import { DialogWidth, DialogButton } from './aliases';

interface IDialogComponent extends IModal {
  readonly width: DialogWidth;
  readonly centered: boolean;
  readonly affirmButton: DialogButton;
  readonly denyButton: DialogButton;
  readonly onClose: () => void;
}

export { IDialogComponent };
