/** Simplified top navigation bar with logo and optional action buttons — no nav links. */
export interface LimitedTopNavProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "login-primary-secondary" */
  desktopSize?: "login-primary-secondary" | "primary-secondary" | "primary" | "empty";
  /** @default "assets/logo.svg" */
  logoSrc?: string;
  /** @default "Click Me" */
  primaryLabel?: string;
  /** @default "Click Me" */
  secondaryLabel?: string;
  /** @default "desktop-plus" */
  viewport?: "desktop-plus" | "desktop" | "tablet" | "phone";
  className?: string;
}
export function LimitedTopNav(props: LimitedTopNavProps): JSX.Element;
