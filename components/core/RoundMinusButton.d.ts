/** Circular minus button — collapse or remove-row control. */
export interface RoundMinusButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** lg = 32px, sm = 24px. @default "lg" */
  size?: "lg" | "sm";
  /** @default false */
  onDark?: boolean;
}
export function RoundMinusButton(props: RoundMinusButtonProps): JSX.Element;
