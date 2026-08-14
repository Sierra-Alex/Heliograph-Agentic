repo: mixpanel/Heliograph
branch: main
path: (whole repo — tokens only; component source came from the locally attached `Heliograph/` codebase)

## Last sync

date: 2026-08-12T17:43:03Z

### Updated in this project
- `tokens.json` changed upstream: `primitives.blur.200` was replaced by `primitives.blur.100` (100px). No other token added, removed or changed.
- Refreshed `source/tokens.json` and renamed the hand-restored declaration in `tokens/primitives.css` to `--blur-100`.
- `Footer.css` and `LgHero.css` now blur their glow ellipses with `var(--blur-100)`.

## Screen map

| Project file | Built from |
|---|---|
| `tokens/*.css` | `build/css/variables.css`, `tokens.json` |
| `components/**` | local `Heliograph/src/components/*` (CSS copied verbatim); 23 newer components built from `System WIP.fig` |
| `guidelines/*.card.html` | `tokens.json`, `design-guidelines.md` |
| `ui_kits/marketing_site/*` | composed from the components above |
| `readme.md` | `README.md`, `design-guidelines.md`, `token-mapping.md` |

## Sync history

### 2026-08-11T21:29:16Z — commit 55aef699dbc4
- Imported `build/css/variables.css` verbatim and split it into `tokens/`.
- Kept `tokens.json` at `source/tokens.json` as the Token Studio reference.
- Built all 21 components from the attached Heliograph codebase (not in this repo).
- Wrote the marketing-site UI kit on top of those components.
