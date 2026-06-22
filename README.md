# Marlone Troy Dominguiano — Portfolio

A personal portfolio for an AI-assisted full-stack developer & freelance web developer.
Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui, with a terminal/cyberpunk
aesthetic, smooth Lenis scrolling, and a Web3Forms-powered contact form.

**Live:** https://dev-mtmd-portfolio.vercel.app

## Tech Stack

- **Build:** Vite 5 + TypeScript
- **UI:** React 18, Tailwind CSS 3, shadcn/ui (Radix UI), lucide-react
- **Motion:** Framer Motion, Lenis (smooth scroll), custom canvas/WebGL effects
- **Forms:** Web3Forms (contact form)
- **Hosting:** Vercel (SPA rewrites via `vercel.json`)

## Local Development

```sh
npm install
npm run dev      # starts Vite on http://localhost:8080
```

## Quality Checks

```sh
npm run lint
npm run test
npm run build    # outputs to dist/
```

## Environment

The contact form uses a Web3Forms **public** access key (safe for client code). A working
key is set as the default in `src/components/ContactForm.tsx`. To override locally, create a
`.env` file:

```
VITE_WEB3FORMS_ACCESS_KEY=your-key-here
```

## Documentation

Project docs live in [`docs/`](docs/):

- [context.md](docs/context.md) — what this project is, who it's for, goals
- [design.md](docs/design.md) — design system, layout, aesthetic
- [skills.md](docs/skills.md) — stack, conventions, how the code is organized
- [progress.md](docs/progress.md) — current status, changelog, next steps
- [deployment.md](docs/deployment.md) — how to deploy & redeploy quickly

## Deployment

This is a standard Vite SPA on Vercel — pushing to `main` triggers an automatic deploy.
See [docs/deployment.md](docs/deployment.md) for the full checklist.
