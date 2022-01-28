import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDataTableComponent } from '../typing';

class DataTableHeadlessComponent extends BaseHeadlessComponent<IDataTableComponent> {
  public getComponentName(): string {
    return getComponentConfig('dataTable', 'name') || 'DataTable';
  }

  public getClassNames(): string[] {
    const classNames = super.getClassNames();

    if (this.sc.autoHeight !== true) {
      classNames.push(this.getModifierClassName('fixedHeight'));
    }

    return classNames;
  }
}

export { DataTableHeadlessComponent };
