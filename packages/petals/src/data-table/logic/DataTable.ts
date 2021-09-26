import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDataTableComponent } from '../typing';

class DataTableHeadlessComponent extends BaseHeadlessComponent<IDataTableComponent> {
  public getComponentName(): string {
    return getComponentConfig('dataTable', 'name') || 'DataTable';
  }
}

export { DataTableHeadlessComponent };
