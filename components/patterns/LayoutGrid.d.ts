/** The page grid: margins, gutters and column count per breakpoint. Figma: layout-grid (node 186:27050). */
export interface LayoutGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "desktop-plus" */
  breakpoint?: "desktop-plus" | "desktop" | "tablet" | "phone";
  /** Draw the column guides instead of laying out children. @default false */
  overlay?: boolean;
  children?: React.ReactNode;
}
export function LayoutGrid(props: LayoutGridProps): JSX.Element;
