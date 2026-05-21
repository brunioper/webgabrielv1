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
        bg:             "#0C0A09",   // warm near-black — hero, page bg
        sand:           "#111009",   // warm dark — alternate sections
        surface:        "#1A1710",   // elevated card surfaces
        deep:           "#070504",   // footer
        ink:            "#EEE5D8",   // warm cream — primary text
        muted:          "#8A7A6C",   // warm grey — secondary text
        accent:         "#CB7B35",   // amber copper — signature accent
        "accent-warm":  "#E8B45A",   // lighter gold — data highlights
        amber:          "#E8B45A",   // alias for inline use
        border:         "#252018",   // warm subtle border
        "border-strong":"#3A2F24",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem,6vw,5rem)",   { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3.25rem)",   { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.65rem,3vw,2.25rem)",{ lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card:         "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 32px -6px rgba(0,0,0,0.6), 0 2px 8px -4px rgba(0,0,0,0.4)",
        glow:         "0 0 40px rgba(203,123,53,0.25)",
        "glow-warm":  "0 0 20px rgba(203,123,53,0.4)",
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
