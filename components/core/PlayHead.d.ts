/** Circular play button — 48px pill with a right-pointing triangle. */
export interface PlayHeadProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default false */
  onDark?: boolean;
  className?: string;
}
export function PlayHead(props: PlayHeadProps): JSX.Element;
