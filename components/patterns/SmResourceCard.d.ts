/** Small resource card with optional image or icon layout. */
export interface SmResourceCardProps {
  /** @default "gray" */
  color?: "gray" | "white" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Show large image at top. When false, shows icon layout. @default true */
  bigImage?: boolean;
  /** Icon for the icon layout. @default "diamond" */
  icon?: "diamond" | "grid" | "grow" | "speed" | "pulse" | "target" | "stack" | "ai" | "scale" | "rows" | "product" | "schedule" | "business-size" | "calendar" | "cart" | "check" | "community" | "edit" | "folder" | "industries" | "learn" | "lock" | "logo" | "logo-laptop" | "media" | "medicine" | "partnerships" | "payment" | "phone-analytics" | "shopping-bag" | "shopping-tag" | "teams" | "web";
  /** Show primary and secondary buttons. @default true */
  includeButton?: boolean;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
  className?: string;
}
export function SmResourceCard(props: SmResourceCardProps): JSX.Element;
