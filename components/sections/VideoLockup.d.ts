/** Full-width section with a 16:9 video frame, play button, and optional CoreTypeLockups headline. */
export interface VideoLockupProps extends React.HTMLAttributes<HTMLElement> {
  /** Accent hue. @default "purple" */
  color?: "purple" | "pool" | "mint" | "lava" | "mustard" | "grass";
  /** Page surface. @default "light" */
  pageBackground?: "light" | "standard" | "muted" | "dark";
  /** @default false */
  includeHeadline?: boolean;
  tagText?: string;
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  /** Video or image content for the frame. */
  children?: React.ReactNode;
  /** @default "desktop-plus" */
  desktopSize?: "desktop-plus" | "desktop" | "tablet" | "phone";
  className?: string;
}
export function VideoLockup(props: VideoLockupProps): JSX.Element;
