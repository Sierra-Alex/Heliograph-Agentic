# Design Guidelines

Rules that govern how Heliograph components are built and composed. Append new rules as they emerge.

---

## Semantic color reference

All colors by role. Source of truth is `tokens/semantic-colors.css`; these are listed here for quick reference.

### Surfaces

| Token | Value | Use |
|---|---|---|
| `--surface-light` | `#ffffff` | White background |
| `--surface-default` | `#fafafa` | Default page background |
| `--surface-muted` | `#f4f4f4` | Recessed/subtle background |
| `--surface-purple-dark` | `#150040` | Dark purple surface |
| `--surface-pool-dark` | `#002540` | Dark pool surface |
| `--surface-mint-dark` | `#00332a` | Dark mint surface |
| `--surface-lava-dark` | `#33001f` | Dark lava surface |
| `--surface-mustard-dark` | `#401a0d` | Dark mustard surface |
| `--surface-grass-dark` | `#002614` | Dark grass surface |

### Text

| Token | Value | Use |
|---|---|---|
| `--text-on-light-headline` | `#1f2023` | Headline on light surface |
| `--text-on-light-body` | `rgba(31,32,35,0.7)` | Body text on light surface |
| `--text-on-light-link` | `#1f2023` | Link text on light surface |
| `--text-on-dark-body` | `rgba(255,255,255,0.7)` | Body text on any dark surface |
| `--text-on-dark-link` | `#ffffff` | Link text on dark surface |
| `--text-on-dark-headline-purple` | `#c1b1ff` | Headline on purple-dark |
| `--text-on-dark-headline-pool` | `#bee1fa` | Headline on pool-dark |
| `--text-on-dark-headline-mint` | `#c4f1ed` | Headline on mint-dark |
| `--text-on-dark-headline-lava` | `#ffbfb1` | Headline on lava-dark |
| `--text-on-dark-headline-mustard` | `#fce0a5` | Headline on mustard-dark |
| `--text-on-dark-headline-grass` | `#a5d7bf` | Headline on grass-dark |

### Cards & dividers

| Token | Value | Use |
|---|---|---|
| `--cards-on-light-border` | `#eaeaea` | Card border on light |
| `--cards-on-light-fill-on-white` | `#fafafa` | Card fill over white bg |
| `--cards-on-light-fill-on-gray` | `#ffffff` | Card fill over gray bg |
| `--cards-on-dark-border` | `rgba(255,255,255,0.3)` | Card border on dark |
| `--divider-on-light` | `#eaeaea` | Divider on light surface |
| `--divider-on-dark` | `rgba(255,255,255,0.3)` | Divider on dark surface |

### Buttons (interactive)

| Token | Value | Use |
|---|---|---|
| `--interactive-component-primary-on-light-fill-standard` | `#1f2023` | Primary button fill |
| `--interactive-component-primary-on-light-fill-hover` | `rgba(31,32,35,0.8)` | Primary button hover |
| `--interactive-component-primary-on-light-text` | `#ffffff` | Primary button text |
| `--interactive-component-primary-on-light-focus-border` | `#7856ff` | Primary button focus ring |
| `--interactive-component-primary-on-dark-fill-standard` | `#ffffff` | Primary button fill on dark |
| `--interactive-component-primary-on-dark-text` | `#1f2023` | Primary button text on dark |
| `--interactive-component-primary-on-dark-fill-hover` | `rgba(255,255,255,0.8)` | Primary hover on dark |
| `--interactive-component-secondary-on-light-fill-standard` | `rgba(31,32,35,0.07)` | Secondary button fill |
| `--interactive-component-secondary-on-light-fill-hover` | `rgba(31,32,35,0.1)` | Secondary button hover |
| `--interactive-component-secondary-on-light-text` | `#1f2023` | Secondary button text |
| `--interactive-component-secondary-on-dark-fill-standard` | `rgba(255,255,255,0.1)` | Secondary fill on dark |
| `--interactive-component-secondary-on-dark-text` | `#ffffff` | Secondary text on dark |
| `--interactive-component-tertiary-on-light-text` | `#1f2023` | Tertiary (text-only) button |
| `--interactive-component-tertiary-on-dark-text` | `#ffffff` | Tertiary button on dark |

### Status

| Token | Value | Use |
|---|---|---|
| `--status-focus` | `#7856ff` | Focus rings |
| `--status-error` | `#ff7557` | Error state (lava) |
| `--status-warning` | `#f8bc3c` | Warning state (mustard) |
| `--status-success` | `#3ba974` | Success state (grass) |
| `--status-info` | `#72bef4` | Info state (pool) |

