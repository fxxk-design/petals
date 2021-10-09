import { ITreeComponent } from '../../tree';
import { TreeNodeFilter } from './aliases';

interface ISearchableTreeComponent extends ITreeComponent {
  readonly placeholder: string;
  readonly filter: TreeNodeFilter;
  readonly searchContainerClassName: string;
  readonly searchClassName: string;
  readonly searchIcon: string;
  readonly searchIconClassName: string;
  readonly treeContainerClassName: string;
  readonly treeClassName: string;
}

export { ISearchableTreeComponent };
