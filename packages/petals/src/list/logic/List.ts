import { BaseHeadlessComponent } from '../../basic';

import { IListComponent } from '../typing';
import { getListComponentName } from './utils';

class ListHeadlessComponent extends BaseHeadlessComponent<IListComponent> {
  public getComponentName(): string {
    return getListComponentName();
  }

  public getClassNames(): string[] {
    const classNames: string[] = super.getClassNames();

    if (this.sc.bordered) {
      classNames.push(this.getModifierClassName('bordered'));
    }

    if (this.sc.divided) {
      classNames.push(this.getModifierClassName('divided'));
    }

    return classNames;
  }
}

export { ListHeadlessComponent };
