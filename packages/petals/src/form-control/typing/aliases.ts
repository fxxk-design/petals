type DateFormControlValue = number | string | Date;

type FileFormControlValue = File;

interface PrefixAndSuffix {
  type: string;
  tooltip?: string;
}

interface TextPrefixAndSuffix extends PrefixAndSuffix {
  type: 'text';
  text: string;
}

interface IconPrefixAndSuffix extends PrefixAndSuffix {
  type: 'icon';
  icon: string;
}

type FormControlPrefixAndSuffix = TextPrefixAndSuffix | IconPrefixAndSuffix;

export { DateFormControlValue, FileFormControlValue, FormControlPrefixAndSuffix };
export { SizeType as FormControlSize } from '../../basic';
