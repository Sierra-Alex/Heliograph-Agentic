/** Single resource called out large: image panel beside an H3 lockup. Figma: Lg Resource Callout (node 127:15849). */
export interface LgContentCalloutProps extends React.HTMLAttributes<HTMLElement> {
  /** Page surface. @default "purple" */
  pageColor?: "white" | "default" | "muted" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Which side the image sits on. @default "left" */
  imagePosition?: "left" | "right";
  /** @default "Resource" */
  tagText?: string;
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** @default "Learn More" */
  ctaLabel?: string;
  /** Real imagery for the panel. */
  children?: React.ReactNode;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
}
export function LgContentCallout(props: LgContentCalloutProps): JSX.Element;
