import { GraphicFitType } from './aliases';

interface IGraphicComponent {
  readonly src: string;
  readonly fallback: string;
  readonly alt: string;
  readonly fit: GraphicFitType;
  onLoad(): void;
  onError(): boolean;
}

export { IGraphicComponent };
