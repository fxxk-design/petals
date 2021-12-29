import { TabNavFlag, TabThemeType, TabBarPlacement } from '../../tab-bar';

interface ITabsComponent {
  readonly theme: TabThemeType;
  readonly fixed: boolean;
  readonly activeFlag: TabNavFlag;
  readonly tabBarPlacement: TabBarPlacement; // 选项卡显示位置
  readonly tabBarStretch: boolean; // 选项卡是否拉伸
  readonly onChange: (activeFlag: TabNavFlag) => void;
}

interface ITabPaneComponent {
  readonly flag: TabNavFlag;
  readonly label: string; // 选项卡文本
}

export { ITabsComponent, ITabPaneComponent };
