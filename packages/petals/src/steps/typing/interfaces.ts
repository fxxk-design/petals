import { DirectionType } from '../../basic';

interface IStepsComponent {
  readonly direction: DirectionType;
  readonly activeFlag: number;
}

interface IStepComponent {
  readonly title: string;
  readonly description: string;
}

export { IStepsComponent, IStepComponent };
