import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IMessageComponent } from '../typing';

class MessageHeadlessComponent extends BaseHeadlessComponent<IMessageComponent> {
  public getComponentName(): string {
    return getComponentConfig('message', 'name') || 'Message';
  }
}

export { MessageHeadlessComponent };
