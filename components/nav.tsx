"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND, WHATSAPP_URL } from "@/lib/config";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/estudios", label: "Estudios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-ink tracking-tight text-lg leading-none"
        >
          {BRAND.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={path === l.href ? "page" : undefined}
              className={`text-sm transition-colors ${
                path === l.href
                  ? "text-ink font-medium"
                  : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            WhatsApp
          </a>
          <Link
            href="/contacto"
            className="text-sm bg-accent text-white px-4 py-2 rounded-sm hover:bg-accent/90 transition-colors"
          >
            Solicitar consulta
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-px bg-ink origin-center transition-transform duration-200 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink origin-center transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — visibility:hidden prevents keyboard focus when collapsed */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen visible" : "max-h-0 invisible"
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Navegación móvil"
          className="bg-bg border-t border-border px-6 pt-4 pb-6 flex flex-col gap-1"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={path === l.href ? "page" : undefined}
              className={`py-2.5 text-sm border-b border-border/50 transition-colors ${
                path === l.href ? "text-ink font-medium" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-4 text-sm bg-accent text-white px-4 py-3 rounded-sm text-center"
          >
            Solicitar consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}
