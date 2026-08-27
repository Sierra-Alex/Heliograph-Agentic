/** Section header with the text on the left and the buttons pinned bottom-right. */
export interface HorizontalCoreTypeProps {
  /** Visual heading size — selects the type scale. @default "H1" */
  heading?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  /** Override the HTML heading tag independently of visual size, for SEO hierarchy. */
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
