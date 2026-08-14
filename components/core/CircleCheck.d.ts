/** 16px filled circle with a tick — the bullet glyph in feature lists. Figma: circle-check (node 120:2861). */
export interface CircleCheckProps extends React.SVGAttributes<SVGSVGElement> {
  /** Tick tone: dark on a pale disc, or light on a purple disc. @default "dark" */
  baseColor?: "dark" | "light";
  /** @default 16 */
  size?: number;
}
export function CircleCheck(props: CircleCheckProps): JSX.Element;
