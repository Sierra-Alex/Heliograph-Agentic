/** Fixed-ratio image well with the system's 16px content radius. Figma: Image Ratios (nodes 127:4028 / 127:4030). */
export interface ImageRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "1:1" */
  ratio?: "1:1" | "1:2";
  /** Real imagery; omit for the grey placeholder. */
  children?: React.ReactNode;
}
export function ImageRatio(props: ImageRatioProps): JSX.Element;
