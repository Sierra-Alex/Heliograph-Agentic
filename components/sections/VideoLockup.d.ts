/** Full-width section with a 16:9 video frame, play button, and optional CoreTypeLockups headline. */
export interface VideoLockupProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "light" */
  color?: "light" | "default" | "muted";
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
