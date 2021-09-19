import { getComponentConfig } from '../../basic';

function getTabBarComponentName(): string {
  return getComponentConfig('tabBar', 'name') || 'TabBar';
}

export { getTabBarComponentName };
