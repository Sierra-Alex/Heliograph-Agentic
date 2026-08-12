/** One customer logo, sized by height. Figma: customer-logo (node 127:11196). */
export interface CustomerLogoProps extends React.HTMLAttributes<HTMLElement> {
  /** Built-in mark. @default "yelp" */
  customer?: "yelp";
  /** Full colour, or flattened to the surface's text colour. @default "color" */
  color?: "color" | "dark" | "light";
  /** Rendered height in px; width follows the logo's ratio. @default 27 */
  height?: number;
  /** Path to a logo not carried by the system; overrides `customer`. */
  src?: string;
  alt?: string;
}
export function CustomerLogo(props: CustomerLogoProps): JSX.Element;
