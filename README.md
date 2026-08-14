# Heliograph — Mixpanel Design System

Heliograph is Mixpanel's design system for **marketing and brand surfaces**: the website, campaign pages, partner and event pages, and the decks and one-pagers that borrow from them. It is a token-first system — every colour, size, radius and type style in this project traces back to `tokens.json` in the [mixpanel/Heliograph](https://github.com/mixpanel/Heliograph) repository, which is written by Token Studio in Figma and compiled by Style Dictionary.

Mixpanel is a product analytics company: teams send it product events and use reports, funnels, cohorts, boards and session replay to understand how their product is used. That product context shapes the system — the site's job is to make analytics look approachable rather than enterprise-heavy, which is why the palette is bright, the corners are large, and the shadows are coloured glows rather than grey drop shadows.

## Sources

| Source | What it gave us |
|---|---|
| [github.com/mixpanel/Heliograph](https://github.com/mixpanel/Heliograph) | `tokens.json` (source of truth) and `build/css/variables.css` (the Style Dictionary output copied verbatim into `tokens/`) |
| Local `Heliograph/` codebase (React + Vite) | All 21 component implementations, their CSS, the Garnett webfonts, the logo and icon SVGs, `design-guidelines.md`, `token-mapping.md` |
| `uploads/Garnett-Regular.otf`, `uploads/Garnett-Medium.otf` | Desktop OTF versions of Garnett, supplied by the user |

Read those repositories directly if you need more than this system carries — the component CSS in particular is the definitive record of spacing and state behaviour.

**One notable gap:** `--font-family-quote: arizona` is declared as a token but no Arizona font file exists in either source, and no component uses it. Nothing here substitutes for it. Ask for the file before designing a pull-quote treatment.

---

## Index

**Start here:** [`index.html`](index.html) — the browsable library. Every component rendered live with its props table and copy-ready name, plus all 561 tokens as click-to-copy `var()` chips. Built from `library-data.json`, which is regenerated from the `.d.ts` and `tokens/*.css` sources.


| Path | What's in it |
|---|---|
| `styles.css` | The only file consumers link. `@import`s everything below. |
| `tokens/` | `fonts.css`, `colors.css`, `primitives.css`, `typography.css`, `semantic-colors.css`, `semantic-layout.css`, `base.css` |
| `components/core/` | Button, Tag, NavLink, LogoMark, CircleCheck, TeamsIcon, RoundIconButton, RoundPlusButton, RoundMinusButton |
| `components/forms/` | Checkbox, Radio, Toggle, TextInput |
| `components/patterns/` | CoreTypeLockup, HorizontalCoreType, ProductCard, ResourceCard, SmResourceCard, LogoCarousel, ButtonLockup, FaqItem, ImageRatio, ContentCard, FormLockup, CarouselStep, LayoutGrid, CustomerLogo, HeroImage, BulletList, SmProductCard |
| `components/sections/` | TopNav, LgHero, SmHero, ZLayout, MdProductCardLockup, Footer, Faqs, FullWidthHeadline, HorizontalHeadline, ResourceCardLockup, LgProductCarousel, MdProductCarousel, QuoteCarousel, LgProductSection, LgResourceCallout, ContentCardLockup |
| `ui_kits/marketing_site/` | Clickable four-page recreation of the Mixpanel marketing site |
| `guidelines/` | 24 foundation specimen cards (colour ramps, type scales, spacing, radii, elevation, grid, logo, icons) |
| `assets/` | `logo.svg`, `mixpanel-logo.svg`, `icons/`, `fonts/` |
| `source/tokens.json` | The Token Studio source, kept for reference |
| `SKILL.md` | Agent Skills wrapper so this system can be used from Claude Code |

### Components

**Core** — `Button`, `Tag`, `NavLink`, `LogoMark`, `CircleCheck`, `TeamsIcon`, `RoundIconButton`, `RoundPlusButton`, `RoundMinusButton`
**Forms** — `Checkbox`, `Radio`, `Toggle`, `TextInput`
**Patterns** — `CoreTypeLockup`, `HorizontalCoreType`, `ProductCard`, `ResourceCard`, `SmResourceCard`, `LogoCarousel`, `ButtonLockup`, `FaqItem`, `ImageRatio`, `ContentCard`, `FormLockup`, `CarouselStep`, `LayoutGrid`, `CustomerLogo`, `HeroImage`, `BulletList`, `SmProductCard`
**Sections** — `TopNav`, `LgHero`, `SmHero`, `ZLayout`, `MdProductCardLockup`, `Footer`, `Faqs`, `FullWidthHeadline`, `HorizontalHeadline`, `ResourceCardLockup`, `LgProductCarousel`, `MdProductCarousel`, `QuoteCarousel`, `LgProductSection`, `LgResourceCallout`, `ContentCardLockup`

The first 21 are exactly the inventory the Heliograph codebase defines. `NavLink`, `ButtonLockup`, `FaqItem` and `Faqs` are built from the Figma file, which defines them as components the codebase had inlined or not yet shipped. Each directory carries a `<Name>.d.ts` props contract and a `<Name>.prompt.md` usage note.

---

## Content fundamentals

The written voice in the source is plain, concrete and second-person. It does not perform.

- **You, not we.** Copy addresses the reader: "Answer product questions in seconds." Mixpanel refers to itself by name, not as "we", in headlines.
- **Title Case for buttons and links**, unless the label runs longer than five words — then sentence case. This is a written rule in `design-guidelines.md`, not a convention I inferred. Real labels: "Get Started", "Learn More", "Get Demo", "Contact Sales", "Become a Partner".
- **UPPERCASE only for footer group headers** — PLATFORM, AI, DATA, TEAMS, INDUSTRIES, RESOURCES, COMPANY, TEMPLATES, COMPARE US. Nothing else in the system is uppercased; `text-case: title` exists as a token for button labels only.
- **Sentence case everywhere else** — headlines, subheads, tags, nav items.
- **Nav and IA words are nouns, short**: Platform, Solutions, Resources, Pricing. Product names are literal and unadorned: Session Replay, Warehouse Connectors, Metric Trends, Mixpanel Agent, AI Data Governance.
- **Headlines are one line, one claim.** The H1 lockup is capped at 720px, so a headline that wraps past two lines is a headline that needs cutting.
- **Subheads are one or two sentences** and explain the mechanism, not the benefit adjective.
- **No emoji.** None appear anywhere in the source — not in copy, not in the icon set, not in component defaults. Do not introduce them.
- **No exclamation marks, no rhetorical questions in headlines, no "unlock/supercharge/revolutionise".**
- Numbers are used sparingly and specifically: "Trusted by 29,000+ paying customers" is the one stat that recurs.
- Legal footer line: `©2025 Mixpanel. All rights reserved` — no period.

Placeholder copy in the repo is bacon ipsum. Replace it; never ship it.

---

## Visual foundations

### Colour

Eight ramps, each ten steps (01 lightest → 10 darkest) plus alpha stops: **purple** (brand), **pool** (blue), **mint** (teal), **lava** (warm red), **peach**, **mustard**, **grass**, **gray**.

- The brand purple is `--colors-purple-06` `#7856ff`. Step 06 is the "true" hue of every ramp; 10 is the near-black surface version; 01–03 are the tints used for text on dark.
- Text is `#1f2023` (gray-10), body copy is that colour at 70%. There is no pure black in use; `--colors-absolute-black` exists but nothing references it.
- Semantic status colours reuse ramp 06: focus/purple, error/lava, warning/mustard, success/grass, info/pool.
- A page picks **one hue** and stays with it. Sections alternate between `--surface-light` (#fff), `--surface-default` (#fafafa) and `--surface-muted` (#f4f4f4), plus the deep `--surface-{hue}-dark` for full-dark sections.

### Type

Garnett throughout — a geometric sans with a distinctive single-storey construction. Regular (400) and Medium (500) ship as woff2; Semibold (600) is present in the font folder but unused by any component.

- Headlines: Medium, 120% leading, −2% tracking (−1% at H4, 0 at H5). H1 60 / H2 48 / H3 36 / H4 28 / H5 22.
- Body: Regular or Medium, **+2% tracking**, 160% leading (168% at 14px and 12px). B1 22 / B2 18 / B3 16 / B4 14 / B5 12.
- Button and tag labels use **75% leading** so single-line controls sit tight.
- Headings step down at smaller breakpoints (H1 → H2 at tablet → H3 at phone). Use the mapped token, never a custom size.
- Note: `design-guidelines.md` documents H6 (18px) and H7 (16px), but tokens only define H1–H5. Components fall back to H5 for H6. Flagged for the token owner.

**Upstream build-output gaps.** Two values exist in `tokens.json` but never reached `build/css/variables.css`, so the published CSS is incomplete: the H6/H7 heading steps above, and `blur.100` (100px), which `Footer.css` and `LgHero.css` need for their glows. `--blur-100` is re-declared by hand in `tokens/primitives.css` with a comment; the heading steps are not. Both should be fixed in the Style Dictionary build rather than patched downstream.

### Space, radius, borders

- Spacing primitives run 2 → 160px; components reference six aliases: 8 / 16 / 24 / 32 / 40 / 80.
- Radii are role-named: **4px** for controls, tags and inputs; **16px** for content and images; **24px** for cards; **40px** for page shells like the footer; **100px** pill for every button.
- Borders are 1px (`--standard`), occasionally 0.5px (`--thin`). Card borders are `#eaeaea` on light and white-at-30% on dark. No 2px borders anywhere.
- Cards use an 8px "border spacing" inset — the outer card is 24px-round and holds a 16px-round image with 8px of card visible around it. That double-radius nesting is the most recognisable structural motif in the system.

### Backgrounds, gradients, imagery

- No photography, no illustration, and no repeating pattern or texture appears in the source. Image areas are grey placeholders or gradient panels.
- Two gradient families do the visual work:
  - **Hero dark** — bottom-up: white → pale tint → the hue → deep hue. Used behind the homepage hero and the footer.
  - **Product card** — bottom-up: hue-07 → hue-06 → a *complementary* hue's tint → near-white. Purple pairs with lava, pool with mint, lava with mustard, mustard with peach.
  - There is also a **hero light** family (transparent → tint → hue) used by SmHero.
- The "sliced" hero variant repeats the gradient across 11 stepped columns of 128px — a signature treatment, not decoration to reinvent.
- Heroes carry a large white radial ellipse behind the headline for contrast; the footer carries a 100px-blurred white ellipse above the card, and LgHero's ellipse uses the same treatment.
- Card fills on dark are themselves gradients: 20% of the hue's 09 step fading into the 10 step.

### Elevation, transparency, blur

- No grey drop shadows. Elevation is a **coloured glow**: `0 40px 36px -48px` in the card's hue at 30–50% on light, `0 40px 24px -38px` on dark. It reads as a soft colour halo under the card, not a lift.
- The focus ring is `0 0 0 4px rgba(120,86,255,0.3)` plus a 1px inset purple border. Every interactive component uses it.
- Blur is used twice: the top nav is white-at-80% with an 18px backdrop blur, and the footer's and hero's decorative ellipses are blurred 100px.
- The footer card fill is masked with a `linear-gradient(to bottom, transparent, black 30px)` so the top edge dissolves; the logo carousel row is masked at both ends.

### Motion and states

- Buttons transition `background-color` and `opacity` over **0.4s `cubic-bezier(0.2,0,0.2,1)`**. Form controls use 0.15s, toggles 0.2s.
- **Hover on buttons is a fill change, not a colour shift**: primary goes 100% → 80% opacity black; secondary 7% → 10% tint. The arrow head slides 2px right and a line grows behind it — the arrow extending is the brand's hover signature.
- **Press is `opacity: 0.8`.** No scale, no shrink.
- Hover on links and footer items is an opacity change (0.7 → 1, or 1 → 0.8). Never an underline appearing.
- Disabled is `opacity: 0.6` with `cursor: not-allowed`.
- The only ambient animation is the logo carousel: 36s linear infinite translate.

---

## Iconography

Heliograph has **no icon library**. There is no icon font, no sprite sheet, and no dependency on Lucide, Heroicons or similar. What exists is a handful of glyph ideas, all shipped as raw SVG or compiled into components:

1. `assets/icons/caret-down.svg` — a 5×2.5px caret, rotated 90° in the top nav to sit beside dropdown links.
2. `assets/icons/chevron-right.svg`
3. `assets/icons/burger-menu.svg` — 40×40, the mobile/tablet menu trigger.
4. **Inline path affixes** compiled into the components themselves: the button arrow (head + line, two sizes), the footer link chevron, the checkbox/toggle tick, the text-input success check, and the plus/minus glyphs. These are hand-tuned sub-pixel paths (`width="6.504"`, `height="9.912"`) — copy them from the component source rather than redrawing.

Rules: fill is always `currentColor` so glyphs inherit the button's text colour. Sizing tokens exist (`--icon-sm` 16px, `--icon-default` 24px) but the affix glyphs are smaller and hard-coded. **No emoji, no unicode characters used as icons.** If a design needs an icon that doesn't exist here, ask — don't import a third-party set and call it Heliograph.

---

## Using this system

Link one file:

```html
<link rel="stylesheet" href="styles.css">
```

Then use the semantic tokens, never the primitives, in anything you build:

```css
/* yes */ color: var(--text-on-light-body); background: var(--surface-muted);
/* no  */ color: rgba(31,32,35,.7);        background: var(--colors-gray-02);
```

Type is applied with the `font` shorthand token plus a matching letter-spacing token, exactly as the components do:

```css
font: var(--headline-h3); letter-spacing: var(--letter-spacing-negative-2);
```

---

## Figma coverage — what is skipped and why

The attached `System WIP.fig` reports **131 component families**; this system implements **22**. That gap is mostly bookkeeping, not missing work. The skipped families fall into four groups:

1. **Duplicates of the same set across pages.** Forms, Forms/Inputs, Forms/Toggles and Forms/Dropdown Item each appear three times; Navigation, tags-lg, tags-sm, Checkbox and FAQs two or three times; Core Type Lockups, Sm Hero Images, md-product-card, lg-resource-card, h3-variations and 02 Heros twice. Counted once, they collapse to a single component each — most already built.
2. **Numbered specimen frames of components that exist.** `01-lg-button-primary`, `01-lg-button-secondary`, `01-lg-buttons`, `01-sm-button-*`, `02-sm-buttons`, `03-tertiary`, `sm-tertiary`, `lg-arrow`, `sm-arrow`, `lg-plus`, `lg-minus`, `sm-plus`, `sm-minus`, `04-arrows`, `05-plus`, `05-plus-&-minus` are variant sheets for `Button`, `RoundIconButton`, `RoundPlusButton` and `RoundMinusButton` — the same components under specimen names.
3. **Illustration and imagery, not components.** `Company KPIs` (node 127:4272) is a decorative hexagon-lattice illustration in purple tints, `Quote Carousel Logos` is a plate of customer marks, and `Sm Hero Images` ships illustration bitmaps — artwork to supply as files, not markup to build. `HeroImage` provides the frame they sit in.
4. **Third-party annotation kit, not Heliograph.** The `Hero` family is four full-bleed bitmap photographs (Scene=Desert and friends, node 127:4923) rather than a component, and the system uses no photography — it is imagery to supply, not code to build. `Superlabel` (22px, Inter, calendar glyph), `Detail`, `Switch`, `Lockup`, `Annotation Dot`, `New Tag`, `Toast`, `Reference Tag`, `Status Chip` and the breadcrumb / pagination sets on the `mess` page come from Figma's Annotation Kit and an external UI library. They are set in Inter on pure black, use 12px radii and grey drop shadows, and reference none of Heliograph's tokens. Building them would put non-brand components in the system.
5. **Genuinely unbuilt Heliograph families.** A handful remain:  Content Card Lockups, Hero scenes, customer-logo, Superlabel, Avatar / Avatar Group, RadioButton states. These are real gaps and are being built in batches. Built so far: `NavLink` (node 98:937), `ButtonLockup` (400:39735), `FaqItem` (172:25647 / 172:25756) `Faqs` (172:25966), `FullWidthHeadline` (127:15352) `HorizontalHeadline` (127:14987) `ResourceCardLockup` (1205:94994), `ImageRatio` (127:4028 / 127:4030) `ContentCard` (127:4999) `FormLockup` (127:14598) `LgProductCarousel` (127:15403), `CarouselStep` (127:15487) `MdProductCarousel` (127:15576) `QuoteCarousel` (127:16159) `LayoutGrid` (186:27050) `LgProductSection` (1191:20609) `LgResourceCallout` (127:15849) `ContentCardLockup` (127:16663) `CustomerLogo` (127:11196) `LogoMark` (logo-mark / MXP - Main Logo) `HeroImage` (127:14642), `CircleCheck` (120:2861) `BulletList` (127:12701) `SmProductCard` (132:19820) and `TeamsIcon` (127:4932).

### Intentional additions

`NavLink`, `ButtonLockup`, `FaqItem`, `Faqs`, `FullWidthHeadline`, `HorizontalHeadline` `ResourceCardLockup`, `ImageRatio`, `ContentCard`, `FormLockup`, `LgProductCarousel`, `CarouselStep`, `MdProductCarousel`, `QuoteCarousel`, `LayoutGrid`, `LgProductSection`, `LgResourceCallout`, `ContentCardLockup`, `CustomerLogo`, `LogoMark`, `HeroImage`, `CircleCheck`, `BulletList`, `SmProductCard` and `TeamsIcon` — all twenty-five exist in the Figma file but not in the codebase, so their specs come from the `.fig` nodes named above rather than from source CSS. Everything else is one-to-one with the codebase. Every component here has a one-to-one counterpart in the Heliograph codebase. The only changes are structural: components were split into `core / forms / patterns / sections` directories, converted from TypeScript to JSX, and given content props (headline, subhead, labels) where the originals hard-coded bacon ipsum.
