export const en = {
  brand: "base",
  nav: { landing: "Home", pricing: "Pricing", dashboard: "Dashboard", components: "Components", cta: "Get started" },
  canvas: {
    eyebrow: "// base canvas",
    title: "Your kit starts here.",
    body: "BASE is neutral plumbing — design tokens, dark mode and EN/AR + RTL, already wired. Replace the theme and these pages with your own complete design. Open prompts/build.md and go.",
    build: "Read the brief",
    secondary: "prompts/build.md",
    checklist: [
      "Set your palette + fonts in design/theme.css (+ tokens.json)",
      "Build the full component set — every variant and state",
      "Full pages: landing · pricing · dashboard · components showcase",
      "EN + AR with full RTL, and a dark-mode toggle",
      "npx uikit-studio validate, then add screenshots",
    ],
    todo: "Build this page — replace it with a full, on-brand screen. See prompts/build.md.",
    pages: { landing: "Landing", pricing: "Pricing", dashboard: "Dashboard", components: "Components showcase" },
  },
};

export type Dict = typeof en;
