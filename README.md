# Suthern Studios — Website

The studio's marketing site. Built with [Astro](https://astro.build), styled from the
**Suthern Studios Design System**, deployed to GitHub Pages.

Ships as fully static HTML. No React, no client-side framework — the only JavaScript
on the site is a ~20-line inline script for the mobile nav disclosure.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command           | Does                                                  |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload. Shows draft devlog posts.  |
| `npm run build`   | Production build into `dist/`. Drafts excluded.        |
| `npm run preview` | Serve the built `dist/` locally.                       |
| `npm run check`   | Typecheck `.astro` and `.ts` files.                    |

---

## Project structure

```
src/
├── components/         Reusable .astro components (Button, Card, Badge, …)
├── config.ts           ← Site metadata, nav, socials, game info, form endpoints
├── content/devlog/     ← Devlog posts, one Markdown file each
├── content.config.ts   Devlog frontmatter schema (validated at build time)
├── layouts/            BaseLayout — head, meta, nav, footer
├── pages/              One file per route
├── styles/
│   ├── tokens/         Design-system tokens, vendored verbatim — don't edit
│   ├── design-system.css
│   └── global.css      Reset, base elements, layout + motif utilities
└── utils/date.ts       UTC-pinned date formatting for the devlog

public/                 Served as-is: assets, favicon, robots.txt, CNAME
```

**Most things you'll want to change live in [`src/config.ts`](src/config.ts).**

---

## Writing a devlog post

Add a Markdown file to `src/content/devlog/`. The filename becomes the URL:

`2026-06-12-layered-biomes.md` → `/devlog/2026-06-12-layered-biomes/`

```markdown
---
title: 'Layered biomes & the radiation pass'
date: 2026-06-12
build: '1184' # optional
tag: 'World-gen' # single topic label
accent: 'ember' # 'ember' | 'cyan' — the left edge bar
summary: 'One or two sentences. Used on the index and as the meta description.'
draft: false # true = visible in dev, excluded from the build
---

Body copy in Markdown. `##` headings, lists, code blocks, and blockquotes are
all styled.
```

Frontmatter is schema-validated — a typo fails the build instead of shipping a
broken page. The index, home-page teaser, and `/devlog/rss.xml` all update
automatically.

---

## Wiring up the forms

The contact and newsletter forms are **built but not connected**. Until an
endpoint is set they render disabled, with the contact form pointing visitors at
the email address instead — so nobody types a message into a void.

To connect them, sign up with [Formspree](https://formspree.io) or
[Web3Forms](https://web3forms.com) (both have free tiers and work on static
hosting), then paste the endpoints into `src/config.ts`:

```ts
export const FORMS = {
  contactEndpoint: 'https://formspree.io/f/xxxxxxxx',
  newsletterEndpoint: 'https://formspree.io/f/yyyyyyyy',
} as const;
```

That's the only change needed — the forms enable themselves, the disabled-state
notice disappears, and both post their existing named fields (`name`, `email`,
`subject`, `message`).

---

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.

**One-time setup in the repo settings:**

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. **Settings → Pages → Custom domain:** `suthernstudios.com`
3. At your DNS provider, point the domain at GitHub Pages:

   | Type    | Name  | Value                                                                       |
   | ------- | ----- | --------------------------------------------------------------------------- |
   | `A`     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
   | `CNAME` | `www` | `sutherstudios.github.io`                                                   |

4. Once DNS resolves, tick **Enforce HTTPS**.

`public/CNAME` is committed so the custom domain survives each deploy.

### Publishing without a custom domain

To use the default `sutherstudios.github.io/SuthernStudiosWebsite` URL instead,
edit [`astro.config.mjs`](astro.config.mjs):

```js
site: 'https://sutherstudios.github.io',
base: '/SuthernStudiosWebsite',
```

…and delete `public/CNAME`. Links and assets resolve through Astro and follow
automatically.

---

## Design system

Visual language comes from the **Suthern Studios Design System** — an
"optimistic machine age" 1980s retro-futurism direction, dark-first, deliberately
independent of the AfterShock game's in-game look.

- **Color:** ember-orange primary (`--ember-500`), electric cyan secondary
  (`--cyan-500`), cool blue-tinted ink neutrals. Pop hues appear almost only
  inside the sunset gradient.
- **Type:** Chakra Petch (display, **sentence case**), IBM Plex Sans (body),
  IBM Plex Mono (UPPERCASE eyebrows, `//` and `>` prefixed labels).
- **Motifs:** blueprint vector grid, sunset radial wash, cyan horizon line, and
  the machined chamfer (`clip-path`) — the chamfer is reserved for hero/marquee
  elements.
- **Voice:** confident, technical, plain-spoken. "We" for the studio, "you" for
  the player. **No emoji, ever.**

### Rules when editing styles

1. **Never hard-code a hex.** Use the CSS custom properties from
   `src/styles/tokens/`. If a value doesn't exist as a token, that's a signal to
   reconsider — not to inline a hex.
2. **Don't edit `src/styles/tokens/`.** Those files are vendored from the design
   system. Site-specific styling belongs in `global.css` or a component's scoped
   `<style>` block.
3. **Headlines are sentence case.** The squared display face carries the weight —
   no need to SHOUT.
4. **Icons are [Lucide](https://lucide.dev).** Add new glyphs to the inline
   registry in [`src/components/Icon.astro`](src/components/Icon.astro) rather
   than pulling in the CDN bundle — it keeps the site at zero JS.

---

## Known TODOs before launch

Search `src/config.ts` for `TODO`. Outstanding:

- [ ] **Steam URL** — `AFTERSHOCK.steamUrl` is empty, so the wishlist CTA renders
      disabled as "Steam page soon". Paste the store URL to activate it.
- [ ] **AfterShock key art** — `AFTERSHOCK.keyArt` is empty, so the game page
      renders a branded title card. Drop a 16:9 image in `public/assets/` and set
      the path. *(Don't point it at `og-image.png` — that's the studio social
      card and reads as the wrong brand inside a panel labelled AfterShock.)*
- [ ] **Social handles** — verify the Twitter/X handle and add the real Discord
      invite in `SOCIALS`. Entries left at `'#'` are automatically hidden rather
      than shipped as dead links.
- [ ] **Form endpoints** — see *Wiring up the forms* above.
- [ ] **Fonts** — currently loaded from the Google Fonts CDN. Self-hosting the
      `.woff2` files would remove a third-party request and the associated
      privacy/latency cost.

---

*Survive the collapse. Build what comes next.*
