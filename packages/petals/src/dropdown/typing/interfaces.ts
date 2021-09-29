import { IMenuComponent, IMenuItemComponent } from '../../menu';

import { DropdownMenuTrigger, DropdownMenuPlacement } from './aliases';

interface IDropdownComponent {
  readonly trigger: DropdownMenuTrigger;
  readonly position: DropdownMenuPlacement;
}

interface IDropdownMenuComponent extends IMenuComponent {}

interface IDropdownMenuItemComponent extends IMenuItemComponent {}

export { IDropdownComponent, IDropdownMenuComponent, IDropdownMenuItemComponent };
