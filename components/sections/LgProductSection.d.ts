/** Large product section: section lockup, one gradient 1:2 panel, optional sub-text blocks. Figma: lg product section / 05 Lg Product Card Lockup (node 1191:20609). */
export interface LgProductSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** Centred lockup or headline-left with the button right. @default "centered" */
  headlineLayout?: "centered" | "horizontal";
  /** Page surface. @default "light" */
  surfaceColor?: "light" | "default" | "muted" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Gradient hue of the panel. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard";
  /** How many caption blocks sit under the panel, 0-3. @default 0 */
  subTextBlocks?: 0 | 1 | 2 | 3;
  blocks?: { headline?: string; subhead?: string }[];
  /** @default "Product" */
  tagText?: string;
  /** Real imagery for the panel. */
  children?: React.ReactNode;
}
export function LgProductSection(props: LgProductSectionProps): JSX.Element;
