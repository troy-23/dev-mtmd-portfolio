# Skills / Stack & Conventions

This documents the codebase stack and conventions so future changes (by a human or an AI
agent) stay consistent.

## Stack

| Area        | Tools                                                                 |
|-------------|----------------------------------------------------------------------|
| Build       | Vite 5, TypeScript 5                                                  |
| UI          | React 18, Tailwind CSS 3, shadcn/ui (Radix UI), lucide-react         |
| Motion      | Framer Motion 12, Lenis (smooth scroll)                              |
| Forms       | Web3Forms (contact), react-hook-form + zod (available)              |
| Routing     | react-router-dom 6                                                   |
| Hosting     | Vercel                                                               |

> React Query was removed — project data is static, so no data-fetching layer is needed.

## Project structure

```
src/
  main.tsx              # entry
  App.tsx               # providers + router
  pages/
    Index.tsx           # composes all sections; initializes Lenis
    NotFound.tsx
  components/
    HeroSection, ProjectsSection, ProjectCard, ServicesSection,
    StacksSection, AboutSection, ContactSection, ContactForm,
    Footer, Navbar, Chatbot, LoadingScreen, ScrollReveal,
    ScrollProgress, BackToTop, ParticleField, SplashCursor,
    ElectricBorder, StatusBadge
    ui/                 # shadcn components
  hooks/
    use-animations.tsx  # animations toggle, defaults to prefers-reduced-motion
    useSmoothScroll.ts  # Lenis setup (only when animations enabled)
    useLoadingState.ts  # intro loader state
    use-mobile.tsx
  index.css             # theme tokens + helper classes
public/
  screenshots/          # project preview JPGs (1280x800, q72)
  ai-mtmd*.png, favicon.ico, robots.txt, sitemap.xml, resume PDF
docs/                   # this documentation
```

## Conventions

- **Path alias:** `@/` → `src/` (configured in `vite.config.ts` and tsconfig).
- **Styling:** Tailwind utility classes only; use theme tokens (`text-primary`,
  `bg-card`, `border-border`) — avoid hard-coded hex. Glow/effect helpers live in
  `index.css`.
- **Section pattern:** each section is `<section id="…" className="py-32 px-6 border-t
  border-border …">` with a `// kicker` label, an `<h2>` headline, and a short subtitle.
- **Animation gating:** anything expensive must respect `useAnimations().enabled`
  (see `SplashCursor` mount in `Index.tsx`). New infinite/WebGL/canvas effects must follow this.
- **Content data:** project/service/FAQ content is plain arrays at the top of their
  component files (`projectsData` in `ProjectsSection.tsx`, `services` in
  `ServicesSection.tsx`, `preBuiltQuestions` in `Chatbot.tsx`).

## Adding a project

Edit `projectsData` in `src/components/ProjectsSection.tsx`:

```ts
{
  id: "12",
  title: "Project Name",
  type: "Landing Page",            // shown as badge
  image: "/screenshots/slug.jpg",  // add the JPG to public/screenshots/
  description: "Human, professional, honest one-liner.",
  project_url: "https://…",
  tech_stack: ["…"],
}
```

Then bump the "Live Projects" stat count in the same file.

## Regenerating project screenshots

There is no committed screenshot script (it was a one-off using Playwright). To recreate:
launch Chromium with Playwright, visit each `project_url`, wait for the hero to settle,
and screenshot the viewport as JPEG (1280×800, quality ~72) into `public/screenshots/<slug>.jpg`.
Keep total size small (target < 1 MB for all images combined).
