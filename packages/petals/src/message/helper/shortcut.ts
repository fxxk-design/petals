import { isNumber, isFunction, isPlainObject, noop, mixin } from '@ntks/toolbox';

import {
  MessageEventHandler,
  MessageShortcutOptions,
  MessageShortcutCallback,
  MessageShortcutMethod,
} from '../typing';

function generateShortcutMethod(callback: MessageShortcutCallback): MessageShortcutMethod {
  return (
    content: string,
    optsOrHandlerOrDuration?: number | MessageEventHandler | MessageShortcutOptions,
    optsOrHandler?: MessageEventHandler | MessageShortcutOptions,
    options?: MessageShortcutOptions,
  ) => {
    let resolvedDuration = 3;
    let resolvedCloseHandler: MessageEventHandler = noop;
    let resolvedOptions: MessageShortcutOptions | undefined;

    if (options) {
      resolvedOptions = isPlainObject(options) ? options : {};
    }

    if (optsOrHandler) {
      if (!resolvedOptions && isPlainObject(optsOrHandler)) {
        resolvedOptions = optsOrHandler as MessageShortcutOptions;
      } else if (isFunction(optsOrHandler)) {
        resolvedCloseHandler = optsOrHandler as MessageEventHandler;
      }
    }

    if (optsOrHandlerOrDuration !== undefined) {
      if (!resolvedOptions && isPlainObject(optsOrHandlerOrDuration)) {
        resolvedOptions = optsOrHandlerOrDuration as MessageShortcutOptions;
      } else if (isFunction(optsOrHandlerOrDuration)) {
        resolvedCloseHandler = optsOrHandlerOrDuration as MessageEventHandler;
      } else if (isNumber(optsOrHandlerOrDuration)) {
        resolvedDuration = optsOrHandlerOrDuration as number;
      }
    }

    if (!resolvedOptions) {
      resolvedOptions = {};
    }

    callback(
      mixin(
        true,
        { type: 'info', content, duration: resolvedDuration, onClose: resolvedCloseHandler },
        resolvedOptions,
      ),
    );
  };
}

export { generateShortcutMethod };
