Full-width section containing a large horizontal product card. H3 `CoreTypeLockups` with tag and buttons on one side, a 1:1 gradient image panel on the other, inside an 8px-padded 24px card with a coloured glow shadow.

```jsx
<LgProductCard hue="pool" tagText="Analytics" headline="Session Replay" imagePosition="left" />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `color` | `"light"` \| `"default"` \| `"muted"` | `"light"` |
| `onDark` | boolean | `false` |
| `hue` | `"purple"` \| `"pool"` \| `"mint"` \| `"lava"` \| `"mustard"` \| `"grass"` | `"purple"` |
| `imagePosition` | `"right"` \| `"left"` | `"right"` |
| `tagText` | string | `"Text"` |
| `headline` | string | `"Headline goes here"` |
| `subhead` | string | bacon ipsum |
| `primaryLabel` | string | `"Click Me"` |
| `secondaryLabel` | string | `"Click Me"` |
| `children` | ReactNode | image content |
| `desktopSize` | `"desktop-plus"` \| `"desktop"` \| `"tablet"` \| `"phone"` | `"desktop-plus"` |

## CSS

Prefix `.lpc`. Renders a `<section>`.

### Surfaces

- Light: `.lpc--light` / `--default` / `--muted` with matching `--surface-*` tokens
- Dark: `.lpc--on-dark.lpc--{hue}` uses `--surface-{hue}-dark` for page and `--cards-on-dark-fill-{hue}` for the card

### Glow

Per-hue coloured shadow on the card: `--shadow-glow-on-light-{hue}` (light) and `--shadow-glow-on-dark-{hue}` (dark).

### Image panel

1:1 aspect ratio, 16px radius (`--border-radius-content`), gradient fill `--container-fill-gradient-product-card-{hue}`. `imagePosition="left"` reverses the card to `row-reverse`.

### Responsive

Tablet and phone stack the card to `flex-direction: column` and adjust margins. Padding uses `--layout-grid-{tier}-margin` and `--stack-section-md`.

## Nested components

- `CoreTypeLockups` at H3 with tag, button, passes `onDark` and `hue`
