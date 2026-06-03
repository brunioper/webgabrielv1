import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:             "#06101E",   // deep navy — immersive, not generic dark
        sand:           "#091629",   // slightly lighter navy — alternate sections
        surface:        "#0D1E3A",   // elevated card surfaces
        deep:           "#040A12",   // footer
        ink:            "#EEF3FF",   // barely blue-tinted white — readable, refined
        muted:          "#7890B4",   // blue-grey — secondary text
        accent:         "#2952CB",   // royal blue — authoritative, not SaaS
        "accent-warm":  "#6B8FFF",   // periwinkle — lighter accent
        amber:          "#6B8FFF",   // alias for compat
        border:         "#162640",   // subtle cool border
        "border-strong":"#1E3358",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem,6vw,5rem)",   { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3.25rem)",   { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.65rem,3vw,2.25rem)",{ lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card:         "0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)",
        "card-hover": "0 12px 40px -8px rgba(0,0,0,0.7), 0 2px 8px -4px rgba(0,0,0,0.5)",
        glow:         "0 0 40px rgba(41,82,203,0.3)",
        "glow-warm":  "0 0 24px rgba(41,82,203,0.45)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.025em",
        tight:    "-0.015em",
        widest:   "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
