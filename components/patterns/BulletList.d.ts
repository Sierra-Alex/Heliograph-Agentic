/** Rule above a tick-marked feature list. Figma: h3-variations-components (node 127:12701). */
export interface BulletListProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: string[];
  /** Centre the rows. @default false */
  centerAligned?: boolean;
  /** @default false */
  onDark?: boolean;
  /** Show the hairline above the list. @default true */
  rule?: boolean;
}
export function BulletList(props: BulletListProps): JSX.Element;
