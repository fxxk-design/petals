import { GraphicFitType } from './aliases';

interface IGraphicComponent {
  readonly src: string;
  readonly fallback: string;
  readonly alt: string;
  readonly fit: GraphicFitType;
  onLoad(evt: Event): void;
  onError(evt: Event): boolean;
}

export { IGraphicComponent };
