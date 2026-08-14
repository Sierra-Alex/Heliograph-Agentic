# ZLayout

Alternating feature row: a CoreTypeLockup (H3, tag, buttons) beside a square gradient image panel. Flip `imagePosition` on consecutive rows to create a zigzag.

## Usage

```jsx
<ZLayout color="purple" imagePosition="right" tagText="Analytics"
  headline="Answer product questions in seconds"
  subhead="Mixpanel turns raw events into reports your team acts on." />

<ZLayout color="mint" imagePosition="left" pageBackground="standard"
  tagText="AI" headline="Answers in plain language"
  subhead="Ask Mixpanel Agent a question and get a chart." />
```

## Nested components

- **CoreTypeLockup** at H3 with tag + primary/secondary buttons.
- Image panel uses the product-card gradient for the active `color`.

## Page background

`pageBackground` sets the section surface:

| Value | Surface |
|---|---|
| `"light"` | `--surface-light` (white) |
| `"standard"` | `--surface-default` (#fafafa) |
| `"muted"` | `--surface-muted` (#f4f4f4) |
| `"dark"` | `--surface-{color}-dark` |

On dark, the nested CoreTypeLockup switches to `onDark` mode automatically.
