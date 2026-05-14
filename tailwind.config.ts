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
        bg: "#F8F7F4",
        sand: "#F0EDE6",
        ink: "#1C1C2E",
        muted: "#6B6B7A",
        accent: "#1B3A6E",
        "accent-light": "#E5EEF8",
        border: "#E2DDD8",
        "border-strong": "#C8C3BC",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display sizes — tight letter-spacing, generous line-height
        "display-xl": ["clamp(2.75rem,6vw,5.25rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem,4vw,3.25rem)",    { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.65rem,3vw,2.35rem)", { lineHeight: "1.14", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card:       "0 1px 3px rgba(28,28,46,0.04), 0 1px 2px rgba(28,28,46,0.03)",
        "card-hover": "0 8px 28px -6px rgba(28,28,46,0.1), 0 2px 8px -4px rgba(28,28,46,0.05)",
        premium:    "0 20px 60px -16px rgba(28,28,46,0.14)",
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
