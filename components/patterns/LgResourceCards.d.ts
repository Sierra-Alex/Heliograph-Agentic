/** Large split card: tag + headline + subhead + CTA beside an image panel. */
export interface LgResourceCardsProps {
  /** @default "gray" */
  color?: "gray" | "white" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** @default "right" */
  imagePosition?: "left" | "right";
  /** @default "center" */
  alignment?: "left" | "center";
  /** true = 1:1 panel, false = 3:2. @default true */
  largeImage?: boolean;
  tagText?: string;
  headline?: string;
  subhead?: string;
  ctaLabel?: string;
  /** Replace the grey placeholder with real imagery. */
  children?: React.ReactNode;
  className?: string;
}
export function LgResourceCards(props: LgResourceCardsProps): JSX.Element;
