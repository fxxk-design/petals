import { isString, isFunction, isPlainObject, noop, mixin } from '@ntks/toolbox';

import {
  DialogButtonProps,
  DialogButtonHandler,
  DialogShortcutButton,
  DialogShortcutOptions,
  DialogShortcutCallback,
  DialogShortcutMethod,
} from '../typing';

function resolveButtonProps(button: DialogShortcutButton): DialogButtonProps {
  return isString(button) ? { text: button as string } : (button as DialogButtonProps);
}

function generateShortcutMethod(
  defaultOptions: DialogShortcutOptions,
  callback: DialogShortcutCallback,
): DialogShortcutMethod {
  return (
    message: string,
    optsOrTitleOrHandler?: string | DialogButtonHandler | DialogShortcutOptions,
    optsOrHandler?: DialogButtonHandler | DialogShortcutOptions,
    options?: DialogShortcutOptions,
  ) => {
    let resolvedTitle: string = '';
    let resolvedAffirmButtonHandler: DialogButtonHandler = noop;
    let resolvedDenyButtonHandler: DialogButtonHandler = noop;
    let resolvedOptions: DialogShortcutOptions | undefined;

    if (options) {
      resolvedOptions = isPlainObject(options) ? options : {};
    }

    if (optsOrHandler) {
      if (!resolvedOptions && isPlainObject(optsOrHandler)) {
        resolvedOptions = optsOrHandler as DialogShortcutOptions;
      } else if (isFunction(optsOrHandler)) {
        resolvedDenyButtonHandler = optsOrHandler as DialogButtonHandler;
      }
    }

    if (optsOrTitleOrHandler) {
      if (!resolvedOptions && isPlainObject(optsOrTitleOrHandler)) {
        resolvedOptions = optsOrTitleOrHandler as DialogShortcutOptions;
      } else if (isFunction(optsOrTitleOrHandler)) {
        resolvedAffirmButtonHandler = optsOrTitleOrHandler as DialogButtonHandler;
      } else if (isString(optsOrTitleOrHandler)) {
        resolvedTitle = optsOrTitleOrHandler as string;
      }
    }

    if (!resolvedOptions) {
      resolvedOptions = {};
    }

    const affirmButton =
      resolvedAffirmButtonHandler === noop ? {} : { handler: resolvedAffirmButtonHandler };
    const denyButton =
      resolvedDenyButtonHandler === noop ? {} : { handler: resolvedDenyButtonHandler };

    const defaultAffirmButton = defaultOptions.affirmButton
      ? resolveButtonProps(defaultOptions.affirmButton)
      : {};
    const defaultDenyButton = defaultOptions.denyButton
      ? resolveButtonProps(defaultOptions.denyButton)
      : {};

    const resolvedAffirmButton = resolvedOptions.affirmButton
      ? resolveButtonProps(resolvedOptions.affirmButton)
      : {};
    const resolvedDenyButton = resolvedOptions.denyButton
      ? resolveButtonProps(resolvedOptions.denyButton)
      : {};

    const mergedOptions: DialogShortcutOptions = mixin(
      true,
      {},
      defaultOptions,
      { title: resolvedTitle || defaultOptions.title, content: message },
      resolvedOptions,
    );

    mergedOptions.affirmButton = mixin(
      {},
      defaultAffirmButton,
      affirmButton,
      resolvedAffirmButton,
    ) as DialogButtonProps;

    mergedOptions.denyButton = mixin(
      {},
      defaultDenyButton,
      denyButton,
      resolvedDenyButton,
    ) as DialogButtonProps;

    callback(mergedOptions);
  };
}

function generateAlert(callback: DialogShortcutCallback): DialogShortcutMethod {
  return generateShortcutMethod({ title: '提示', affirmButton: '知道了' }, callback);
}

function generateConfirm(callback: DialogShortcutCallback): DialogShortcutMethod {
  return generateShortcutMethod(
    { title: '提示', affirmButton: '确定', denyButton: '取消' },
    callback,
  );
}

export { generateAlert, generateConfirm };
