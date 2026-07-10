**IconButton** — compact icon-only control; pass the icon as children (Lucide SVG recommended).

```jsx
<IconButton label="Share" variant="glass"><i data-lucide="share-2"></i></IconButton>
<IconButton label="Add" variant="solid" round={false}><i data-lucide="plus"></i></IconButton>
```

Variants: `glass` (frosted, default), `solid` (sunset), `ghost`. Sizes `sm | md | lg`. `round={false}` for a rounded square. Always set `label` for a11y.
