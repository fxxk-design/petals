import { ButtonNativeType, ButtonProps } from './aliases';

interface IButtonComponent extends Omit<Readonly<Required<ButtonProps>>, 'text' | 'className'> {
  readonly nativeType: ButtonNativeType;
}

export { IButtonComponent };
