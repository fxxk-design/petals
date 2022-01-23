import { LinkTarget } from './aliases';

interface ILinkComponent<LinkHref = string> {
  readonly href: LinkHref;
  readonly target: LinkTarget;
  readonly onClick: () => void;
}

export { ILinkComponent };
