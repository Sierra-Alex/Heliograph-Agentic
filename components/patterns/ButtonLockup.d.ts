/** Primary + secondary button pair. Figma: button-lockup (node 400:39735). */
export interface ButtonLockupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Matches the Button size. @default "lg" */
  size?: "lg" | "sm";
  /** Render the secondary button. @default true */
  includeSecondary?: boolean;
  /** @default false */
  onDark?: boolean;
  /** @default "Get Started" */
  primaryLabel?: string;
  /** @default "Learn More" */
  secondaryLabel?: string;
}
export function ButtonLockup(props: ButtonLockupProps): JSX.Element;
