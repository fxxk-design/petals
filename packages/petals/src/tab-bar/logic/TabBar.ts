import { BaseHeadlessComponent } from '../../basic';

import { ITabBarComponent } from '../typing';
import { getTabBarComponentName } from './utils';

class TabBarHeadlessComponent extends BaseHeadlessComponent<ITabBarComponent> {
  public getComponentName(): string {
    return getTabBarComponentName();
  }

  public getClassNames(): string[] {
    const classNames: string[] = super.getClassNames();

    if (this.sc.stretch) {
      classNames.push(this.getModifierClassName('stretch'));
    }

    return classNames;
  }
}

export { TabBarHeadlessComponent };
