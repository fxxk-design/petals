import {
  NumberOrString as DialogWidth,
  MessageStatus as DialogShortcutType,
  ClassName,
} from '../../basic';
import { ButtonProps } from '../../button';

type DialogButton = string | ButtonProps;

type DialogButtonHandler = (...args: any[]) => void;

type DialogButtonProps = ButtonProps & { handler?: DialogButtonHandler };

type DialogShortcutButton = string | DialogButtonHandler | DialogButtonProps;

type DialogShortcutOptions = {
  className?: ClassName;
  type?: DialogShortcutType;
  title?: string;
  content?: string;
  closable?: boolean;
  lazy?: boolean; // close lazily when affirm button clicked
  centered?: boolean;
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
