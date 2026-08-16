/**
 * Sticky marketing top navigation — 64px tall, 80% white with an 18px backdrop blur.
 */
export interface FullTopNavProps {
  /** Responsive tier; controls horizontal margin and which controls show. @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  /** Nav items. @default Platform / Solutions / Resources / Pricing */
  links?: { label: string; dropdown?: boolean }[];
  /** Path to the Mixpanel wordmark. @default "assets/logo.svg" — pass a path relative to YOUR page */
  logoSrc?: string;
  caretSrc?: string;
  burgerSrc?: string;
  onNavigate?: (label: string) => void;
  className?: string;
}
export function FullTopNav(props: FullTopNavProps): JSX.Element;
