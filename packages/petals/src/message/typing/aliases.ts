import { MessageStatus as MessageShortcutType } from '../../basic';

type MessageEventHandler = (...args: any[]) => void;

type MessageShortcutOptions = {
  type?: MessageShortcutType;
  content?: string;
  duration?: number; // by seconds
  onClose?: MessageEventHandler;
};

type MessageShortcutCallback = (options: MessageShortcutOptions) => void;

type MessageShortcutMethod = {
  (content: string, options?: MessageShortcutOptions);
  (content: string, onClose: MessageEventHandler, options?: MessageShortcutOptions);
  (
    content: string,
    duration: number,
    onClose: MessageEventHandler,
    options?: MessageShortcutOptions,
  );
};

export {
  MessageShortcutType,
  MessageEventHandler,
  MessageShortcutOptions,
  MessageShortcutCallback,
  MessageShortcutMethod,
};
