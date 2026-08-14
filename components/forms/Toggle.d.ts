/** 48x24 switch; the thumb carries a purple tick when on. */
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,"type"> {
  /** @default false */
  error?: boolean;
}
export function Toggle(props: ToggleProps): JSX.Element;
