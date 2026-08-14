/** Full-bleed product carousel: statement headline, one large 1:2 panel, and a row of selectable captions. Figma: 02 Lg Product Carousel (node 127:15403). */
export interface LgProductCarouselProps extends React.HTMLAttributes<HTMLElement> {
  /** Hue family. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Page surface. @default "dark" */
  backgroundColor?: "dark" | "light" | "muted";
  /** @default "Accessible data, across your organization." */
  headline?: string;
  items?: { headline: string; subhead?: string }[];
  /** Index selected on first render. @default 0 */
  active?: number;
  onSelect?: (index: number) => void;
  /** Real imagery for the panel. */
  children?: React.ReactNode;
}
export function LgProductCarousel(props: LgProductCarouselProps): JSX.Element;
