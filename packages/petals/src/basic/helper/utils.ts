import { isArray } from '@ntks/toolbox';
import classnames from 'classnames';

import { LooseSize, VariantClassName, ClassName } from '../typing';

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

function normalizeClassName(className: ClassName): string {
  return isArray(className)
    ? classnames(...(className as VariantClassName[]))
    : classnames(className);
}

export { getDescendantClassName, getModifierClassName, normalizeLooseSize, normalizeClassName };
