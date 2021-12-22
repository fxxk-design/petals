import { ColumnProps } from './aliases';

interface IDataTableComponent {
  readonly dataSource: Record<string, any>[];
  readonly columns: ColumnProps[];
  readonly rowKey: string | ((record: Record<string, any>) => string);
  readonly loading: boolean;
  readonly hidePagination: boolean;
  readonly currentPage: number;
  readonly pageSize: number;
  readonly total: number;
  readonly pageSizes: number[];
  readonly onSelectionChange: (records: Record<string, any>[]) => void;
  readonly onCurrentChange: (currentPage: number) => void;
  readonly onSizeChange: (pageSize: number) => void;
}

export { IDataTableComponent };
