/** Flexible content slot — renders logos, quote, form, stats, or bullets inside a section lockup. */
export interface AddedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "logos" */
  content?: "logos" | "quote" | "form" | "stats" | "bullets";
  /** @default false */
  onDark?: boolean;
  /** @default "purple" */
  hue?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Number of logo placeholders. @default 4 */
  logoCount?: number;
  /** Label above logos. @default "Trusted by" */
  headline?: string;
  /** Quote text. */
  quote?: string;
  /** Quote attribution name. */
  quoteName?: string;
  /** Quote attribution title. */
  quoteTitle?: string;
  /** Bullet point strings. */
  items?: string[];
  /** Stat value. @default "00" */
  value?: string;
  /** Stat suffix. @default "X" */
  suffix?: string;
  /** Stat description. */
  description?: string;
  /** Form submit button label. @default "Click Me" */
  submitLabel?: string;
  className?: string;
}
export function AddedContent(props: AddedContentProps): JSX.Element;
