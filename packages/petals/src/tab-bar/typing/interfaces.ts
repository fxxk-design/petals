import { TabNavFlag, TabNavType } from './aliases';

interface ITabNavComponent {
  readonly flag: TabNavFlag;
  readonly active: boolean;
  readonly disabled: boolean;
  readonly activeClassName: string;
  readonly disabledClassName: string;
}

interface ITabBarComponent {
  readonly navs: TabNavType[];
  readonly activeFlag: TabNavFlag;
  readonly stretch: boolean; // 选项卡是否拉伸
  readonly prevButtonIcon: string;
  readonly prevButtonClassName: string;
  readonly nextButtonIcon: string;
  readonly nextButtonClassName: string;
  readonly mainClassName: string;
  readonly extraClassName: string;
  readonly contentClassName: string;
  readonly navsClassName: string;
  readonly navClassName: string;
  readonly navActiveClassName: string;
  readonly navDisabledClassName: string;
}

export { ITabNavComponent, ITabBarComponent };
