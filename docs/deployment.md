# Deployment

This is a Vite SPA hosted on **Vercel**. Deploys are automatic on push to `main`.

## TL;DR — redeploy

```sh
npm run build        # sanity check it compiles
git add -A
git commit -m "your message"
git push origin main # Vercel auto-deploys main
```

That's it. Vercel detects the push and builds. No manual step needed.

## Vercel settings

| Setting           | Value         |
|-------------------|---------------|
| Framework preset  | Vite          |
| Build command     | `npm run build`|
| Output directory  | `dist`        |
| Install command   | `npm install` |
| Node version      | 20+ (24 used locally) |

`vercel.json` rewrites all routes to `/index.html` so client-side routing and direct
URL visits / refreshes work.

## Environment variables

The contact form uses a Web3Forms **public** key, hard-coded as a safe default in
`src/components/ContactForm.tsx`, so **no env var is required** for the form to work in
production.

Optional override (local or Vercel dashboard → Settings → Environment Variables):

```
VITE_WEB3FORMS_ACCESS_KEY=your-key-here
```

> Vite only exposes vars prefixed with `VITE_` to the client. After changing env vars on
> Vercel, trigger a redeploy for them to take effect.

## Git remotes

- `origin`   → https://github.com/troy-23/dev-mtmd-portfolio.git  (deploy source)
- `upstream` → https://github.com/capstoneprojett1-crypto/dev-mtmd-portfolio.git

Push to **origin/main** to deploy.

## Pre-deploy checklist

1. `npm run build` passes with no errors (chunk-size warning is fine; vendors are split).
2. New images added to `public/screenshots/` and kept small (JPEG, total < ~1 MB).
3. Content claims are honest (no fake stats / hard time guarantees).
4. Contact form still submits (test once after deploy).
5. Bump the "Live Projects" count if projects were added.

## Post-deploy smoke test

- Open the live URL, confirm the loader → hero typewriter runs.
- Scroll: Featured Work cards show screenshots; Lenis smooth scroll feels right.
- Submit the contact form and confirm the email arrives.
- Check a social/OG preview (e.g. paste the URL in a chat) for the right image/title.

## Performance notes

- Vendors are split via `manualChunks` in `vite.config.ts` (`vendor-react`,
  `vendor-motion`) for better caching and a smaller main bundle.
- Heavy effects (SplashCursor WebGL, ParticleField) are gated behind the animations
  toggle / `prefers-reduced-motion`.
