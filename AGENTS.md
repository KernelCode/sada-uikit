# AGENTS.md — Sada UI kit

This is **Sada** (صدى) — an editorial **audio & video media-platform** UI kit for the
[uikit.studio](https://uikit.studio) gallery. It is a finished, runnable design, not a
canvas. If a developer points you at this repo and says *"build me a site with this
design,"* reproduce **these** tokens, fonts, and components — **do not recolor it** into
something else.

**Read [`llms.txt`](./llms.txt) first** — it is the self-contained design brief (full
light + dark token tables, fonts, radius, component inventory, and pages).

## The design in one paragraph
Warm editorial publishing: a **cream paper** background (`#f6f4ee`), **ink-black** type,
a **hot-orange** accent (`#fa541c`) for links and highlights, and a **mustard gold**
(`#e3b23c`) reserved for the "subscribe" action. UI/body is **IBM Plex Sans Arabic**;
headings use the **Thmanyah Sans** display face, with **Thmanyah Serif** for editorial
showpieces. Content is laid out as dense card grids — podcast/newsletter "covers" are
typographic colour grounds, not photos. **Arabic-first, full RTL**, with EN and a
dark mode that flips every token.

## Rules
1. **Reproduce, don't reinvent.** Use the tokens in `design/theme.css` + `design/tokens.json`.
   No new hues, no off-brand components.
2. **Fonts are self-hosted** in `react/public/fonts/` and declared in `design/fonts.css`
   (`@font-face`). The Thmanyah faces are distributed publicly at font.thmanyah.com.
3. **RTL + bilingual.** All copy lives in `react/src/i18n/{ar,en}.ts`. Arabic is the
   primary language; keep the layout flipping with logical properties (`text-start`,
   `ms-*`/`me-*`, `rtl:` variants).
4. **Cards over photos.** Use the `<Cover>` component (typographic art on a tinted
   ground via `lib/tones.ts`) instead of stock imagery.
5. Keep `design/tokens.json` and `uikit.json` in sync with `design/theme.css`.

## Layout of the kit
```
design/theme.css       Tailwind v4 @theme tokens (light) + .dark block + [dir=rtl] swap
design/fonts.css       @font-face for IBM Plex Sans Arabic + Thmanyah Sans/Serif
design/tokens.json     the same tokens in W3C DTCG form
react/public/fonts/    self-hosted woff2 files
react/src/
  i18n/                ar.ts + en.ts dictionaries + provider (flips dir/lang)
  lib/                 cn.ts (class-merge), tones.ts (cover colour grounds)
  components/          Button, Card, Input, Badge, Container, Cover
  blocks/              Wordmark, SectionHeader, Footer
  routes/              layout.tsx (shell) + landing · articles · podcasts · showcase
```

## Run
```bash
cd react && pnpm install && pnpm dev   # http://localhost:5173
npx uikit-studio validate              # from the repo root
```

Gallery: <https://uikit.studio> · Submit: <https://uikit.studio/submit>
