/** One question row in an FAQs section. Figma: FAQs item (nodes 172:25647 / 172:25756). */
export interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "Add question in here..." */
  question?: string;
  answer?: string;
  /** Controlled expanded state. When omitted, FAQ manages its own open/close state internally (closed by default). */
  open?: boolean;
  /** @default false */
  onDark?: boolean;
  /** Toggle callback. When omitted, FAQ toggles itself on click. */
  onToggle?: () => void;
}
export function FAQ(props: FAQProps): JSX.Element;
