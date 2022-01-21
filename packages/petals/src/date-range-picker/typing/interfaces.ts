import { DateFormControlValue, IDateRangeFormControl } from '../../form-control';
import { DateRangePickerOption } from './aliases';

interface IDateRangePickerComponent
  extends IDateRangeFormControl<DateFormControlValue[], DateRangePickerOption> {}

export { IDateRangePickerComponent };
