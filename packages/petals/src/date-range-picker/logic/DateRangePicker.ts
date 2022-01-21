import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDateRangePickerComponent } from '../typing';

class DateRangePickerHeadlessComponent extends BaseHeadlessComponent<IDateRangePickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('dateRangePicker', 'name') || 'DateRangePicker';
  }
}

export { DateRangePickerHeadlessComponent };
