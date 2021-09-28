interface IBaseComponent<CtorType = string> {
  readonly tag: CtorType;
  readonly className: string;
}

export { IBaseComponent };
