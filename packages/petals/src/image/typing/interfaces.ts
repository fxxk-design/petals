import { IGraphicComponent } from '../../graphic';

import { ImageSize } from './aliases';

interface IImageComponent extends IGraphicComponent {
  readonly width: ImageSize;
  readonly height: ImageSize;
}

export { IImageComponent };
