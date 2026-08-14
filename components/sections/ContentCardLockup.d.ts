/** Rows of ContentCards under an optional section header. Figma: Content Card Lockups (node 127:16663). */
export interface ContentCardLockupProps extends React.HTMLAttributes<HTMLElement> {
  /** How many cards, 1-5; 4 and 5 wrap to two rows. @default 3 */
  cards?: 1 | 2 | 3 | 4 | 5;
  /** @default true */
  includeHeadline?: boolean;
  /** Headline treatment. @default "left" */
  headlineType?: "left" | "centered";
  /** Buttons in the header. @default "primary" */
  buttonInHeadline?: "none" | "primary" | "both";
  /** 1:2 card crop instead of 1:1. @default true */
  largeImage?: boolean;
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** @default "Resources" */
  tagText?: string;
  items?: { headline?: string; subhead?: string }[];
  /** Page surface. @default "light" */
  pageBackground?: "light" | "default" | "muted";
}
export function ContentCardLockup(props: ContentCardLockupProps): JSX.Element;
