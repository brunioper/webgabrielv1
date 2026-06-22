"use client";

import { useEffect, useState } from "react";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Sync icon to the theme the no-flash script already applied
  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));

    // Follow the device until the user makes an explicit choice
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      applyTheme(e.matches);
      setDark(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    applyTheme(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted && dark ? "Activar modo claro" : "Activar modo oscuro"}
      aria-pressed={mounted ? dark : undefined}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-[2px] text-muted
                  hover:text-ink transition-colors ${className}`}
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      <span suppressHydrationWarning>
        {mounted && dark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}
