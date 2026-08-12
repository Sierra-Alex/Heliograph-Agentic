/** Headline on the left, one button baseline-aligned on the right. Figma: Horizontal Headline (node 127:14987). */
export interface HorizontalHeadlineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Headline step. @default "h2" */
  size?: "h1" | "h2" | "h3";
  /** @default false */
  onDark?: boolean;
  /** @default "Headline goes here" */
  headline?: string;
  /** @default "Learn More" */
  buttonLabel?: string;
  /** @default true */
  includeButton?: boolean;
}
export function HorizontalHeadline(props: HorizontalHeadlineProps): JSX.Element;
