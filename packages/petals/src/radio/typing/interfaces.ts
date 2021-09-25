import { ICheckableFormControl } from '../../form-control';

interface IRadioComponent extends ICheckableFormControl {}

interface IRadioGroupComponent extends Omit<ICheckableFormControl, 'checked'> {}

export { IRadioComponent, IRadioGroupComponent };
