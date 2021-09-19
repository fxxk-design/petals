import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ISpacerComponent } from '../typing';

class SpacerHeadlessComponent extends BaseHeadlessComponent<ISpacerComponent> {
  public getComponentName(): string {
    return getComponentConfig('spacer', 'name') || 'Spacer';
  }
}

export { SpacerHeadlessComponent };
