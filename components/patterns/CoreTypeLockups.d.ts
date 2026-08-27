/**
 * Stacked tag + headline + subhead + button lockup. The backbone of every marketing section.
 */
export interface CoreTypeLockupsProps {
  /** Visual heading size — selects the type scale. @default "H1" */
  heading?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  /** Override the HTML heading tag independently of visual size, for SEO hierarchy. e.g. headingTag="h1" with heading="H2" renders an h1 at H2 visual size. */
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
export function CoreTypeLockups(props: CoreTypeLockupsProps): JSX.Element;
