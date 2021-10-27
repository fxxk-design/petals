import { isString, isNumber, isArray, isLooseObject, hasOwnProp } from '@ntks/toolbox';

import { LooseSize } from '../typing';

function getDescendantClassName(componentName: string, descendant: string): string {
  return `${componentName}-${descendant}`;
}

function getModifierClassName(componentName: string, modifier: string): string {
  return `${componentName}--${modifier}`;
}

function normalizeLooseSize(size: LooseSize): string {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  if (size == null || typeof size !== 'string' || size === 'none') {
    return '';
  }

  return size;
}

// Modified from https://www.npmjs.com/package/classnames
function normalizeClassName(...args: any[]): string {
  const classNames: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const className = args[i];

    if (!className) {
      continue;
    }

    if (isString(className) || isNumber(className)) {
      classNames.push(className);
    } else if (isArray(className)) {
      if (className.length > 0) {
        const nestedClassName = normalizeClassName(...className);

        if (nestedClassName) {
          classNames.push(nestedClassName);
        }
      }
    } else if (isLooseObject(className)) {
      if (className.toString === Object.prototype.toString) {
        for (const key in className) {
          if (hasOwnProp(key, className) && className[key]) {
            classNames.push(key);
          }
        }
      } else {
        classNames.push(className.toString());
      }
    }
  }

  return classNames.join(' ');
}

export { getDescendantClassName, getModifierClassName, normalizeLooseSize, normalizeClassName };
