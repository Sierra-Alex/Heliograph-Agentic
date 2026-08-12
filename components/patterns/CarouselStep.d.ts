/** One caption row in MdProductCarousel, with the progress rule under it. Figma: Md-product-carousel-components (node 127:15487). */
export interface CarouselStepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "Headline goes here" */
  headline?: string;
  /** Shown only while active. */
  subhead?: string;
  /** @default false */
  active?: boolean;
  /** Fill of the progress rule, 0-1. @default 0 */
  progress?: number;
  /** @default false */
  onDark?: boolean;
  /** Tertiary link under the subhead. @default false */
  includeButton?: boolean;
  /** @default "Learn More" */
  buttonLabel?: string;
}
export function CarouselStep(props: CarouselStepProps): JSX.Element;
