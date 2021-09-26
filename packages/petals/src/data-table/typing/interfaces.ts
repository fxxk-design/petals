import { ColumnProps } from './aliases';

interface IDataTableComponent {
  readonly dataSource: Record<string, any>[];
  readonly columns: ColumnProps[];
  readonly loading: boolean;
  readonly hidePagination: boolean;
  readonly currentPage: number;
  readonly pageSize: number;
  readonly total: number;
  readonly pageSizes: number[];
}

export { IDataTableComponent };
