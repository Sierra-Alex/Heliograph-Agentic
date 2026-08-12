/** Circular arrow button — carousel and pagination control. */
export interface RoundIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "left" */
  direction?: "left" | "right";
  /** lg = 32px, sm = 24px. @default "lg" */
  size?: "lg" | "sm";
  /** @default false */
  onDark?: boolean;
}
export function RoundIconButton(props: RoundIconButtonProps): JSX.Element;
