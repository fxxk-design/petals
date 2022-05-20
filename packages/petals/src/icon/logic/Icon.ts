import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IconOption, IIconComponent } from '../typing';
import { getIconProvider, getDefaultIconProvider } from './utils';

class IconHeadlessComponent extends BaseHeadlessComponent<IIconComponent> {
  public getComponentName(): string {
    return getComponentConfig('icon', 'name') || 'Icon';
  }

  public getOption(): IconOption {
    const splitRefs: string[] = this.sc.refs.split(':');
    const iconRef: string = splitRefs.pop()!;
    const providerAlias: string = splitRefs[0] || getDefaultIconProvider()!;
    const { type, resolve } = getIconProvider(providerAlias)!;

    return { provider: providerAlias, ref: iconRef, type, resolve };
  }

  public getClassNames(): string[] {
    return [...super.getClassNames(), this.getModifierClassName(this.getOption().type)];
  }

  public getFontIconClassNames(): string[] {
    const { ref, type, resolve } = this.getOption();

    let classNames: string[] = [];

    if (type === 'font' && typeof resolve === 'function') {
      const resolved = resolve(ref);

      if (typeof resolved === 'string' || Array.isArray(resolved)) {
        classNames = ([] as string[]).concat(resolved);
      }
    }

    return classNames;
  }

  public getExtraClassNames(): string[] {
    return [...this.getFontIconClassNames(), ...super.getExtraClassNames()];
  }

  public getSvgIconRef(): string {
    const { ref, type, resolve } = this.getOption();

    let iconRef: string = '';

    if (type === 'svg' && typeof resolve === 'function') {
      const resolved = resolve(ref);

      if (typeof resolved === 'string') {
        iconRef = resolved;
      }
    }

    return iconRef;
  }
}

export { IconHeadlessComponent };
