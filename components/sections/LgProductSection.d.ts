/**
 * Large product section: headline lockup, one gradient 2:1 panel, and optional sub-text blocks.
 * Supports both centered and horizontal headline layouts with the standard light/dark surface pattern.
 */
export interface LgProductSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** Centred lockup or headline-left with the button right. @default "centered" */
  headlineLayout?: "centered" | "horizontal";
  /** Accent hue — drives panel gradient, tag color, and on-dark surface. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Background surface. @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  /** How many caption blocks sit under the panel, 0-3. @default 0 */
  subTextBlocks?: 0 | 1 | 2 | 3;
  blocks?: { headline?: string; subhead?: string }[];
  /** @default "Product" */
  tagText?: string;
  /** @default "Get Started" */
  primaryLabel?: string;
  /** @default "Learn More" */
  secondaryLabel?: string;
  /** Drives the responsive heading step-down. @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  /** Content for the gradient panel. */
  children?: React.ReactNode;
}
export function LgProductSection(props: LgProductSectionProps): JSX.Element;
