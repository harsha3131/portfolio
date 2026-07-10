**Button** — the primary action control; use for any clickable action, one primary per view.

```jsx
<Button variant="primary" size="md" onClick={save}>Publish portfolio</Button>
<Button variant="secondary" iconLeft={<Icon name="eye" />}>Preview</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (sunset gradient + glow), `secondary` (frosted glass), `outline` (coral border), `ghost` (text only). Sizes: `sm | md | lg`. Press state scales to 0.97. Supports `iconLeft` / `iconRight`, `fullWidth`, `disabled`.
