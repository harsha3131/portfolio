# Sri Harsha Portfolio — Design System

A design system for **Sri Harsha Portfolio**, a portfolio generator that renders living,
public-facing portfolio sites. The signature look: **frosted glass UI floating over soft,
realistic photographic backgrounds** with a warm sunset accent. Light, airy, and refined.

> No source codebase or Figma was provided — this system was authored from the brief
> ("portfolio generator with realistic animated backgrounds and glass UI") plus the
> directional choices the user selected (light & airy; photographic depth; warm sunset
> coral→amber; modern geometric sans; emoji used sparingly; ~18px corners).

---

## CONTENT FUNDAMENTALS

**Voice.** First person, warm and confident, never boastful. The portfolio speaks *as the
maker* ("I craft interfaces…", "I take on a few select engagements"). Product/marketing
chrome speaks *to the visitor* ("View work", "Get in touch").

**Tone.** Calm, considered, a little poetic but always concrete. Favor short, declarative
sentences. One vivid metaphor is welcome ("interfaces that feel like light through glass"),
piled-on adjectives are not.

**Casing.** Sentence case for headings and buttons ("View work", not "View Work"). ALL-CAPS
only for tiny eyebrows/overlines with wide tracking. Mono lowercase for metadata.

**Person.** "I / my" for the portfolio owner's voice; "you / your" when guiding the visitor.
Avoid "we" unless describing a team on a case study.

**Punctuation.** Real typographic glyphs — curly quotes, em dashes, `&rarr;` arrows. Numbers
and years in mono.

**Emoji.** Sparingly, as a single accent at a moment of delight (e.g. ✨ on a success
state). Never in headings, navigation, or body copy. Never as bullets or icons.

**Examples.**
- Eyebrow: `DESIGNER & DEVELOPER · PORTFOLIO`
- Headline: "I craft interfaces that feel like light through glass."
- Body: "Product design, brand systems, and front-end for teams who care about the last 5%."
- Button: "View work" / "Get in touch" / "Send message"
- Meta: `12 weeks` · `Lead Designer` · `2025`

---

## VISUAL FOUNDATIONS

**Color.** Warm sunset accent — coral `#ff7a45` (`--sunset-400`) into amber `#ffab42`,
combined as `--grad-sunset`. Neutrals are **warm-tinted slate**, never pure gray or black:
near-white `#faf8f6` surfaces, `#1a1714` ink. Status colors are muted, not neon. Imagery is
warm and natural — golden-hour landscapes, soft daylight; never cold or high-contrast b&w.

**Type.** Two geometric sans. **Sora** (700–800) for display & headings, tracked tight
(−0.03em). **Plus Jakarta Sans** (400–600) for body & UI at 1.5–1.6 line-height. **JetBrains
Mono** for metadata, years, token labels. 1.25-ish scale, 16px base.

**Spacing.** 4px base grid. Generous section padding (64–96px). Container max ~1080–1200px.

**Backgrounds.** The defining motif: **full-bleed photographs of real scenes** (landscapes,
studios, coastline) sitting *behind* the UI. Each is covered by a light warm wash
(`linear-gradient` white→`#fff7f0`, 30–60% opacity) so glass and text stay legible. Some
backgrounds are softly blurred (`blur(4px)`); all may slowly drift/zoom via `sh-bg-drift`
(scale 1.08→1.14 over 18s, ease-in-out, infinite) for the "realistic animated" feel.

**Glass.** The hero surface. Recipe: translucent white (`--glass-white` 55% / `-strong` 72%),
`backdrop-filter: blur(18px) saturate(140%)` (strong = 32px), a 1px bright border
(`--glass-border`), a soft warm drop shadow **plus an inset top highlight** (the "lit edge").
Three strengths: faint / standard / strong.

**Animation.** Gentle and ambient only. Easing `--ease-out` cubic-bezier(0.22,1,0.36,1) for
settles; `--ease-spring` for the occasional subtle overshoot. Durations 140/240/420ms for UI,
18s for background drift. Entrance: `sh-fade-up`. All motion respects
`prefers-reduced-motion`. No bounces on content, no infinite decorative loops on text.

**Hover.** Cards lift (`translateY(-4px)`) and deepen their shadow. Links shift to the sunset
accent color. Buttons keep their fill.

**Press.** Buttons scale down to 0.97; icon buttons to 0.92. Quick (140ms).

**Borders.** Hairline. Glass borders are bright translucent white; opaque surfaces use warm
neutral `--border-subtle`/`-strong`. No heavy or colored-left-only borders.

**Shadows.** Soft and **warm-tinted** (`rgba(64,40,20,…)`), never harsh black. A 5-step
elevation scale plus the composite `--shadow-glass` (drop + inset highlights). Primary CTAs
carry a sunset glow (`--glow-sunset`).

**Radii.** Rounded and friendly. Default **18px** (`--radius-md`) for glass cards & buttons;
12 for inputs/small chips, 24–32 for large panels, pill for nav, tags, badges.

**Transparency & blur.** Used deliberately — only where a surface sits over photography or
another surface, to create depth. Flat content areas stay opaque. Blur strength scales with
elevation (more blur = closer to viewer).

**Layout.** Floating sticky glass nav pill at top-center. Centered max-width content columns.
Cards in responsive `auto-fill` grids. Backgrounds are `position:absolute` layers behind a
`z-index`'d content layer.

---

## ICONOGRAPHY

**System: [Lucide](https://lucide.dev)** — clean, geometric, 2px stroke, rounded line caps.
It matches the geometric-sans, light-and-airy personality. Loaded from CDN
(`https://unpkg.com/lucide@latest`); call `lucide.createIcons()` after render, or use
`lucide-react` in production. Icons inherit `currentColor` and sit inside `IconButton`.

> **Substitution flag:** Lucide is a substitute chosen for fit — there was no provided icon
> set. If the brand has its own icons, drop the SVGs into `assets/icons/` and update this
> section + `IconButton` usage.

**No custom icon font.** **Unicode glyphs** are used for a few inline affordances only
(`→`, `←`, `×`). **Emoji** appears at most once as a delight accent (✨ on success) — never
as a functional icon. Never hand-draw bespoke SVG icons; use Lucide.

**Brand marks** live in `assets/`: `logo-wordmark.svg` (full lockup) and `logo-mark.svg`
(monogram tile). Both use the sunset gradient with a lit glass edge.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry; `@import`s every token file. Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`
(glass/shadow/radius/motion), `base.css` (resets + `.sh-glass*` utilities).

**`assets/`** — `logo-wordmark.svg`, `logo-mark.svg`.

**`components/`** — reusable primitives (each `.jsx` + `.d.ts` + `.prompt.md`, with a
directory `@dsCard`):
- `core/` — **Button, GlassCard, Badge, Tag, Avatar, IconButton**
- `forms/` — **Input**
- `navigation/` — **GlassNav**

**`ui_kits/published-portfolio/`** — full interactive recreation of the generated portfolio
site (Home / Work / Project / Contact). See its `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the
Design System tab.

**Namespace:** components are exposed at `window.SriHarshaPortfolioDesignSystem_04f779`.
