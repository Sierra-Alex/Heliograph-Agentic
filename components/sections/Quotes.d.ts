/** Customer quote carousel, optionally beside a video panel. Figma: Video & Quote Carousel (node 127:16159). */
export interface QuotesProps extends React.HTMLAttributes<HTMLElement> {
  /** Surface hue. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  quotes?: { quote: string; name: string; role?: string }[];
  /** Index shown on first render. @default 0 */
  active?: number;
  /** Customer logos acting as the carousel's selectors. @default 3 */
  logoCount?: number;
  onSelect?: (index: number) => void;
  /** Video or image panel beside the quote. */
  children?: React.ReactNode;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
}
export function Quotes(props: QuotesProps): JSX.Element;