### Tags (on-light)

| Hue | Fill | Border | Text |
|---|---|---|---|
| purple | `rgba(120,86,255,0.1)` | `rgba(120,86,255,0.5)` | `#2e1670` |
| pool | `rgba(114,190,244,0.1)` | `rgba(114,190,244,0.5)` | `#1d4b6d` |
| mint | `rgba(127,225,216,0.1)` | `rgba(127,225,216,0.5)` | `#205f56` |
| lava | `rgba(255,117,87,0.1)` | `rgba(255,117,87,0.5)` | `#661d2d` |
| mustard | `rgba(248,188,60,0.1)` | `rgba(248,188,60,0.5)` | `#6e4319` |
| grass | `rgba(59,169,116,0.1)` | `rgba(59,169,116,0.5)` | `#0f472c` |

### Tags (on-dark)

| Hue | Fill | Border | Text |
|---|---|---|---|
| purple | `rgba(120,86,255,0.2)` | `#9074ff` | `#dad0ff` |
| pool | `rgba(114,190,244,0.2)` | `#8bccf6` | `#d7edfc` |
| mint | `rgba(127,225,216,0.2)` | `#96e6df` | `#dbf7f4` |
| lava | `rgba(255,117,87,0.2)` | `#ff8e75` | `#ffd7cf` |
| mustard | `rgba(248,188,60,0.2)` | `#f9c85f` | `#fdecc8` |
| grass | `rgba(59,169,116,0.2)` | `#5eb88d` | `#c8e7d8` |

---

## Layout & max widths

### Grid

| Breakpoint | Max width | Margin | Gutter | Columns |
|---|---|---|---|---|
| desktop-plus (1440px) | `--layout-grid-desktop-plus-max-width` 1520px | 48px | 16px | 12 |
| desktop (1200px) | `--layout-grid-desktop-max-width` 1360px | 40px | 16px | 12 |
| tablet (808px) | none (fluid) | 32px | 16px | 6 |
| phone (384px) | none (fluid) | 16px | 16px | 2 |

### Content max widths

- **Headlines (H3 and above):** `--layout-content-max-width` (980px). Headline text blocks for H1, H2, and H3 must never exceed this width.
- **Subheads:** follow the same `--layout-content-max-width` cap when paired with H1–H3 headlines.
- **Section vertical spacing:** `--stack-section-lg` (80px) at desktop, `--stack-section-md` (40px) at tablet/phone.
- **Page top/bottom:** `--stack-page-top` (64px), `--stack-page-bottom` (120px).

---

## Component state rules

How each interactive component behaves across states, and which tokens it uses. Every focus ring is `box-shadow: 0 0 0 4px rgba(120,86,255,0.3)` plus a `--status-focus` (`#7856ff`) inset border.

### Button

**Variants:** primary, secondary, tertiary | **Sizes:** lg, sm | **Themes:** on-light, on-dark

| State | Behavior |
|---|---|
| Default | Fill + text per variant/theme tokens |
| Hover | Fill shifts to `-fill-hover` token; tertiary stays transparent |
| Focus-visible | Purple focus ring + inset border |
| Active (press) | `opacity: 0.8` |
| Disabled | `opacity: 60%`, `cursor: not-allowed`, hover suppressed |

**Always/never:**
- Buttons always use `--border-radius-pill` (100px). Never use a different radius.
- Arrow animates on hover: head translates 2px (lg) / 1.5px (sm), line fades in.
- Transition: `0.4s cubic-bezier(0.2,0,0.2,1)` on background-color and opacity.

### Tag

**Variants:** per-hue (purple, pool, mint, lava, mustard, peach, grass) | **Sizes:** lg, sm | **Themes:** on-light, on-dark

| State | Behavior |
|---|---|
| Default | Tinted fill + semi-transparent border + dark text (light) or light text (dark) |

Tags are display-only — no hover, focus, active, or disabled states. Each hue maps to its own `--tag-on-{light|dark}-{hue}-{fill|border|text}` token triplet. Never mix hue tokens across light/dark — the on-dark set uses different opacities and lighter text.

**Always/never:**
- Tags always use `--border-radius-tag`. Never apply pill radius to tags.
- Tags always use `width: fit-content`. Never stretch tags to fill their container.

### Checkbox

