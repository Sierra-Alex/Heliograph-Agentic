/** Small resource card with optional image or icon layout. */
export interface SmResourceCardProps {
  /** @default "gray" */
  color?: "gray" | "white" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Show large image at top. When false, shows icon layout. @default true */
  bigImage?: boolean;
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
