/** Infinite-scrolling customer logo strip with edge mask. */
export interface LogoCarouselProps {
  /** @default true */
  includeHeadline?: boolean;
  headline?: string;
  /** @default false */
  onDark?: boolean;
  /** tight caps the row at 960px. @default "full" */
  size?: "full" | "tight";
  /** Vertical padding: lg = 80px, sm = 40px. @default "lg" */
  stackSizing?: "lg" | "sm";
  /** @default 11 */
  logoCount?: number;
  className?: string;
}
export function LogoCarousel(props: LogoCarouselProps): JSX.Element;
