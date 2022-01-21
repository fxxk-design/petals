interface DatePickerOption {
  readonly disableDate?: (date: Date) => boolean;
  readonly showToday?: boolean;
}

export { DatePickerOption };
