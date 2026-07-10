---
name: sri-harsha-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for Sri Harsha Portfolio (a portfolio generator with frosted glass UI over soft photographic backgrounds and a warm sunset accent), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Entry stylesheet:** `styles.css` (links every token file). In static HTML, also link it.
- **Signature surface:** frosted glass — `.sh-glass` / `.sh-glass-strong`, or the `GlassCard`
  component. Always place it over a photographic/colored background with a light warm wash.
- **Accent:** warm sunset gradient `--grad-sunset` (coral → amber). One primary action per view.
- **Type:** Sora (display), Plus Jakarta Sans (body), JetBrains Mono (meta).
- **Icons:** Lucide (CDN). **Emoji:** sparingly, as a single delight accent.
- **Motion:** gentle; backgrounds drift slowly (`sh-bg-drift`); respect `prefers-reduced-motion`.
- **Components** live under `components/` and are bundled to
  `window.SriHarshaPortfolioDesignSystem_04f779`. Read each component's `.prompt.md` for usage.
- **Full product recreation:** `ui_kits/published-portfolio/`.
