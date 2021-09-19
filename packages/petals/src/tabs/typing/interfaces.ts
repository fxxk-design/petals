import { TabNavFlag, TabBarPosition } from '../../tab-bar';

interface ITabsComponent {
  readonly fixed: boolean;
  readonly activeFlag: TabNavFlag;
  readonly tabBarPosition: TabBarPosition; // 选项卡显示位置
  readonly tabBarStretch: boolean; // 选项卡是否拉伸
}

interface ITabPaneComponent {
  readonly label: string; // 选项卡文本
}

export { ITabsComponent, ITabPaneComponent };
