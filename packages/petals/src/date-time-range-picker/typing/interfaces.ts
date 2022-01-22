import { DateFormControlValue, IDateRangeFormControl } from '../../form-control';
import { DateTimeRangePickerOption } from './aliases';

interface IDateTimeRangePickerComponent
  extends IDateRangeFormControl<DateFormControlValue[], DateTimeRangePickerOption> {}

export { IDateTimeRangePickerComponent };
