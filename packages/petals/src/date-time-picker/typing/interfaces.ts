import { DateFormControlValue, IDateFormControl } from '../../form-control';
import { DateTimePickerOption } from './aliases';

interface IDateTimePickerComponent
  extends IDateFormControl<DateFormControlValue, DateTimePickerOption> {}

export { IDateTimePickerComponent };
