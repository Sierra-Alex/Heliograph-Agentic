Site footer. Carries the real Mixpanel IA (Platform / AI / Data / Teams / Industries / Resources / Company / Templates / Compare Us) — edit the arrays in the source if the sitemap changes.

```jsx
<Footer color="purple" ctaHeadline="Start free today" />
```

Group headers are UPPERCASE 12px at 70% white; every link carries a small chevron; "Pricing" is a pill link.

## Fluted glass overlay

Every Footer renders a decorative fluted-glass layer over its gradient (and slices, if any): overlapping 131.5px strips on a 102.6px pitch, each a `--surface-light` → transparent ramp, `mix-blend-mode: overlay` at 30%, over a `--blur-100` backdrop blur. It sits under the glow ellipse and all content. Built in CSS only — do not add strip elements or an image. Source: Figma node 12990:18727.
