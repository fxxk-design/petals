import { TreeData, TreeNodeFilter } from '../typing';

function resolveTreeProps(props: Record<string, any>): Record<string, any> {
  const resolved: Record<string, any> = {};

  [
    // Keys from `IFormControl`
    'name',
    'value',
    'disabled',
    'readonly',
    // Keys from `ITreeComponent`
    'checkable',
    'expanded',
    'expandedKeys',
    'selectedKeys',
    'nodeField',
    'nodeRenderer',
    'emptyText',
  ].forEach(k => (resolved[k] = props[k]));

  resolved.className = props.treeClassName;

  return resolved;
}

function resolveTreeData(
  dataSource: TreeData,
  childrenName: string,
  keyword: string,
  filter: TreeNodeFilter,
): TreeData {
  if (keyword === '') {
    return dataSource;
  }

  const resolved: TreeData = [];

  dataSource.forEach(nodeData => {
    if (filter(keyword, nodeData)) {
      resolved.push(nodeData);
    } else if ((nodeData[childrenName] || []).length > 0) {
      const filteredChildren = resolveTreeData(
        nodeData[childrenName],
        childrenName,
        keyword,
        filter,
      );

      if (filteredChildren.length > 0) {
        resolved.push({ ...nodeData, [childrenName]: filteredChildren });
      }
    }
  });

  return resolved;
}

export { resolveTreeProps, resolveTreeData };
