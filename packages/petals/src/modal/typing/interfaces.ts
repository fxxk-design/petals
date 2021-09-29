interface IModal {
  readonly title: string;
  readonly visible: boolean;
  readonly closable: boolean;
  readonly disableMask: boolean;
  readonly hideMask: boolean;
  readonly appendToBody: boolean;
  readonly destroyOnClose: boolean;
}

export { IModal };
