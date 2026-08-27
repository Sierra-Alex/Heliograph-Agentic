# Heliograph — Agent Contract

Heliograph is Mixpanel's design system for marketing and brand surfaces. It is token-first — every colour, size, radius, and type style traces back to `tokens.json`, compiled by Style Dictionary into `tokens/*.css`. The browsable library lives at `index.html`.

## Hard rules

### Tokens over primitives

Always use semantic tokens. Never use raw values or primitive tokens in component CSS.

```css
/* yes */ color: var(--text-on-light-body); background: var(--surface-muted);
/* no  */ color: rgba(31,32,35,.7);        background: var(--colors-gray-02);
```

### Purple is the default hue

When a component accepts a `hue` or `color` prop, purple is the default value unless explicitly overridden.

### Tags must match the section hue

A Tag's `color` must always match the `hue` of the section it sits in. A purple tag on a pool section is wrong — pass the section's `hue` through to the Tag. Sections and lockup components must propagate their `hue` to nested Tags, never hard-code a Tag color independently.

### Colour order

Always list hues in this order: **purple, pool, mint, lava, mustard, grass**. This applies to prop type unions, CSS rule order, enum arrays, dropdown options, and documentation.

### Light / dark surface pattern

Components use three props in this order:

1. `color`: `"light"` | `"default"` | `"muted"` — neutral background surface
2. `onDark`: boolean — switches to dark mode
3. `hue`: `"purple"` | `"pool"` | `"mint"` | `"lava"` | `"mustard"` | `"grass"` — accent colour for dark surfaces

CSS specificity pattern:
- `.foo--light` (1-class, declared first)
- `.foo--on-dark` (1-class, later in source, wins by order)
- `.foo--on-dark.foo--{hue}` (2-class, always wins)

Token mapping on dark: background `--surface-{hue}-dark`, headline `--text-on-dark-headline-{hue}`, body always `--text-on-dark-body`.

**Always verify colour usage against this file.** When building or modifying any component, read this contract first to confirm the correct surface, headline, and body tokens for the component's surface context. Never use `--colors-absolute-white` or other primitives as a shortcut for dark-surface headline colours — always use the per-hue semantic tokens (`--text-on-dark-headline-{hue}`).

### Typography

Garnett throughout. Type is applied with the `font` shorthand token + matching `letter-spacing` token:

```css
font: var(--headline-h3); letter-spacing: var(--letter-spacing-negative-2);
```

**CoreTypeLockups is the source of truth** for heading/body/spacing/button pairings:
- H1, H2 → B3 body, `--generic-spacing-sm` gap, lg buttons
- H3, H4 → B4 body, `--generic-spacing-x-sm` gap, lg buttons
- H5, H6 → B4 body, `--generic-spacing-x-sm` gap, sm buttons

Letter spacing: H1–H3 → `negative-2`, H4 → `negative-1`, H5–H6 → `0`.

Responsive step-down: H1→H2 at tablet (808px), all headings drop one level at phone (384px). H7 (16px) is the floor. Use the mapped heading token at each breakpoint.

### Spacing and radius

- Spacing aliases: 8 / 16 / 24 / 32 / 40 / 80
- Radii: 4px controls, 16px content/images, 24px cards, 40px page shells, 100px pill (buttons)
- Cards: 8px "border spacing" inset — 24px outer card holds a 16px-round image

### Responsive layout

Sections use a prop-driven responsive system (not media queries) because the library viewer renders components inside a `Frame` that simulates different widths. **Never use CSS media queries for responsive behavior — use the `desktopSize` prop and its CSS modifier classes.**

Every section, hero, and lockup accepts a `desktopSize` prop: `"desktop-plus"` | `"desktop"` | `"tablet"` | `"phone"` (default `"desktop-plus"`). The prop maps to a CSS class `--{desktopSize}` that controls padding, layout direction, and typography at that breakpoint:

| Breakpoint | Margin token | Value | Breakpoint token value |
|---|---|---|---|
| desktop-plus | `--layout-grid-desktop-plus-margin` | 48px | 1440px |
| desktop | `--layout-grid-desktop-margin` | 40px | 1200px |
| tablet | `--layout-grid-tablet-margin` | 32px | 808px |
| phone | `--layout-grid-phone-margin` | 16px | 384px |

CSS pattern for each section:
```css
.prefix { padding: var(--stack-section-lg) var(--layout-grid-desktop-plus-margin); }
.prefix--desktop { padding: var(--stack-section-lg) var(--layout-grid-desktop-margin); }
.prefix--tablet  { padding: var(--stack-section-lg) var(--layout-grid-tablet-margin); }
.prefix--phone   { padding: var(--stack-section-md) var(--layout-grid-phone-margin); }
```

**What must adapt at each breakpoint:**
- Padding: margin tokens step down per tier
- Vertical spacing: `--stack-section-lg` (80px) at desktop, `--stack-section-md` (40px) at phone
- Multi-column layouts: collapse to `flex-direction: column` at **tablet** (not just phone) — side-by-side content that waits until phone to stack will be unreadable at tablet widths
- Typography: H1→H2 at tablet, all headings drop one level at phone (H7 floor)
- Heroes: side-by-side layouts stack vertically at tablet/phone
- Sections must propagate `desktopSize` to nested patterns that need it

