import { DrawerPlacement, DrawerSize } from './aliases';

interface IDrawerComponent {
  readonly title: string;
  readonly placement: DrawerPlacement;
  readonly size: DrawerSize;
  readonly visible: boolean;
  readonly closable: boolean;
  readonly disableMask: boolean;
  readonly hideMask: boolean;
  readonly appendToBody: boolean;
  readonly destroyOnClose: boolean;
}

export { IDrawerComponent };
