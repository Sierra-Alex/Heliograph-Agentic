Flexible content slot that renders one of five content types inside a section lockup: logos, quote, form, stats, or bullets.

```jsx
<AddedContent content="logos" headline="Trusted by" logoCount={4} />
<AddedContent content="quote" quote="Great product." quoteName="Jane Doe" quoteTitle="CEO" />
<AddedContent content="form" submitLabel="Sign Up" />
<AddedContent content="stats" value="99" suffix="%" description="Uptime guarantee" />
<AddedContent content="bullets" items={["Point one","Point two","Point three"]} />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `content` | `"logos"` \| `"quote"` \| `"form"` \| `"stats"` \| `"bullets"` | `"logos"` |
| `onDark` | boolean | `false` |
| `hue` | `"purple"` \| `"pool"` \| `"mint"` \| `"lava"` \| `"mustard"` \| `"grass"` | `"purple"` |
| `logoCount` | number | `4` |
| `headline` | string | `"Trusted by"` |
| `quote` | string | lorem |
| `quoteName` | string | `"Full Name"` |
| `quoteTitle` | string | `"Job Title"` |
| `items` | string[] | three bullet strings |
| `value` | string | `"00"` |
| `suffix` | string | `"X"` |
| `description` | string | stat description |
| `submitLabel` | string | `"Click Me"` |

## CSS

Prefix `.ac`. Content-type modifier: `.ac--logos`, `.ac--quote`, `.ac--form`, `.ac--stats`, `.ac--bullets`.

## On dark

Pass `onDark` and `hue` together. Body text switches to `--text-on-dark-body`. Per-hue headline tint applied via `.ac--on-dark.ac--{hue}` (2-class specificity) on quote-name, stat-value, and stat-suffix using `--text-on-dark-headline-{hue}`.

## Nested components

- `CircleCheck` (bullets mode, `baseColor` flips light/dark)
- `Button` (form mode, primary lg, passes `onDark`)
- `TextInput` (form mode)

## Key tokens

- Type: `--body-b4` / `--body-b4-medium` / `--body-b3` / `--body-b3-medium` (form label), `--headline-h3` (stat value), `--body-b2-medium` (stat suffix)
- Spacing: `--generic-spacing-x-sm`, `--generic-spacing-sm`, `--generic-spacing-xx-sm`
- Colours: `--text-on-light-headline`, `--text-on-light-body`, `--surface-muted`
