Sub-page hero. Uses the *light* hero gradient (fades to the hue at the bottom) rather than the dark homepage one.

```jsx
<SmHero color="mint" tagText="Product" headline="Session Replay" />
```

## Fluted glass overlay

Every SmHero renders a decorative fluted-glass layer over its gradient (and slices, if any): overlapping 131.5px strips on a 102.6px pitch, each a `--surface-light` → transparent ramp, `mix-blend-mode: overlay` at 30%, over a `--blur-100` backdrop blur. It sits under the glow ellipse and all content. Built in CSS only — do not add strip elements or an image. Source: Figma node 12990:18727.
