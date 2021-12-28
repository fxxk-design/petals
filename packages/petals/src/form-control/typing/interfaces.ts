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

interface IInputtableFormControl<ValueType> extends IFormControl<ValueType> {
  readonly placeholder: string;
  readonly clearable: boolean;
  readonly size: FormControlSize;
  readonly onInput: (value: ValueType) => void;
}

interface INumericFormControl<ValueType = number> extends IInputtableFormControl<ValueType> {
  readonly min: number;
  readonly max: number;
  readonly step: number;
}

interface ITextualFormControl extends IInputtableFormControl<string> {
  readonly minLength: number;
  readonly maxLength: number;
}

interface IDateFormControl<ValueType = DateFormControlValue>
  extends IInputtableFormControl<ValueType> {
  readonly format: string;
}

interface ICheckableFormControl<ValueType = CheckableValue> extends IFormControl<ValueType> {
  readonly checked: boolean;
}

export {
  IFormControl,
  INumericFormControl,
  IFileFormControl,
  IInputtableFormControl,
  ITextualFormControl,
  IDateFormControl,
  ICheckableFormControl,
};