When creating or modifying any section, hero, or lockup, always implement and test all four breakpoint tiers in both CSS and JSX. A component that looks the same at desktop-plus and phone is incomplete.

### Elevation

No grey drop shadows. Elevation is a coloured glow: `0 40px 36px -48px` in the card's hue at 30–50%.

### Motion

- Buttons: `0.4s cubic-bezier(0.2,0,0.2,1)` on background-color and opacity
- Form controls: 0.15s, toggles: 0.2s
- Hover: fill change, not colour shift. Press: `opacity: 0.8`
- Only ambient animation: logo carousel (36s linear infinite translate)

### Card row maximum

Never place more than four cards in a single row. If more, the row must wrap.

## Do not

- Use primitives (`--colors-gray-02`) instead of semantics (`--surface-muted`)
- Import third-party icon sets — Heliograph has no icon library; SVGs use `fill="currentColor"`
- Add emoji anywhere — not in copy, icons, or component defaults
- Use exclamation marks, rhetorical questions, or "unlock/supercharge/revolutionise" in copy
- Use `justify-content: center` on preview containers — previews must be left-aligned with `transform-origin: top left`
- Change Stat typography — H2 value + B1-medium suffix is the spec
- Hard-code font sizes — always use heading/body tokens

## Copy and voice

- Second person: "Answer product questions in seconds." Not "we".
- Title Case for buttons/links under 5 words, otherwise sentence case
- Mixpanel is always capitalized — never "mixpanel" in copy
- UPPERCASE only for footer group headers
- Headlines: one line, one claim, max ~720px
- Headline punctuation: never end with a period unless the headline contains other punctuation (e.g. commas) or is two sentences
- Subheads: one or two sentences, explain mechanism not benefit
- Placeholder copy is bacon ipsum — always replace before shipping

## Component conventions

Each component has four files: `Name.jsx`, `Name.css`, `Name.d.ts`, `Name.prompt.md`.

Components are organised into:
- **`components/core/`** — Button, Tag, NavLink, LogoMark, CircleCheck, TeamsIcon, RoundIconButton, RoundPlusButton, RoundMinusButton, PlayHead
- **`components/forms/`** — Checkbox, Radio, Toggle, TextInput
- **`components/patterns/`** — CoreTypeLockups, HorizontalCoreType, AddedContent, LgResourceCards, MdResourceCards, SmResourceCard, MdProductCards, LogoCarousel, FAQ, ButtonLockup, Stat, ImageRatio, ContentCard, FormLockup, CarouselStep, LayoutGrid, CustomerLogo, HeroImage, BulletList, SmProductCard
- **`components/sections/`** — FullTopNav, LimitedTopNav, Footer, SmHero, LgHero, MdProductCardLockup, ZLayout, LgProductSection, SmContentCardLockup, FAQs, Quotes, StatLockup, VideoLockup, LgContentCallout, LgProductCard

### Update checklist

When adding or modifying a component, update **all** of:
1. `Name.jsx` — source component
2. `Name.css` — styles
3. `Name.d.ts` — TypeScript props contract
4. `_ds_bundle.js` — pre-compiled bundle (must stay in sync with JSX)
5. `library-data.json` — component metadata for the library viewer
6. `index.html` — **always** add/update the preview tile (destructuring + PREVIEW entry)
7. `section.html` — if preview background rules needed

Every new component must appear in `index.html` with a live preview tile. Every prop or name change must update the existing tile. The library index is the single source of truth for what exists in the system — if it's not in `index.html`, it doesn't exist.

### Preview backgrounds (section.html)

Pattern components must have transparent backgrounds in their CSS. Preview backgrounds go in `section.html` using `.sheet > .prefix--on-dark` selectors with per-hue surface overrides.

## File structure

```
styles.css              <- single consumer entry point
tokens/                 <- Style Dictionary output + source tokens.json
components/
  core/                 <- atomic UI elements
  forms/                <- form controls
  patterns/             <- composable content blocks
  sections/             <- full-width page sections
  components.css        <- imports all component CSS
_ds_bundle.js           <- pre-compiled JS bundle of all components
library-data.json       <- component metadata for index.html
index.html              <- browsable library
section.html            <- component preview viewer
design-guidelines.md    <- living rules doc (append with "NEW-rule")
assets/icons/           <- SVG icons, fill="currentColor"
assets/logos/           <- all logo variants (mark + wordmark)
guidelines/             <- visual token/style reference cards for library
```

## Known gaps

- `--font-family-quote: arizona` is declared as a token but no Arizona font file exists
- H7 (16px) exists in design but tokens only define H1–H6; components fall back to H5 for H7
- `blur.100` exists in `tokens.json` but was missing from Style Dictionary output; re-declared manually in `tokens/primitives.css`
