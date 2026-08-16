/** Full-width section displaying a row of Stat components with an optional CoreTypeLockups headline. */
export interface StatLockupProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "light" */
  color?: "light" | "default" | "muted";
  /** @default 2 */
  numberOfStats?: 2 | 3 | 4;
  /** @default false */
  addHeadline?: boolean;
  tagText?: string;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  value?: string;
  suffix?: string;
  description?: string;
  stats?: Array<{ value: string; suffix: string; description: string }>;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  className?: string;
}
export function StatLockup(props: StatLockupProps): JSX.Element;
