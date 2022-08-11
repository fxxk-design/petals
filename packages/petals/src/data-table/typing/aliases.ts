import { NumberOrString, HorizontalAlignment } from '../../basic';

type DensityType = 'low' | 'medium' | 'high';

type ColumnType = 'index' | 'selection' | 'expand';

type ColumnProps = {
  title: string;
  key: string;
  type?: ColumnType;
  width?: NumberOrString;
  minWidth?: NumberOrString;
  maxWidth?: NumberOrString;
  align?: HorizontalAlignment;
  fixed?: 'left' | 'right';
  ellipsis?: boolean;
  resizable?: boolean;
  render?: (...args: any[]) => any;
};

export { DensityType, ColumnProps };
