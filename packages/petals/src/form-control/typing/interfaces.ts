import { CheckableValue } from '../../basic';
import { FormControlSize, DateFormControlValue, FileFormControlValue } from './aliases';

interface IFormControl<ValueType> {
  readonly name: string;
  readonly value: ValueType;
  readonly disabled: boolean;
  readonly readonly: boolean;
  readonly onChange: (value: ValueType) => void;
}

interface IFileFormControl<ValueType = FileFormControlValue> extends IFormControl<ValueType> {
  readonly accept: string;
  readonly multiple: boolean;
}

interface ICheckableFormControl<ValueType = CheckableValue> extends IFormControl<ValueType> {
  readonly checked: boolean;
}

interface IInputtableFormControl<ValueType, InputValueType = ValueType>
  extends IFormControl<ValueType> {
  readonly placeholder: string;
  readonly clearable: boolean;
  readonly size: FormControlSize;
  readonly onInput: (value: InputValueType) => void;
}

interface INumericFormControl<ValueType = number>
  extends IInputtableFormControl<ValueType, string> {
  readonly min: number;
  readonly max: number;
  readonly step: number;
}

interface ITextualFormControl extends IInputtableFormControl<string> {
  readonly minLength: number;
  readonly maxLength: number;
}

interface IBaseDateFormControl<
  ValueType extends DateFormControlValue | DateFormControlValue[],
  PickerOption
> extends Omit<IInputtableFormControl<ValueType>, 'onChange' | 'onInput'> {
  readonly inputtable: boolean;
  readonly format: string;
  readonly pickerOption: PickerOption;
  readonly popupClassName: string;
}

interface IDateFormControl<
  ValueType extends DateFormControlValue,
  PickerOption extends Record<string, any>
> extends IBaseDateFormControl<ValueType, PickerOption> {
  readonly onChange: (value: ValueType, date: Date | null) => void;
}

interface IDateRangeFormControl<
  ValueType extends DateFormControlValue[],
  PickerOption extends Record<string, any>
> extends Omit<IBaseDateFormControl<ValueType, PickerOption>, 'placeholder'> {
  readonly placeholder: string[];
  readonly separator: string;
  readonly onChange: (value: ValueType, dates: (Date | null)[]) => void;
}

export {
  IFormControl,
  INumericFormControl,
  IFileFormControl,
  ICheckableFormControl,
  IInputtableFormControl,
  ITextualFormControl,
  IDateFormControl,
  IDateRangeFormControl,
};
