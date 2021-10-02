import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IFeedComponent } from '../typing';

class FeedHeadlessComponent extends BaseHeadlessComponent<IFeedComponent> {
  public getComponentName(): string {
    return getComponentConfig('feed', 'name') || 'Feed';
  }
}

export { FeedHeadlessComponent };
