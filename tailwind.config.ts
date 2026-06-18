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
        bg:             "#F4F2EC",   // warm ivory paper
        sand:           "#ECE9E0",   // slightly deeper ivory — alternate sections
        surface:        "#FBFAF6",   // raised surface / cards
        deep:           "#122544",   // deep navy — the one dark section + footer
        ink:            "#16243C",   // dark blue-charcoal — primary text (stays in blue family)
        muted:          "#6B7488",   // cool mid-grey — secondary text
        accent:         "#21457E",   // deep, serious blue — used sparingly
        "accent-warm":  "#16335E",   // darker blue — hover/active
        "accent-soft":  "#E6E2D6",   // warm neutral tint (no blue chips)
        amber:          "#21457E",   // alias for compat
        border:         "#E1DCCF",   // warm hairline
        "border-strong":"#D4CEBD",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial: large but calm — generous line-height, near-zero tracking
        "display-xl": ["clamp(2.5rem,5.2vw,4.5rem)",   { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(1.9rem,3.6vw,2.9rem)",   { lineHeight: "1.14", letterSpacing: "-0.005em" }],
        "display-md": ["clamp(1.5rem,2.6vw,2.1rem)",   { lineHeight: "1.2",  letterSpacing: "0" }],
      },
      boxShadow: {
        // Restraint: hairlines and whitespace over shadows. Whisper only.
        card:         "0 1px 2px rgba(22,36,60,0.04)",
        "card-hover": "0 1px 2px rgba(22,36,60,0.05)",
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
