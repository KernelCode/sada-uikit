# base — the UIKit starter canvas

A **neutral, runnable canvas** for building a new [uikit.studio](https://uikit.studio)
kit. Not a finished design — it's the plumbing (routing, **i18n + RTL**, dark mode,
a **token system**, primitive components) wired up so you (and your AI editor) can
paint a brand‑new kit on top. Pair it with a prompt; the look is yours.

## Preview

<video src="https://github.com/KernelCode/sada-uikit/raw/main/screenshots/preview.webm" poster="https://github.com/KernelCode/sada-uikit/raw/main/screenshots/landing.png" muted loop playsinline width="100%"></video>

> Video not playing? [▶ Watch the preview ↗](https://github.com/KernelCode/sada-uikit/raw/main/screenshots/preview.webm) · [screenshot ↗](./screenshots/landing.png) · [live demo ↗](https://uikit.studio/demos/sada/)

```bash
npx uikit-studio new https://github.com/uikit-studio/base-uikit my-kit
cd my-kit/react && pnpm install && pnpm dev
```

## How to build your kit

1. Open the repo in **Claude Code / Codex / Cursor**.
2. Write your brief — the brand, mood, product. For example:
   *"A fintech kit — deep navy + electric mint, a condensed grotesk, glass panels,
   data‑dense. A trading‑desk dashboard and a high‑conversion landing."*
3. Then point your editor at **[`prompts/build.md`](./prompts/build.md)** — the brief
   for *how* to build it the uikit way. It is the important part: it requires a
   **full, original system**, not a recolor.

> **`prompts/build.md` in one breath:** be **original** (no cloned layouts) ·
> ship a **full design system** (complete component set + variants, a light/dark
> **color moodboard**, a type scale, a documented **radius scale**) · build **all
> four pages for real** including a **dense, full dashboard** (multiple tables,
> charts, users, activity, states) · **responsive** mobile→desktop · **EN + AR +
> RTL** + dark · and keep **every value defined & visible** in tokens + README +
> `uikit.json`.

Already have a kit and want a new look? **Remix** it instead — see
[`prompts/remix.md`](./prompts/remix.md).

## What's wired

```
design/theme.css     Tailwind v4 @theme tokens (light) · .dark block · [dir=rtl] swap
design/tokens.json   the same tokens in W3C DTCG form (keep in sync)
react/src/
  i18n/              en.ts + ar.ts + provider (flips dir/lang)
  lib/cn.ts          class-merge helper
  components/        primitives: Button · Card · Input · Badge · Container — extend these
  blocks/            composed sections — add your own
  routes/            layout.tsx (shell: nav · EN/AR · dark · CTA) + page stubs to REPLACE
```

Theme first: set the palette + fonts in `design/theme.css`, then build components
against the tokens, then compose pages. Reference tokens with `var()` —
`rounded-[var(--radius-lg)]`, not `rounded-[--radius-lg]` (a no‑op in Tailwind v4).

## Agent-ready by default

Every kit built from base must be **agent-ready** — reproducible by another developer's
AI agent from a single URL. So the finished kit ships, at its repo root:

- **`AGENTS.md`** — "this is the `<name>` design; read `llms.txt` + `design/`, then
  reproduce these tokens/fonts/radius/components."
- **`llms.txt`** — a self-contained design brief (prompt, light + dark tokens, fonts,
  radius, components, pages).

This base already includes starter [`AGENTS.md`](./AGENTS.md) + [`llms.txt`](./llms.txt);
keep them in sync with `design/` as you build. Once listed, the gallery also generates
`uikit.studio/kit/<id>/llms.txt` + `manifest.json` from your entry — so
*"build me a website with this design: uikit.studio/kit/<id>"* just works. See
[`prompts/build.md`](./prompts/build.md) §7.

## Then ship it

`npx uikit-studio validate` → push your repo → open a PR to list it at
<https://uikit.studio/submit>.

---

MIT © uikit.studio
