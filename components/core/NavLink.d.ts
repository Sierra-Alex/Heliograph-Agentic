/** Top-nav / footer navigation link. Figma: Nav Link (node 98:937). */
export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** @default "#" */
  href?: string;
  /** Full-opacity current state. @default false */
  active?: boolean;
  /** Show the 5x2.5 dropdown caret. @default false */
  caret?: boolean;
  /** @default false */
  onDark?: boolean;
}
export function NavLink(props: NavLinkProps): JSX.Element;
