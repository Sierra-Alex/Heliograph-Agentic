/**
 * Sub-page hero: left text lockup beside a square image, on a light vertical gradient.
 */
export interface SmHeroProps {
  /** @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** @default "simple" */
  gradientStyle?: "simple" | "sliced";
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  tagText?: string;
  headline?: string;
  subhead?: string;
  /** @default true */
  includeNav?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function SmHero(props: SmHeroProps): JSX.Element;
