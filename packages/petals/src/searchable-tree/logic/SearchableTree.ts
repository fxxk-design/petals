import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { TreeData, ISearchableTreeComponent } from '../typing';
import { resolveTreeProps, resolveTreeData } from '../helper';

class SearchableTreeHeadlessComponent extends BaseHeadlessComponent<ISearchableTreeComponent> {
  public getComponentName(): string {
    return getComponentConfig('searchableTree', 'name') || 'SearchableTree';
  }

  public resolveTreeProps(): Record<string, any> {
    return resolveTreeProps(this.sc);
  }

  public resolveTreeData(keyword: string): TreeData {
    return resolveTreeData(
      this.sc.dataSource,
      this.sc.nodeField.children || 'children',
      keyword,
      this.sc.filter,
    );
  }
}

export { SearchableTreeHeadlessComponent };
