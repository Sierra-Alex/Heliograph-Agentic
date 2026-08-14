/**
 * Pill-shaped action button with the Heliograph animated arrow affix.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. @default "primary" */
  variant?: "primary" | "secondary" | "tertiary";
  /** lg = 16px label, sm = 12px label. @default "lg" */
  size?: "lg" | "sm";
  /** Invert for placement on a dark surface. @default false */
  onDark?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;
