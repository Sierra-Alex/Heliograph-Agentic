/** Rows of SmResourceCards under an optional section header. Figma node 1267:18535. */
export interface SmContentCardLockupProps extends React.HTMLAttributes<HTMLElement> {
  /** Accent hue. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Page surface. @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  /** Number of cards. @default 3 */
  cards?: 1 | 2 | 3 | 4 | 5;
  /** @default true */
  includeHeadline?: boolean;
  /** Headline treatment. @default "centered" */
  headlineType?: "left" | "centered";
  /** Buttons in the header. @default "primary" */
  buttonInHeadline?: "none" | "primary" | "both";
  /** Show big image cards instead of icon cards. @default false */
  largeImage?: boolean;
  /** Icon for icon-layout cards. @default "diamond" */
  icon?: "diamond" | "grid" | "grow" | "speed" | "pulse" | "target" | "stack" | "ai" | "scale" | "rows" | "product" | "schedule" | "business-size" | "calendar" | "cart" | "check" | "community" | "edit" | "folder" | "industries" | "learn" | "lock" | "logo" | "logo-laptop" | "media" | "medicine" | "partnerships" | "payment" | "phone-analytics" | "shopping-bag" | "shopping-tag" | "teams" | "web";
  /** @default "Resources" */
  tagText?: string;
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  items?: { headline?: string; subhead?: string }[];
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
}
export function SmContentCardLockup(props: SmContentCardLockupProps): JSX.Element;
