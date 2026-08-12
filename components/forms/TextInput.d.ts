/** 36px-tall single-line text field. */
export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,"type"> {
  /** Lava border on a 20% lava fill. @default false */
  error?: boolean;
  /** Purple border plus a grass check icon. @default false */
  valid?: boolean;
}
export function TextInput(props: TextInputProps): JSX.Element;
