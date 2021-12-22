import { ButtonNativeType, ButtonProps } from './aliases';

interface IButtonComponent extends Omit<Readonly<Required<ButtonProps>>, 'text' | 'className'> {
  readonly nativeType: ButtonNativeType;
  readonly onClick: (evt: any) => void;
}

export { IButtonComponent };
