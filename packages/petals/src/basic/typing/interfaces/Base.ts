import { ClassName } from '../aliases';

interface IBaseComponent<CtorType = string> {
  readonly tag: CtorType;
  readonly className: ClassName;
}

export { IBaseComponent };
