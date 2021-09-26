import { IPopupComponent } from '../../popup';

interface ITooltipComponent extends IPopupComponent {
  readonly disabled: boolean;
}

export { ITooltipComponent };
