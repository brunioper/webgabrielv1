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
        bg:             "#07080F",   // cool near-black — hero, page bg
        sand:           "#0B0D1C",   // cool dark — alternate sections
        surface:        "#10122A",   // elevated card surfaces
        deep:           "#050609",   // footer
        ink:            "#E4ECFF",   // cool off-white — primary text
        muted:          "#7080A0",   // cool grey-blue — secondary text
        accent:         "#3D6BF5",   // electric blue — signature accent
        "accent-warm":  "#7BA4FF",   // ice blue — data highlights
        amber:          "#7BA4FF",   // alias for inline use
        border:         "#1A1D30",   // cool subtle border
        "border-strong":"#252840",
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
        glow:         "0 0 40px rgba(61,107,245,0.25)",
        "glow-warm":  "0 0 20px rgba(61,107,245,0.4)",
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
