/**
 * Alternating feature row — text lockup one side, square gradient panel the other.
 * Stack several and flip imagePosition to create a zigzag reading flow.
 */
export interface ZLayoutProps {
  /** Accent hue — drives gradient, tag and on-dark surface. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** @default "right" */
  imagePosition?: "left" | "right";
  /** @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  tagText?: string;
  headline?: string;
  subhead?: string;
  /** Content rendered inside the image panel. Gradient shows behind. */
  children?: React.ReactNode;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  className?: string;
}
export function ZLayout(props: ZLayoutProps): JSX.Element;
