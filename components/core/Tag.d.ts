/** Small labelled chip used above headlines and inside cards. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Hue family. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "peach" | "mustard" | "grass";
  /** @default "lg" */
  size?: "lg" | "sm";
  /** @default false */
  onDark?: boolean;
}
export function Tag(props: TagProps): JSX.Element;
