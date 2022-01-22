interface DatePickerOption {
  readonly disableDate?: (date: Date) => boolean;
  readonly showNow?: boolean;
}

export { DatePickerOption };
