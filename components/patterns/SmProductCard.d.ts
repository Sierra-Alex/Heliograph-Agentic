/** Half-width product card: text beside a 1:1 image panel. Figma: sm-product-cards (node 132:19820). */
export interface SmProductCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Card fill. @default "gray" */
  cardBackground?: "gray" | "white" | "dark";
  /** Hue of the card's glow. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Text left, image right. @default true */
  leftAligned?: boolean;
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** @default "Learn More" */
  ctaLabel?: string;
  /** @default true */
  includeButton?: boolean;
  /** Real imagery for the panel. */
  children?: React.ReactNode;
}
export function SmProductCard(props: SmProductCardProps): JSX.Element;
