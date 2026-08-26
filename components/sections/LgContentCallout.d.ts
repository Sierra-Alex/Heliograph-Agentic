/** Large content callout: image panel beside CoreTypeLockups + content block. Figma node 1267:18900. */
export interface LgContentCalloutProps extends React.HTMLAttributes<HTMLElement> {
  /** Accent hue. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Page surface. @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  /** Which side the image sits on. @default "right" */
  imagePosition?: "left" | "right";
  /** Content block below the type lockup. @default "bullets" */
  content?: "bullets" | "logos" | "quote" | "form" | "stats";
  /** @default "Resource" */
  tagText?: string;
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** Primary button label. @default "Learn More" */
  ctaLabel?: string;
  /** Secondary button label. */
  secondaryLabel?: string;
  /** Bullet point strings. */
  items?: string[];
  /** Real imagery for the panel. */
  children?: React.ReactNode;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
}
export function LgContentCallout(props: LgContentCalloutProps): JSX.Element;
