interface IMenuComponent {
  readonly defaultActiveFlag: string;
  readonly activeFlag: string;
  readonly defaultOpenFlags: string[];
  readonly openFlags: string[];
  readonly onSelect: (flag: string) => void;
}

interface IMenuItemComponent {
  readonly flag: string;
  readonly title: string;
  readonly icon: string;
  readonly disabled: boolean;
}

export { IMenuComponent, IMenuItemComponent };
