import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITransferComponent } from '../typing';

class TransferHeadlessComponent extends BaseHeadlessComponent<ITransferComponent> {
  public getComponentName(): string {
    return getComponentConfig('transfer', 'name') || 'Transfer';
  }
}

export { TransferHeadlessComponent };
