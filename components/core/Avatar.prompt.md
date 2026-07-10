**Avatar** — round profile image; falls back to gradient initials.

```jsx
<Avatar src={user.photo} name="Sri Harsha" size={56} ring status="online" />
<Avatar name="Jane Doe" />
```

`size` is pixel diameter. `ring` adds a white border; `status` shows online/away/busy dot. No `src` → sunset-gradient initials.
