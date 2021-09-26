import { PopupPlacement, PopupTrigger } from './aliases';

interface IPopupComponent {
  readonly content: string;
  readonly placement: PopupPlacement;
  readonly trigger: PopupTrigger;
}

export { IPopupComponent };
