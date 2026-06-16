# CLAUDE.md

This repo is **BASE** — a neutral canvas for building a [uikit.studio](https://uikit.studio)
UI kit. See [`AGENTS.md`](./AGENTS.md) and **[`prompts/build.md`](./prompts/build.md)**
(the full spec) before you start.

Build a **complete, original, production-grade** kit from the developer's brief:

- **Original** structure — invent your own sections + signature components; never recolor another kit.
- **Full** — complete design system (full scale + light/dark + type scale), the whole
  component set with every variant/state, a full multi-section landing, a full app
  dashboard (sidebar · KPIs · chart · data table · filters), full pricing, and a
  components showcase. Not a sampler.
- **Consistent** — one mood board across every surface.
- **Runnable + bilingual** — `cd react && pnpm dev`; EN + AR + full RTL; dark mode.

Theme first (`design/theme.css` + `design/tokens.json`), then components, then pages
(`react/src/routes/*` — replace the stubs). Validate with `npx uikit-studio validate`.
