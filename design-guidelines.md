# Design Guidelines

Rules that govern how Heliograph components are built and composed. Append new rules as they emerge.

---

### On-dark color spaces must be honored

Every component that accepts an `onDark` prop must switch **all** of its text and decorative colors to the on-dark token family — not just the interactive children it wraps.

- **Headline** on dark uses `--text-on-dark-headline-{hue}` (hue-specific tinted text, e.g. `#c1b1ff` for purple).
- **Body / subhead** on dark uses `--text-on-dark-body` (`rgba(255,255,255,0.7)`).
- **Tag** on dark uses `--tag/on-dark/{hue}/*` fill/border/text.
- **Button** on dark flips fill and text via its own `onDark` prop.

The CSS specificity order is: base (light) → `.--on-dark` → `.--on-dark.--{hue}`. Never skip the middle layer — subhead color is hue-independent and belongs on `.--on-dark` alone.

If a section sets a dark surface (`--surface-{hue}-dark`), it **must** pass `onDark={true}` to every nested component that supports it. No component should guess its color space from context; the prop is the contract.
