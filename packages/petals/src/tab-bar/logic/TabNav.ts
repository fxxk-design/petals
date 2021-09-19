import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITabNavComponent } from '../typing';
import { getTabBarComponentName } from './utils';

class TabNavHeadlessComponent extends BaseHeadlessComponent<ITabNavComponent> {
  protected getDescendantOfParent(): string {
    return 'nav';
  }

  public getParentComponentName(): string {
    return getTabBarComponentName();
  }

  public getComponentName(): string {
    return getComponentConfig('tabNav', 'name') || 'TabNav';
  }

  public getClassNames(): string[] {
    const classNames: string[] = super.getClassNames();

    if (this.sc.active) {
      classNames.push('is-active');
    }

    if (this.sc.disabled) {
      classNames.push('is-disabled');
    }

    return classNames;
  }

  public getExtraClassNames(): string[] {
    const classNames: string[] = [];
    const { active, activeClassName, disabled, disabledClassName } = this.sc;

    if (active && activeClassName) {
      classNames.push(activeClassName);
    }

    if (disabled && disabledClassName) {
      classNames.push(disabledClassName);
    }

    return classNames;
  }
}

export { TabNavHeadlessComponent };
