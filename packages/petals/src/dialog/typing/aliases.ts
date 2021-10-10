import { NumberOrString as DialogWidth, MessageStatus as DialogShortcutType } from '../../basic';
import { ButtonProps } from '../../button';

type DialogButton = string | ButtonProps;

type DialogButtonHandler = (...args: any[]) => void;

type DialogButtonProps = ButtonProps & { handler?: DialogButtonHandler };

type DialogShortcutButton = string | DialogButtonProps;

type DialogShortcutOptions = {
  type?: DialogShortcutType;
  title?: string;
  content?: string;
  closable?: boolean;
  affirmButton?: DialogShortcutButton;
  denyButton?: DialogShortcutButton;
};

type DialogShortcutCallback = (options: DialogShortcutOptions) => void;

type DialogShortcutMethod = {
  (message: string, options?: DialogShortcutOptions);
  (message: string, title: string, options?: DialogShortcutOptions);
  (message: string, affirmButtonHandler: DialogButtonHandler, options?: DialogShortcutOptions);
  (
    message: string,
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
