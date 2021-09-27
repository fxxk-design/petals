import { PopupPlacement, PopupTrigger } from './aliases';

interface IPopupComponent {
  readonly content: string;
  readonly placement: PopupPlacement;
  readonly trigger: PopupTrigger;
  readonly disabled: boolean;
}

export { IPopupComponent };
