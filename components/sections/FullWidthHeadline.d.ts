/** One full-bleed statement headline set in H3. Figma: Full Width Headlines (node 127:15352). */
export interface FullWidthHeadlineProps extends React.HTMLAttributes<HTMLElement> {
  /** Hue the headline text takes. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Tinted headline for dark surfaces; false uses the on-light headline colour. @default true */
  darkTheme?: boolean;
}
export function FullWidthHeadline(props: FullWidthHeadlineProps): JSX.Element;
