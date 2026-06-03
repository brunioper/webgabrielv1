"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND, WHATSAPP_URL } from "@/lib/config";

const links = [
  { href: "/",            label: "Inicio" },
  { href: "/nosotros",    label: "Nosotros" },
  { href: "/servicios",   label: "Servicios", hasDropdown: true },
  { href: "/estudios",    label: "Estudios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/aliados",     label: "Aliados" },
  { href: "/clientes",    label: "Clientes" },
  { href: "/contacto",    label: "Contacto" },
];

const serviceItems = [
  {
    href: "/servicios",
    label: "Investigación de mercado",
    desc: "Estudios para entender consumidores y mercados",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
        <line x1="8" y1="11" x2="14" y2="11" /><line x1="11" y1="8" x2="11" y2="14" />
      </svg>
    ),
  },
  {
    href: "/servicios",
    label: "Consultoría estratégica",
    desc: "Insights convertidos en accionables concretos",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    href: "/estudios",
    label: "Estudios para empresas",
    desc: "Prontos y ad hoc, según tu objetivo",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="9" x2="9" y2="21" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md section-divider-bottom">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-ink tracking-tight text-lg leading-none"
        >
          {BRAND.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6">
          {links.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {/* Link navigates; chevron signals dropdown */}
                <Link
                  href={l.href}
                  aria-current={path === l.href ? "page" : undefined}
                  className={`relative text-sm transition-colors pb-0.5 flex items-center gap-1 ${
                    path.startsWith("/servicios")
                      ? "text-ink font-medium"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  </svg>
                  {path.startsWith("/servicios") && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: "linear-gradient(to right, #2952CB, #1E40A6)" }}
                    />
                  )}
                </Link>

                {/* Invisible hover bridge — fills the gap so dropdown doesn't close mid-move */}
                <div className="absolute top-full h-3 left-0 right-0" />

                {/* Mega dropdown */}
                {servicesOpen && (
                  <div
                    className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-80 rounded-lg overflow-hidden z-50"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E5E8F0",
                      boxShadow: "0 24px 60px -16px rgba(20,23,31,0.22)",
                    }}
                  >
                    <div className="h-px" style={{ background: "linear-gradient(to right, #2952CB, #1E40A6, transparent)" }} />
                    <div className="p-2">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 px-4 py-3 rounded-md hover:bg-sand transition-colors group"
                        >
                          <div
                            className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 text-accent transition-colors group-hover:bg-accent/10"
                            style={{ background: "#EAEFFB" }}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-ink">{item.label}</p>
                            <p className="text-[10px] text-muted mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                aria-current={path === l.href ? "page" : undefined}
                className={`relative text-sm transition-colors pb-0.5 ${
                  path === l.href
                    ? "text-ink font-medium"
                    : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
                {path === l.href && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(to right, #2952CB, #1E40A6)" }}
                  />
                )}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
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
            className="text-sm bg-accent text-white px-4 py-2 rounded-sm transition-all duration-200
                       hover:bg-accent-warm hover:shadow-[0_0_20px_rgba(41,82,203,0.4)]"
          >
            Solicitar estudio
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className={`block w-5 h-px bg-ink origin-center transition-transform duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-ink origin-center transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen visible" : "max-h-0 invisible"}`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Navegación móvil"
          className="bg-bg section-divider-top px-6 pt-4 pb-6 flex flex-col gap-1"
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
            className="mt-4 text-sm bg-accent text-white px-4 py-3 rounded-sm text-center hover:bg-accent-warm transition-colors"
          >
            Solicitar estudio
          </Link>
        </nav>
      </div>
    </header>
  );
}
