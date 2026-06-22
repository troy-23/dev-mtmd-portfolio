# Progress

Status log for the portfolio. Newest first.

## 2026-06-22

### Content / positioning
- Removed all dollar prices (services, chatbot) — moved to scope/timeline framing.
- Humanized all project & service descriptions (less "AI template" tone).
- Reframed messaging around: **skilled AI use + strong fundamentals + real-world problem
  solving + client needs** (see context.md). Removed the bare "AI-First" stat (read as
  "no own ideas") → now "End-to-End / Design to Deploy".
- Updated About to state fundamentals back the AI workflow; generalized the stack rows
  ("React, Next.js & most modern web UI", "APIs, databases & serverless") and added
  "AI skills: Agentic Coding · Prompt Engineering".
- Added stack-flexibility messaging (Services + About) — not locked to one toolset.
- Hero: added **Freelance Web Developer** badge; new tagline emphasizing idealism,
  responsibility, responsiveness.
- Shipping times standardized: **landing pages 4–7 days**, **full stack 20+ days**,
  timelines flexible. Removed all "24h/48h/72h" guarantees.
- Added "Ready to build your portfolio website?" sales CTA in Services.
- Honest stats bar: `11 Live Projects · Days not weeks · End-to-End · Open to work`.

### Projects
- Added 3 projects: **RMC Collective Studio**, **Ruth Yap — Writer**, **JCB Portfolio**
  (stacks detected from their source folders). Total now 11.
- Added real **screenshots** for all 11 projects (`public/screenshots/*.jpg`, captured
  with Playwright, JPEG q72, ~844 KB total) + **type badges** on each card.

### Contact
- Removed email (gmail) and Facebook/Instagram links from the public UI.
- Added a **Web3Forms contact form** ("Work with me") in the footer; public access key
  set as default. Submissions email the owner; address stays private.

### Tech / performance
- Dropped **React Query** (data is static) — removed provider + dependency.
- Added **Lenis** smooth scrolling (gated by the animations toggle).
- `prefers-reduced-motion` now respected on **initial load** (was only on change).
- Split vendors via `manualChunks` → main bundle 552 KB → ~240 KB; chunk-size warning gone.
- SEO: JSON-LD `Person` schema, `sitemap.xml`, `Sitemap:` in robots.txt, fixed OG/Twitter
  images (were pointing at the favicon) + sharper title/description.
- Added project documentation (`docs/`) and rewrote the README.

## Open / next steps
- Two demos still on `*.lovable.app` (YortyCollects, Hypertroyphy) — redeploy off Lovable
  and update URLs to fully remove Lovable traces.
- Resume PDF + `scripts/generate-resume.mjs` still contain the gmail.
- Consider per-project GitHub source links and (real) testimonials.
- Optional: lazy-load below-the-fold sections for an even lighter first paint.
