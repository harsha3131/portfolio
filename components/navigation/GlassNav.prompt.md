**GlassNav** — floating frosted nav pill; sits at the top of a published portfolio over the hero background.

```jsx
<GlassNav brand="Sri Harsha" links={['Work','About','Contact']} active="Work"
          cta="Hire me" onNavigate={go} onCta={openContact} />
```

Composes `Button` for the CTA. Active link turns sunset. Designed to float (position it with margin/absolute) over a photographic hero.
