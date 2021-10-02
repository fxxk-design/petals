import { getComponentConfig } from '../../basic';

function getListComponentName(): string {
  return getComponentConfig('list', 'name') || 'List';
}

export { getListComponentName };
