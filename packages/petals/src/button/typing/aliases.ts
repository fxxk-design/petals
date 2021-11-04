import { SizeType, ClassName } from '../../basic';

type ButtonSize = SizeType;

type ButtonBorder = 'solid' | 'dashed' | 'none';

type ButtonColor = 'primary' | 'danger' | string;

type ButtonNativeType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  text: string;
  className?: ClassName;
  size?: ButtonSize;
  border?: ButtonBorder;
  color?: ButtonColor;
  outlined?: boolean;
  disabled?: boolean;
};

export { ButtonSize, ButtonBorder, ButtonColor, ButtonNativeType, ButtonProps };
