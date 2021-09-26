import { LooseSize } from '../../basic';

type GridType = 'grid' | 'flex';

type FormLayoutType = 'horizontal' | 'vertical' | 'inline';

type FormFieldLabelWidth = LooseSize;

type FormFieldLabelAlignment = 'left' | 'right';

type FormFieldLabelOption = {
  width?: FormFieldLabelWidth;
  align?: FormFieldLabelAlignment;
};

type FormFieldValidationOption = {
  required?: boolean;
};

type FormValidationOption = { [formFieldName: string]: FormFieldValidationOption };

export {
  GridType,
  FormLayoutType,
  FormFieldLabelWidth,
  FormFieldLabelAlignment,
  FormFieldLabelOption,
  FormValidationOption,
};
