/** Editorial card: image well over headline, subhead and a tertiary link. Figma: Content Cards (nodes 127:4999 / 127:4972). */
export interface ContentCardProps extends React.HTMLAttributes<HTMLElement> {
  /** 1:2 banner crop instead of the 1:1 square. @default true */
  bigImage?: boolean;
  /** @default true */
  includeButton?: boolean;
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** @default "Learn More" */
  ctaLabel?: string;
  /** Real imagery for the image well. */
  children?: React.ReactNode;
}
export function ContentCard(props: ContentCardProps): JSX.Element;
