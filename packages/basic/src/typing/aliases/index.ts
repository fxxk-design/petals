import { DirectionType } from './direction';
import { IconOption } from './icon';

type ResizeType = DirectionType | 'both' | 'none';

type AdjustmentType = 'auto' | 'average';

type CheckableValue = string | number | boolean;

type ComponentStyle = { [key: string]: string };

type LoadingOption = {
  spinning?: boolean;
  fullscreen?: boolean;
  lock?: boolean;
  text?: string;
  spinner?: IconOption | string;
  background?: string;
};

type CommonTrigger = 'hover' | 'click';

type TriggerType = CommonTrigger | 'focus';

type StateClassNamePrefix = 'is' | 'has' | 'can';

type VariantClassName = string | Record<string, boolean>;

type ClassName = VariantClassName | VariantClassName[];

export {
  ResizeType,
  AdjustmentType,
  CheckableValue,
  ComponentStyle,
  LoadingOption,
  CommonTrigger,
  TriggerType,
  StateClassNamePrefix,
  VariantClassName,
  ClassName,
};

export * from './basic';
export * from './breakpoint';
export * from './color';
export * from './direction';
export * from './position';
export * from './alignment';
// export * from './shape';
export * from './size';
export * from './status';
export * from './icon';
