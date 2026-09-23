import type { Config } from "tailwindcss";

// Colors are driven by CSS variables (channel triples) defined in globals.css,
// with a light set on :root and a dark set on .dark — see globals.css.
const c = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:             c("--c-bg"),
        sand:           c("--c-sand"),
        surface:        c("--c-surface"),
        deep:           c("--c-deep"),
        ink:            c("--c-ink"),
        muted:          c("--c-muted"),
        accent:         c("--c-accent"),
        "accent-warm":  c("--c-accent-warm"),
        "accent-soft":  c("--c-accent-soft"),
        "on-accent":    c("--c-on-accent"),
        amber:          c("--c-accent"),
        border:         c("--c-border"),
        "border-strong":c("--c-border-strong"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem,6vw,5rem)",    { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3.25rem)",    { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.65rem,3vw,2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card:         "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 40px -8px rgba(0,0,0,0.25), 0 2px 8px -4px rgba(0,0,0,0.15)",
        glow:         "0 0 40px rgba(41,82,203,0.3)",
        "glow-warm":  "0 0 24px rgba(41,82,203,0.45)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.025em",
        tight:    "-0.015em",
        normal:   "0",
        wide:     "0.04em",
        widest:   "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
