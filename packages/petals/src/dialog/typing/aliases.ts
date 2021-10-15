import { NumberOrString as DialogWidth, MessageStatus as DialogShortcutType } from '../../basic';
import { ButtonProps } from '../../button';

type DialogButton = string | ButtonProps;

type DialogButtonHandler = (...args: any[]) => void;

type DialogButtonProps = ButtonProps & { handler?: DialogButtonHandler };

type DialogShortcutButton = string | DialogButtonHandler | DialogButtonProps;

type DialogShortcutOptions = {
  type?: DialogShortcutType;
  title?: string;
  content?: string;
  className?: string;
  width?: DialogWidth;
  closable?: boolean;
  affirmButton?: DialogShortcutButton;
  denyButton?: DialogShortcutButton;
  render?: (...args: any[]) => any;
};

type DialogShortcutCallback = (options: DialogShortcutOptions) => void;

type DialogShortcutMethod = {
  (content: string, options?: DialogShortcutOptions);
  (content: string, title: string, options?: DialogShortcutOptions);
  (content: string, affirmButtonHandler: DialogButtonHandler, options?: DialogShortcutOptions);
  (
    content: string,
    affirmButtonHandler: DialogButtonHandler,
    denyButtonHandler: DialogButtonHandler,
    options?: DialogShortcutOptions,
  );
};

export {
  DialogWidth,
  DialogButton,
  DialogButtonHandler,
  DialogButtonProps,
  DialogShortcutButton,
  DialogShortcutType,
  DialogShortcutOptions,
  DialogShortcutCallback,
  DialogShortcutMethod,
};
