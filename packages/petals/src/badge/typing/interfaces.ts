import { NumberOrString, ColorType } from '../../basic';

interface IBadgeComponent {
  readonly count: NumberOrString;
  readonly max: number;
  readonly text: string;
  readonly dot: boolean;
  readonly color: ColorType;
}

export { IBadgeComponent };
