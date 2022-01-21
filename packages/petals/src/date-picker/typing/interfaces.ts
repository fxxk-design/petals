import { DateFormControlValue, IDateFormControl } from '../../form-control';
import { DatePickerOption } from './aliases';

interface IDatePickerComponent extends IDateFormControl<DateFormControlValue, DatePickerOption> {}

export { IDatePickerComponent };
