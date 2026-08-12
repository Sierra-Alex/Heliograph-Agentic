/** 18px radio control with a white dot on a purple fill when selected. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,"type"> {
  /** @default false */
  error?: boolean;
}
export function Radio(props: RadioProps): JSX.Element;
