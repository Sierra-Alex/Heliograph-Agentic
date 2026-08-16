/** Full-width FAQs section: centred H3 title over a stack of accordion rows. Figma: FAQs (node 172:25966). */
export interface FAQsProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "FAQs" */
  title?: string;
  items?: { question: string; answer?: string }[];
  /** Page surface behind the card. @default "white" */
  pageColor?: "white" | "default" | "muted" | "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Use the dark-surface treatment. @default false */
  onDark?: boolean;
  /** Index open on first render; -1 for all closed. @default 0 */
  defaultOpen?: number;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
}
export function FAQs(props: FAQsProps): JSX.Element;