**States:** default, hover, focus, checked, error, disabled

| State | Border token | Background token |
|---|---|---|
| Default | `--checkbox-border-default` (`#797979`) | `--checkbox-bg-default` (`#fff`) |
| Hover | `--checkbox-border-hover` (`#7856ff`) | unchanged |
| Focus | `--checkbox-border-focus` (`#7856ff`) + focus ring | unchanged |
| Checked | `--checkbox-bg-active` (`#7856ff`) | `--checkbox-bg-active` (`#7856ff`) |
| Error | `--checkbox-border-error` (`#ff7557`) | `--checkbox-bg-error` (lava 20%) |
| Disabled | `--checkbox-border-disabled` (`#797979`) | `--checkbox-bg-disabled` (`#eaeaea`) |

**Always/never:**
- Checkbox always uses `--border-radius-control` (4px). Never round checkboxes.
- Transition: `0.15s` on background-color and border-color.
- Disabled state suppresses hover — border stays at disabled token.

### Radio

**States:** default, hover, focus, checked, error, disabled

Same token pattern as Checkbox but with `--radio-*` tokens. Inner dot scales from 0 to 1 on check.

| State | Border token | Background token |
|---|---|---|
| Default | `--radio-border-default` (`#797979`) | `--radio-bg-default` (`#fff`) |
| Hover | `--radio-border-hover` (`#7856ff`) | unchanged |
| Focus | `--radio-border-focus` (`#7856ff`) + focus ring | unchanged |
| Checked | `--radio-border-active` (`#7856ff`) | `--radio-bg-active` (`#7856ff`) |
| Error | `--radio-border-error` (`#ff7557`) | `--radio-bg-error` (lava 20%) |
| Disabled | `--radio-border-disabled` (`#797979`) | `--radio-bg-disabled` (`#eaeaea`) |

**Always/never:**
- Radio always uses `--border-radius-pill`. Never square off radios.
- Transition: `0.15s` on background-color, border-color, dot opacity and scale.

### Toggle

**States:** default, hover, focus, checked, error, disabled

| State | Border token | Track bg | Thumb |
|---|---|---|---|
| Default | `--toggle-border-default` (`#797979`) | `--toggle-bg-default` (`#fff`) | `--toggle-fill-default` (`#1f2023`) |
| Hover | `--toggle-border-hover` (`#7856ff`) | unchanged | unchanged |
| Focus | `--toggle-border-focus` (`#7856ff`) + focus ring | unchanged | unchanged |
| Checked | `--toggle-border-active` (`#7856ff`) | `--toggle-border-active` (`#7856ff`) | `--toggle-fill-active-circle` (`#fff`) |
| Error | `--toggle-border-error` (`#ff7557`) | `--toggle-bg-error` (lava 20%) | unchanged |
| Disabled | `--toggle-border-disabled` (`#797979`) | `--toggle-bg-disabled` (`#eaeaea`) | `--toggle-fill-disabled` (`#797979`) |

**Always/never:**
- Thumb translates 24px right when checked.
- Transition: `0.2s` on background-color, border-color, and thumb transform.

### TextInput

**States:** default, hover, focus, valid, error, disabled

| State | Border token | Background token |
|---|---|---|
| Default | `--text-input-border-default` (`#797979`) | `--text-input-bg-default` (`#fff`) |
| Hover | `--text-input-border-hover` (`#7856ff`) | unchanged |
| Focus | `--text-input-border-focus` (`#7856ff`) + focus ring | unchanged |
| Valid | `--text-input-border-active` (`#797979`) | unchanged |
| Error | `--text-input-border-error` (`#ff7557`) | `--text-input-bg-error` (lava 20%) |
| Disabled | `--text-input-border-disabled` (`#797979`) | `--text-input-bg-disabled` (`#eaeaea`) |

**Always/never:**
- TextInput always uses `--border-radius-control` (4px).
- Height is fixed at 36px. Never resize height.
- Caret color is always `#7856ff`.
- Disabled state suppresses hover and sets `cursor: not-allowed` on both wrapper and field.

### NavLink

**States:** default, hover, active

| State | Behavior |
|---|---|
| Default | `opacity: 0.7`, text color `#1b0b3b` |
| Hover | `opacity: 1` |
| Active | `opacity: 1` (same as hover, via `.navlink--active`) |
| On-dark | Text switches to `--colors-absolute-white` |

No focus, disabled, or error states — nav links are simple interactive text.

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
