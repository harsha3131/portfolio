**Input** — labelled text field; the standard form control.

```jsx
<Input label="Project title" placeholder="My portfolio" />
<Input label="Email" iconLeft={<i data-lucide="mail" />} hint="We never share it." />
<Input label="Slug" error="Already taken" value="jane" />
```

Focus ring is sunset; `error` turns the border red and shows the message in place of `hint`. Sizes `md | lg`.
