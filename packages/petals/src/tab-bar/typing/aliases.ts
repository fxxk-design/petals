import { NumberOrString as TabNavFlag, PlacementType as TabBarPlacement } from '../../basic';

type TabThemeType = 'line' | 'card';

type TabNavType = {
  label?: string;
  disabled?: boolean;
  icon?: boolean;
};

export { TabNavFlag, TabThemeType, TabNavType, TabBarPlacement };
