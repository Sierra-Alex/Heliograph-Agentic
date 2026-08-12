/**
 * Full-bleed homepage hero: nav, centred lockup, logo strip and a large product image well on a dark vertical gradient.
 */
export interface LgHeroProps {
  /** Gradient hue. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** simple = one gradient; sliced = 11 stepped columns. @default "simple" */
  gradientStyle?: "simple" | "sliced";
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  headline?: string;
  subhead?: string;
  /** @default true */
  includeNav?: boolean;
  /** Replaces the image placeholder. */
  children?: React.ReactNode;
  className?: string;
}
export function LgHero(props: LgHeroProps): JSX.Element;
