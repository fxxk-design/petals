import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDateTimeRangePickerComponent } from '../typing';

class DateTimeRangePickerHeadlessComponent extends BaseHeadlessComponent<IDateTimeRangePickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('dateTimeRangePicker', 'name') || 'DateTimeRangePicker';
  }
}

export { DateTimeRangePickerHeadlessComponent };
