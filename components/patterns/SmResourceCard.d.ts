/** Vertical card for grids — 3:2 image above a tag/headline/subhead/actions stack. */
export interface SmResourceCardProps {
  /** @default "gray" */
  color?: "gray" | "white" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  tagText?: string;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
  className?: string;
}
export function SmResourceCard(props: SmResourceCardProps): JSX.Element;
