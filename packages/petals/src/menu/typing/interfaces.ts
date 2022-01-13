interface IMenuComponent {
  readonly activeFlag: string;
  readonly openFlags: string[];
}

interface IMenuItemComponent {
  readonly flag: string;
  readonly title: string;
  readonly icon: string;
  readonly disabled: boolean;
}

export { IMenuComponent, IMenuItemComponent };
