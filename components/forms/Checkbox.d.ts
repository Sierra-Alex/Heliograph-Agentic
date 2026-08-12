/** 16px square checkbox with a purple checked fill. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,"type"> {
  /** Error styling — lava border on a 20% lava fill. @default false */
  error?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
