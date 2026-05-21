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
        bg:             "#071A33",   // deep navy — main bg
        sand:           "#0B2345",   // slightly lighter navy — section bg
        deep:           "#040E1C",   // darkest navy — footer
        ink:            "#F7FAFC",   // near-white — primary text
        muted:          "#AAB8C8",   // muted blue-grey — secondary text
        accent:         "#2E7DC8",   // core blue
        "accent-light": "#1A3A5C",  // dark blue fill — hover states
        "blue-light":   "#5AA9FF",  // bright blue — hover glows
        cyan:           "#6EE7F9",  // cyan — data accents, sparklines
        border:         "#0F2847",  // subtle border on dark bg
        "border-strong":"#1A3A6A",
      },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem,6vw,5.25rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem,4vw,3.25rem)",    { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.65rem,3vw,2.35rem)", { lineHeight: "1.14", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card:         "0 1px 3px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.18)",
        "card-hover": "0 8px 28px -6px rgba(0,0,0,0.5), 0 2px 8px -4px rgba(0,0,0,0.3)",
        premium:      "0 20px 60px -16px rgba(0,0,0,0.6)",
        glow:         "0 0 40px rgba(46,125,200,0.2)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.025em",
        tight:    "-0.015em",
        widest:   "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
