import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IListHeaderComponent } from '../typing';
import { getListComponentName } from './utils';

class ListHeaderHeadlessComponent extends BaseHeadlessComponent<IListHeaderComponent> {
  protected getDescendantOfParent(): string {
    return 'header';
  }

  public getComponentName(): string {
    return getComponentConfig('listHeader', 'name') || 'ListHeader';
  }

  public getParentComponentName(): string {
    return getListComponentName();
  }
}

export { ListHeaderHeadlessComponent };
