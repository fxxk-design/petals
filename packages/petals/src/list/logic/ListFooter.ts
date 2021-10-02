import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IListFooterComponent } from '../typing';
import { getListComponentName } from './utils';

class ListFooterHeadlessComponent extends BaseHeadlessComponent<IListFooterComponent> {
  protected getDescendantOfParent(): string {
    return 'footer';
  }

  public getComponentName(): string {
    return getComponentConfig('listFooter', 'name') || 'ListFooter';
  }

  public getParentComponentName(): string {
    return getListComponentName();
  }
}

export { ListFooterHeadlessComponent };
