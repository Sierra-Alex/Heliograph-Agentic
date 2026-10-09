The homepage hero. Fixed width per breakpoint (1440/1200/808/384), 24px banner radius, white radial ellipse behind the headline.

```jsx
<LgHero color="purple" gradientStyle="sliced" headline="Build what people actually use" />
```

## Fluted glass overlay

Every LgHero renders a decorative fluted-glass layer over its gradient (and slices, if any): overlapping 131.5px strips on a 102.6px pitch, each a `--surface-light` → transparent ramp, `mix-blend-mode: overlay` at 30%, over a `--blur-100` backdrop blur. It sits under the glow ellipse and all content. Built in CSS only — do not add strip elements or an image. Source: Figma node 12990:18727.
