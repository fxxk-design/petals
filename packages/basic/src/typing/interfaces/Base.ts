import { ClassName } from '../aliases';

interface IBaseComponent<
  CtorType = string,
  StyleType extends Record<string, any> = {}, // eslint-disable-line @typescript-eslint/ban-types
  ThemeType extends string = string,
> {
  readonly tag: CtorType;
  readonly className: ClassName;
  readonly style: Record<string, any>; // CSS variables
  readonly nativeStyle: StyleType; // CSS rules
  readonly theme: ThemeType;
}

export { IBaseComponent };
