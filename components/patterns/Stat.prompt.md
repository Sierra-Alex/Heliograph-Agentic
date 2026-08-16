Single stat display: large H2 value with a medium suffix and a description line beneath. Center-aligned. Used inside `StatLockup`.

```jsx
<Stat value="99" suffix="%" description="Uptime guarantee" />
<Stat value="8" suffix="B+" description="Events tracked monthly" onDark hue="pool" />
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `value` | string | `"00"` |
| `suffix` | string | `"X"` |
| `description` | string | `"Short statement about the stat"` |
| `onDark` | boolean | `false` |
| `hue` | `"purple"` \| `"pool"` \| `"mint"` \| `"lava"` \| `"mustard"` \| `"grass"` | `"purple"` |

## CSS

Prefix `.ist`. On-dark modifier `.ist--on-dark`, hue modifier `.ist--{hue}`.

## On dark

Pass `onDark` and `hue` together. Description switches to `--text-on-dark-body`. Value and suffix get the per-hue headline colour via `.ist--on-dark.ist--{hue}` using `--text-on-dark-headline-{hue}`.

## Key tokens

- Value: `--headline-h2`, `--letter-spacing-negative-2`
- Suffix: `--body-b1-medium`, `--letter-spacing-2`, bottom padding `--spacing-6`
- Description: `--body-b4`, `--letter-spacing-2`
- Colours: `--text-on-light-headline` (value/suffix), `--text-on-light-body` (description)
