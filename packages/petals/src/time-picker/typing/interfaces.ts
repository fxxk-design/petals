import { DateFormControlValue, IDateFormControl } from '../../form-control';

interface ITimePickerComponent
  extends IDateFormControl<DateFormControlValue, Record<string, any>> {}

export { ITimePickerComponent };
