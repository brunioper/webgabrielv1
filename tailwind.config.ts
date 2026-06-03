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
        bg:             "#FBFBFD",   // near-white, cool — page background
        sand:           "#F3F5FA",   // light blue-grey — alternate sections
        surface:        "#FFFFFF",   // cards, elevated surfaces
        deep:           "#0B1A33",   // deep navy — footer + dark CTA anchor
        ink:            "#14171F",   // charcoal — primary text
        muted:          "#5A6478",   // cool grey — secondary text
        accent:         "#2952CB",   // royal blue — authoritative, not SaaS
        "accent-warm":  "#1E40A6",   // darker blue — hover on light
        "accent-soft":  "#EAEFFB",   // pale blue — tint backgrounds, badges
        amber:          "#2952CB",   // alias for compat
        border:         "#E5E8F0",   // neutral cool border
        "border-strong":"#D2D8E4",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem,6vw,5rem)",   { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem,4vw,3.25rem)",   { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.65rem,3vw,2.25rem)",{ lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card:         "0 1px 2px rgba(20,23,31,0.04), 0 4px 16px -8px rgba(20,23,31,0.10)",
        "card-hover": "0 8px 30px -8px rgba(20,23,31,0.16), 0 2px 8px -4px rgba(20,23,31,0.08)",
        glow:         "0 0 40px rgba(41,82,203,0.18)",
        "glow-warm":  "0 18px 40px -12px rgba(41,82,203,0.35)",
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
