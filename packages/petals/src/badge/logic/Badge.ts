import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IBadgeComponent } from '../typing';

class BadgeHeadlessComponent extends BaseHeadlessComponent<IBadgeComponent> {
  public getComponentName(): string {
    return getComponentConfig('badge', 'name') || 'Badge';
  }
}

export { BadgeHeadlessComponent };
