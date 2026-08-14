/** Marketing form card. Figma: Form Lockups (node 127:14598). */
export interface FormLockupProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** Which field set to render. @default "contact-sales" */
  formType?: "contact-sales" | "get-demo" | "newsletter";
  /** Overrides the per-type default button label. */
  submitLabel?: string;
  /** Extra fields appended below the standard set. */
  children?: React.ReactNode;
}
export function FormLockup(props: FormLockupProps): JSX.Element;
