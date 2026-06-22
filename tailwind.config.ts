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
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem,5.2vw,4.5rem)",   { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(1.9rem,3.6vw,2.9rem)",   { lineHeight: "1.14", letterSpacing: "-0.005em" }],
        "display-md": ["clamp(1.5rem,2.6vw,2.1rem)",   { lineHeight: "1.2",  letterSpacing: "0" }],
      },
      boxShadow: {
        card:         "0 1px 2px rgba(0,0,0,0.05)",
        "card-hover": "0 1px 2px rgba(0,0,0,0.06)",
      },
      letterSpacing: {
        tighter: "-0.015em",
        tight:   "-0.008em",
        normal:  "0",
        wide:    "0.04em",
        widest:  "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
