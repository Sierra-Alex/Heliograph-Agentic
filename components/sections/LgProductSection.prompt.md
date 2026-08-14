# LgProductSection

Full-width product section with a headline lockup capped at 960px (centered) or full-width (horizontal), one 2:1 gradient panel, and up to three sub-text blocks underneath.

Uses the standard `color`/`onDark`/`hue` surface pattern. Light surfaces pair `color` with `--surface-{light|default|muted}`. Dark surfaces set `onDark` and `hue` to fill with `--surface-{hue}-dark`. The panel gradient always matches `hue`.

Sub-text blocks render as `CoreTypeLockup` at H6 level — pass structured `blocks` for custom content or set `subTextBlocks` for placeholder count.
