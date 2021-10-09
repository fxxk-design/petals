import { PopupPlacement, PopupTrigger } from './aliases';

interface IPopupComponent {
  readonly content: string;
  readonly placement: PopupPlacement;
  readonly trigger: PopupTrigger;
  readonly visible: boolean;
  readonly disabled: boolean;
  readonly popupClassName: string;
  onVisibleChange(visible: boolean): void;
}

export { IPopupComponent };
