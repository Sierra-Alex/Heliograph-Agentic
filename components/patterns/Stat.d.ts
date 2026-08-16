/** Large stat value with suffix and description line. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Numeric value to display. @default "00" */
  value?: string;
  /** Unit suffix (e.g. "X", "%", "M"). @default "X" */
  suffix?: string;
  /** Description line below the stat. */
  description?: string;
  /** @default false */
  onDark?: boolean;
  /** @default "purple" */
  hue?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
}
export function Stat(props: StatProps): JSX.Element;
