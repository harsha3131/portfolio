**Tag** — filter or category chip; use in rows for project filters / skills.

```jsx
<Tag selected onClick={toggle}>Design</Tag>
<Tag onRemove={() => drop('React')}>React</Tag>
```

`selected` fills with sunset; otherwise frosted glass. Pass `onRemove` to show a dismiss ×.
