/** One question row in an FAQs section. Figma: FAQs item (nodes 172:25647 / 172:25756). */
export interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "Add question in here..." */
  question?: string;
  answer?: string;
  /** Expanded state. @default false */
  open?: boolean;
  /** @default false */
  onDark?: boolean;
  onToggle?: () => void;
}
export function FAQ(props: FAQProps): JSX.Element;
