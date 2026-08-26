/**
 * Full-width section containing a large horizontal product card.
 * Card has a CoreTypeLockups (H3, tag, button) on one side and a 1:1 gradient image on the other.
 */
export interface LgProductCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Neutral page surface. @default "light" */
  color?: "light" | "default" | "muted";
  /** @default false */
  onDark?: boolean;
  /** @default "purple" */
  hue?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Show hue-tinted drop shadow on the card. @default false */
  shadow?: boolean;
  /** @default "right" */
  imagePosition?: "right" | "left";
  tagText?: string;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
}
export function LgProductCard(props: LgProductCardProps): JSX.Element;
