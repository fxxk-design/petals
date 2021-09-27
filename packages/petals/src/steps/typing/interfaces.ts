import { DirectionType } from '../../basic';

interface IStepsComponent {
  readonly direction: DirectionType;
  readonly activeFlag: number;
}

interface IStepComponent {
  readonly title: string;
  readonly content: string;
}

export { IStepsComponent, IStepComponent };
