/** Resource cards laid out in a row under an optional section header. Figma: Resources Card Lockups (node 1205:94994). */
export interface ResourceCardLockupProps extends React.HTMLAttributes<HTMLElement> {
  /** Card count and mix. @default "3-sm" */
  resources?: "1-lg" | "1-lg/2-sm" | "1-lg/3-sm" | "2-sm" | "3-sm" | "4-sm" | "6-sm";
  /** Show the HorizontalCoreType header. @default true */
  withHeadline?: boolean;
  /** Page surface; also picks the card fill. @default "light" */
  pageBackground?: "light" | "default" | "muted" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** @default "Headline goes here" */
  headline?: string;
  subhead?: string;
  /** @default "Resources" */
  tagText?: string;
}
export function ResourceCardLockup(props: ResourceCardLockupProps): JSX.Element;
