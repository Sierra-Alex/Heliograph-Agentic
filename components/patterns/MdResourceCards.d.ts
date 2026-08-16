/** Medium resource card with image, tag, H4 headline, subhead, and button lockup. */
export interface MdResourceCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "light" */
  pageBackground?: "light" | "muted" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  tagText?: string;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
  className?: string;
}
export function MdResourceCards(props: MdResourceCardsProps): JSX.Element;
