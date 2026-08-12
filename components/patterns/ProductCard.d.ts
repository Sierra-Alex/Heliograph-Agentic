/**
 * Wide product card: text lockup on one side, a square gradient panel on the other.
 */
export interface ProductCardProps {
  /** Surface the card sits on. @default "gray" */
  background?: "gray" | "white" | "dark";
  /** Gradient hue for the image panel. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** @default true */
  leftAligned?: boolean;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}
export function ProductCard(props: ProductCardProps): JSX.Element;
