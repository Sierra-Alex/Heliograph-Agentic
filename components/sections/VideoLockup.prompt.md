Full-width section with a centred 16:9 video frame (900px max), a `PlayHead` overlay, and an optional centered `CoreTypeLockups` headline above.

```jsx
<VideoLockup color="default" />
<VideoLockup color="light" includeHeadline tagText="Demo" headline="See it in action" />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `color` | `"light"` \| `"default"` \| `"muted"` | `"light"` |
| `includeHeadline` | boolean | `false` |
| `tagText` | string | `"Text"` |
| `headline` | string | `"Headline goes here"` |
| `subhead` | string | bacon ipsum |
| `primaryLabel` | string | `"Click Me"` |
| `secondaryLabel` | string | `"Click Me"` |
| `children` | ReactNode | placeholder div |
| `desktopSize` | `"desktop-plus"` \| `"desktop"` \| `"tablet"` \| `"phone"` | `"desktop-plus"` |

## CSS

Prefix `.vl`. Renders a `<section>`.

- Surfaces: `--surface-light`, `--surface-default`, `--surface-muted`
- Frame: 900px wide, 16:9 aspect ratio, `--border-radius-content` (16px) corners
- PlayHead is absolutely centred over the frame via `translate(-50%, -50%)`
- Placeholder fill: `--surface-muted`
- Gap between headline and frame: `--generic-spacing-lg`
- Responsive padding: `--stack-section-lg` vertical (phone uses `--stack-section-md`), `--layout-grid-{tier}-margin` horizontal

## Nested components

- `PlayHead` (always rendered, centred over the video frame)
- `CoreTypeLockups` at H3, centered, with tag, button, `includeSecondary` (only when `includeHeadline` is true)
