import { IModal } from '../../modal';

import { DrawerPlacement, DrawerSize } from './aliases';

interface IDrawerComponent extends IModal {
  readonly placement: DrawerPlacement;
  readonly size: DrawerSize;
}

export { IDrawerComponent };
