/** Section header with the text on the left and the buttons pinned bottom-right. */
export interface HorizontalCoreTypeProps {
  /** @default "H1" */
  heading?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  tag?: boolean;
  tagText?: string;
  /** Accent hue — drives tag color and on-dark headline tint. @default "purple" */
  hue?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  button?: boolean;
  includeSecondary?: boolean;
  /** @default false */
  onDark?: boolean;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  className?: string;
}
export function HorizontalCoreType(props: HorizontalCoreTypeProps): JSX.Element;
