Medium resource card with a 2:1 image slot, tag, H4 headline, subhead, and button lockup. Bordered card with 8px inner padding and 24px outer radius.

```jsx
<MdResourceCards pageBackground="light" tagText="Guide" headline="Getting started" />
<MdResourceCards pageBackground="purple" tagText="Case Study" headline="How Acme scaled" />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `pageBackground` | `"light"` \| `"muted"` \| `"purple"` \| `"pool"` \| `"mint"` \| `"lava"` \| `"mustard"` \| `"grass"` | `"light"` |
| `tagText` | string | `"Text"` |
| `headline` | string | `"Headline goes here"` |
| `subhead` | string | bacon ipsum |
| `primaryLabel` | string | `"Click Me"` |
| `secondaryLabel` | string | `"Click Me"` |
| `children` | ReactNode | placeholder div |

## CSS

Prefix `.mrc`. Surface modifier `.mrc--{pageBackground}`.

When `pageBackground` is a hue name (purple, pool, mint, lava, mustard, grass), the card is treated as dark: fill `--cards-on-dark-fill-{hue}`, border `--cards-on-dark-border`. Light/muted use `--cards-on-light-fill-on-white` / `--cards-on-light-fill-on-gray` with `--cards-on-light-border`.

## Nested components

- `CoreTypeLockups` at H4 with tag, button, and `includeSecondary`. Automatically passes `onDark` and `hue` when the background is a dark hue.

## Key tokens

- Card: `--inset-card-border-spacing` (8px padding), `--border-radius-sm-outer` (24px)
- Image: 2:1 aspect ratio, `--border-radius-content` (16px)
- Content padding: `--generic-spacing-sm`
