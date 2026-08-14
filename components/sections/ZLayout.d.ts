/**
 * Alternating feature row — text one side, square gradient panel the other. Stack several and flip imagePosition.
 */
export interface ZLayoutProps {
  /** @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** @default "right" */
  imagePosition?: "left" | "right";
  /** @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  /** @default "desktop-plus" */
  viewport?: "desktop-plus" | "desktop" | "tablet" | "phone";
  tagText?: string;
  headline?: string;
  subhead?: string;
  children?: React.ReactNode;
  className?: string;
}
export function ZLayout(props: ZLayoutProps): JSX.Element;
