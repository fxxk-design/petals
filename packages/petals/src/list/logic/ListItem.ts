import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IListItemComponent } from '../typing';
import { getListComponentName } from './utils';

class ListItemHeadlessComponent extends BaseHeadlessComponent<IListItemComponent> {
  protected getDescendantOfParent(): string {
    return 'item';
  }

  public getComponentName(): string {
    return getComponentConfig('listItem', 'name') || 'ListItem';
  }

  public getParentComponentName(): string {
    return getListComponentName();
  }
}

export { ListItemHeadlessComponent };
