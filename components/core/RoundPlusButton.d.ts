/** Circular plus button — expand or add-row control. */
export interface RoundPlusButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** lg = 32px, sm = 24px. @default "lg" */
  size?: "lg" | "sm";
  /** @default false */
  onDark?: boolean;
}
export function RoundPlusButton(props: RoundPlusButtonProps): JSX.Element;
