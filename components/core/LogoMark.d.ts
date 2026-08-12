/** The Mixpanel logo. Figma: logo-mark / MXP - Main Logo (3 colour variants). */
export interface LogoMarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Symbol only, or symbol plus wordmark. @default "full" */
  variant?: "mark" | "full";
  /** Brand purple, or flattened to one tone. @default "color" */
  color?: "color" | "dark" | "light";
  /** Rendered height in px; 33px is the footer's size. */
  height?: number;
}
export function LogoMark(props: LogoMarkProps): JSX.Element;
