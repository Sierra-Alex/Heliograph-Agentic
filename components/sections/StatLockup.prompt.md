Full-width section displaying a horizontal row of `Stat` components with an optional centered `CoreTypeLockups` headline above.

```jsx
<StatLockup color="default" numberOfStats={3} value="99" suffix="%" description="Uptime" />
<StatLockup color="light" addHeadline tagText="Results" headline="By the numbers"
  stats={[{value:"8",suffix:"B+",description:"Events"},{value:"99",suffix:"%",description:"Uptime"}]} />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `color` | `"light"` \| `"default"` \| `"muted"` | `"light"` |
| `numberOfStats` | `2` \| `3` \| `4` | `2` |
| `addHeadline` | boolean | `false` |
| `tagText` | string | `"Text"` |
| `headline` | string | `"Headline goes here"` |
| `subhead` | string | bacon ipsum |
| `primaryLabel` | string | `"Click Me"` |
| `secondaryLabel` | string | `"Click Me"` |
| `value` | string | `"00"` |
| `suffix` | string | `"X"` |
| `description` | string | stat description |
| `stats` | `Array<{value, suffix, description}>` | generated from `numberOfStats` |
| `desktopSize` | `"desktop-plus"` \| `"desktop"` \| `"tablet"` \| `"phone"` | `"desktop-plus"` |

If `stats` array is provided it takes precedence; otherwise `numberOfStats` identical stats are generated from `value`/`suffix`/`description`.

## CSS

Prefix `.stl`. Renders a `<section>`.

- Surfaces: `--surface-light`, `--surface-default`, `--surface-muted`
- Stats row is a flex row; each `Stat` gets `flex: 1 0 0`
- Responsive: tablet and phone stack the stats column via `flex-direction: column`
- Padding: `--stack-section-lg` vertical (phone uses `--stack-section-md`), `--layout-grid-{tier}-margin` horizontal
- Gap between headline and stats: `--generic-spacing-lg`

## Nested components

- `Stat` (one per stat item)
- `CoreTypeLockups` at H3, centered, with tag, button, `includeSecondary` (only when `addHeadline` is true)
