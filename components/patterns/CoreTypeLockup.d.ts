/**
 * Stacked tag + headline + subhead + button lockup. The backbone of every marketing section.
 */
export interface CoreTypeLockupProps {
  /** Semantic heading level; also selects the type scale. @default "H1" */
  heading?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  /** @default "left" */
  alignment?: "left" | "center";
  /** Show the eyebrow tag. @default false */
  tag?: boolean;
  tagText?: string;
  /** Accent hue — drives tag color and on-dark headline tint. @default "purple" */
  hue?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Show the button row. @default false */
  button?: boolean;
  /** @default true */
  includeSecondary?: boolean;
  /** @default false */
  onDark?: boolean;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  /** Drives the responsive heading step-down. @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  className?: string;
}
export function CoreTypeLockup(props: CoreTypeLockupProps): JSX.Element;
