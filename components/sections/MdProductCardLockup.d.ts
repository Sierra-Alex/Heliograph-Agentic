/**
 * Sticky text column beside a stacked column of ProductCards.
 */
export interface MdProductCardLockupProps {
  /** @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Ignored when `cards` is supplied. @default 3 */
  cardCount?: 3 | 4 | 5;
  /** Per-card content overrides. */
  cards?: { color?: string; headline?: string; subhead?: string }[];
  /** @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  headline?: string;
  subhead?: string;
  className?: string;
}
export function MdProductCardLockup(props: MdProductCardLockupProps): JSX.Element;
