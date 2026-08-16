Simplified top navigation bar with logo and optional action buttons -- no nav links. Translucent white background with blur, 1px bottom divider. Used on landing pages where the full nav is not needed.

```jsx
<LimitedTopNav desktopSize="login-primary-secondary" viewport="desktop-plus" />
<LimitedTopNav desktopSize="primary" viewport="tablet" />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `desktopSize` | `"login-primary-secondary"` \| `"primary-secondary"` \| `"primary"` \| `"empty"` | `"login-primary-secondary"` |
| `viewport` | `"desktop-plus"` \| `"desktop"` \| `"tablet"` \| `"phone"` | `"desktop-plus"` |
| `logoSrc` | string | `"assets/logo.svg"` |
| `primaryLabel` | string | `"Click Me"` |
| `secondaryLabel` | string | `"Click Me"` |

**Two responsive-related props:** `desktopSize` controls which buttons are visible (login link, primary, secondary). `viewport` controls the layout responsive class (margins).

### desktopSize visibility

- `"login-primary-secondary"` -- login link + primary + secondary buttons
- `"primary-secondary"` -- primary + secondary buttons (no login)
- `"primary"` -- primary button only
- `"empty"` -- logo only, no right-side content

## CSS

Prefix `.ltn`. Renders a `<nav>`. Fixed height 64px.

- Background: `--colors-absolute-alpha-80` with `blur(--blur-18)` backdrop
- Border: `--thin` solid `--divider-on-light`
- Login link: `--body-b4-medium`, `--text-on-light-link`, 70% opacity (full on hover)
- Responsive margins via `.ltn--{viewport}` using `--layout-grid-{tier}-margin`

## Nested components

- `Button` (primary and secondary, both `sm` size)
