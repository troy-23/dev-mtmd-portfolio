# Design

## Aesthetic

Terminal / cyberpunk developer vibe: dark background, monospace type, neon glow accents,
grid background, scanlines, and subtle motion. The site reads like a polished dev console.

## Theme

- Dark mode is always on (`<html class="dark">` in `index.html`).
- Color tokens are CSS variables defined in `src/index.css`, consumed via Tailwind.

### Core colors

| Token         | Value (HSL)          | Use                                  |
|---------------|----------------------|--------------------------------------|
| `primary`     | `174 100% 50%` cyan  | Primary accent, links, CTAs, glow    |
| `secondary`   | `330 100% 60%` pink  | Secondary accent, highlights         |
| `neon-green`  | green                | Tertiary accent (status, freelancer) |
| `background`  | near-black           | Page background                      |
| `card`        | dark surface         | Cards, panels                        |
| `border`      | low-contrast         | Hairline borders                     |
| `muted-foreground` | gray            | Body / secondary text                |

Helper classes: `text-glow-cyan`, `text-glow-pink`, `card-hover-glow`, `grid-bg`,
`scanline`.

## Typography

- **Monospace** (`font-mono`) for headings, labels, tags, and section kickers
  (`// services`, `// about me`, etc.).
- Body copy uses the muted foreground color at small sizes for a technical feel.

## Layout

- Single page, sections separated by `border-t border-border` and generous vertical
  padding (`py-32`).
- Content constrained to `max-w-5xl` / `max-w-6xl`, centered.
- Responsive: mobile-first, grids collapse to single column.

## Motion

- **Framer Motion** for entrance animations (`ScrollReveal`) and hover/tap micro-interactions.
- **Lenis** for smooth wheel scrolling (`src/hooks/useSmoothScroll.ts`).
- Decorative effects: `ParticleField` (canvas), `SplashCursor` (WebGL fluid), `ElectricBorder`
  (animated SVG border on project cards), animated scanlines and floating accents.
- **All heavy motion is gated** behind the animations toggle (`use-animations`), which
  **defaults to the user's `prefers-reduced-motion` setting**. Users who reduce motion get a
  calm, static site with native scrolling.

## Components of note

- `ProjectCard` — screenshot preview (16:10), type badge, title, description, tech tags.
- `ContactForm` — RMC-style "Work with me" form (Name/Email/Phone/Company/Comments).
- `Chatbot` — floating FAQ assistant with pre-built Q&A.
- `LoadingScreen` — intro loader gating the typewriter hero.

## Content rules

- Keep claims honest and verifiable (no fake stats, no hard time guarantees).
- Emphasize fundamentals + AI skill + real-world problem solving (see context.md).
