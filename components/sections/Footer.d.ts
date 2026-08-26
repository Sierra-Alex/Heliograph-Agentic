/**
 * Site footer — CTA lockup over a four-column link card on a dark hero gradient.
 */
export interface FooterProps {
  /** Gradient hue. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Show the CTA lockup above the card. @default true */
  includeCta?: boolean;
  /** Show the four-column link grid. @default true */
  fullNav?: boolean;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  ctaHeadline?: string;
  ctaSubhead?: string;
  /** Path to the full Mixpanel logo. @default "assets/mixpanel-logo.svg" — pass a path relative to YOUR page */
  logoSrc?: string;
  className?: string;
}
export function Footer(props: FooterProps): JSX.Element;
