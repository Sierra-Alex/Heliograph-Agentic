# Design Guidelines

Rules that govern how Heliograph components are built and composed. Append new rules as they emerge.

---

### GLOBAL RULE: On-dark color spaces must be honored everywhere

Any component that renders text on a dark surface MUST switch ALL text and decorative colors to the on-dark token family. This is not optional — it applies to every component in the system, not just sections.

**What must switch on dark:**

- **Headline** → `--text-on-dark-headline-{hue}` (hue-specific tinted color)
- **Body / subhead** → `--text-on-dark-body` (`rgba(255,255,255,0.7)`)
- **Tag** → `--tag/on-dark/{hue}/*` fill/border/text (via `onDark` prop)
- **Button** → on-dark fill/text (via `onDark` prop)

**Implementation contract — every text lockup component must:**

1. Accept `hue` and `onDark` props
2. Apply `--on-dark` and `--{hue}` CSS classes to its root when `onDark` is true
3. Define per-hue on-dark headline rules AND hue-independent on-dark subhead rule in CSS
4. Pass `hue` to Tag as `color`, and `onDark` to Tag and Button

This applies to: `CoreTypeLockup`, `HorizontalCoreType`, and any future lockup/type pattern.

**Implementation contract — every section with a dark surface must:**

1. Accept `onDark` and `hue` props (or derive dark state from surface selection)
2. Pass `onDark={true}` and `hue={hue}` to ALL nested lockup components
3. No component should guess its color space from context — the prop is the contract

**CSS specificity order:** base (light) → `.--on-dark` → `.--on-dark.--{hue}`
