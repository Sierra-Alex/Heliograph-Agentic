The standard vertical text lockup — use it inside heroes, Z-layouts, footers and cards rather than hand-building headline stacks.

```jsx
<CoreTypeLockup heading="H2" alignment="center" hue="purple" button includeSecondary
  headline="Analytics everyone can use" subhead="Answer product questions in seconds." />
```

Max width 720px. Heading levels step down automatically at tablet and phone via `desktopSize`.

## On dark

Pass `onDark` and `hue` together. The hue drives the tag color and the on-dark headline tint:

```jsx
<CoreTypeLockup heading="H3" hue="pool" tag tagText="Warehouse" onDark
  headline="Your warehouse, your truth" subhead="Sync tables from Snowflake." />
```
