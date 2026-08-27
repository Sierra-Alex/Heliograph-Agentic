/** Full-width FAQs section: centred H3 title over a stack of accordion rows. Figma: FAQs (node 172:25966). */
export interface FAQsProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "FAQs" */
  title?: string;
  items?: { question: string; answer?: string }[];
  /** Accent hue. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Page surface. @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  /** Index open on first render; -1 for all closed. @default -1 */
  defaultOpen?: number;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
}
export function FAQs(props: FAQsProps): JSX.Element;
