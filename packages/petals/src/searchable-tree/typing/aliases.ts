import { TreeNodeData } from '../../tree';

type TreeNodeFilter = (keyword: string, data: TreeNodeData) => boolean;

export { TreeNodeFilter };
export * from '../../tree/typing';
