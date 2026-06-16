# AGENTS.md — for any AI editor (Codex, Cursor, Claude Code, …)

This repo is **BASE** — a neutral canvas for building a [uikit.studio](https://uikit.studio)
UI kit. Your job is to turn it into a **complete, original, production-grade kit**
from the developer's brief.

**Read [`prompts/build.md`](./prompts/build.md) first — it is the spec.** The short version:

1. **Original** — invent this kit's own structure, sections, and signature
   components. Never ship a recolor of another kit.
2. **Full** — a real product, not a sampler: a complete design system (full color
   scale + light/dark semantic tokens + type scale), the **whole** component set
   with every variant + state, a **full multi-section landing**, a **full app
   dashboard** (sidebar, KPIs, a chart, a data table, filters), a full pricing
   page, and a components showcase that proves it.
3. **Consistent** — one mood board / color system applied to every surface.
4. **Runnable + bilingual** — `pnpm dev` just works; EN + AR + full RTL; dark mode.
5. **Agent-ready** — ship `AGENTS.md` + `llms.txt` at the finished kit's repo root so
   it can be reproduced by another developer's agent from a single URL (`prompts/build.md` §7).

**Workflow:** set tokens + fonts in `design/theme.css` → build components against
the tokens → compose the pages in `react/src/routes/*` (replace the stubs) →
`npx uikit-studio validate` → write `AGENTS.md` + `llms.txt` → screenshots. Keep
`design/tokens.json` in sync with `theme.css`.

Do not stop at a thin version. If a page would look empty next to a real SaaS
product, it is not finished.
