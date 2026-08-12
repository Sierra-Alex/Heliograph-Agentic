Category / eyebrow chip — 4px radius, 1px border, tinted fill. Sits directly above a headline in a lockup.

```jsx
<Tag color="pool" size="lg">Product Analytics</Tag>
```

Seven hues (purple, pool, mint, lava, peach, mustard, grass). `onDark` swaps to the 20%-fill / light-text pairing.

The tag always hugs its label (`width: fit-content`), so it stays chip-sized inside a flex column or grid cell without needing `align-items: flex-start` on the parent.
