/** The image panel beside a small hero. Figma: Sm Hero Images (node 127:14642). */
export interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Illustration, flat gradient, or an empty well for real imagery. @default "image" */
  type?: "image" | "gradient" | "placeholder";
  /** Hue family. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Real imagery; fills the well. */
  children?: React.ReactNode;
}
export function HeroImage(props: HeroImageProps): JSX.Element;
