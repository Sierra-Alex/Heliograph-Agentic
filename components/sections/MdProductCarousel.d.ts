/** Product carousel: caption stack beside a gradient image panel. Figma: Md Product Carousel (node 127:15576). */
export interface MdProductCarouselProps extends React.HTMLAttributes<HTMLElement> {
  /** Gradient hue of the image panel. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard";
  /** Page surface. @default "light" */
  pageBackground?: "light" | "default" | "muted" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** @default true */
  includeHeadline?: boolean;
  /** @default "Headline goes here" */
  headline?: string;
  /** Which side the panel sits on. @default "right" */
  imagePlacement?: "left" | "right";
  steps?: { headline: string; subhead?: string }[];
  /** Index selected on first render. @default 0 */
  active?: number;
  /** Progress of the active step's rule, 0-1. @default 0 */
  progress?: number;
  onSelect?: (index: number) => void;
  /** Real imagery for the panel. */
  children?: React.ReactNode;
}
export function MdProductCarousel(props: MdProductCarouselProps): JSX.Element;
