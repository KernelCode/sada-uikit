/** Sada — Tailwind v3 compatibility preset. v4 users prefer design/theme.css. */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Arabic", "system-ui", "sans-serif"],
        display: ["Thmanyah Sans", "IBM Plex Sans Arabic", "sans-serif"],
        serif: ["Thmanyah Serif", "Georgia", "serif"],
      },
      colors: {
        brand: { 100: "#ffe2d3", 500: "#fa541c", 600: "#e23d0a", 700: "#b62f09" },
        gold: { 500: "#e3b23c", 700: "#b8861f" },
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        border: "var(--color-border)",
        card: "var(--color-card)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        accent: "var(--color-accent)",
        ink: "var(--color-ink)",
        "ink-foreground": "var(--color-ink-foreground)",
        gold: "var(--color-gold)",
      },
      borderRadius: { DEFAULT: "0.75rem", lg: "1.25rem", xl: "1.75rem" },
    },
  },
};
