import type { Metadata } from "next";
import Link from "next/link";
import HeroVisual from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Investigación de mercado en Uruguay | Estudios e insights para empresas",
  },
  description:
    "Consultora de investigación de mercado en Uruguay. Estudios prontos, estudios ad hoc y consultoría estratégica para tomar decisiones con datos reales.",
  openGraph: {
    title: "Investigación de mercado en Uruguay | Estudios e insights para empresas",
    description:
      "Estudios de mercado prontos y a medida, consultoría estratégica basada en datos. Montevideo, Uruguay.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <StudiesSection />
      <AdvantageSection />
      <MethodologySection />
      <CtaSection />
    </>
  );
}

// ─── 1. Hero ──────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-bg py-24 md:py-0 relative overflow-hidden">
      {/* Primary radial glow — right side, behind visual */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 72% 50%, rgba(46,125,200,0.16) 0%, transparent 70%)",
        }}
      />
      {/* Secondary glow — top left, cyan tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 15% 20%, rgba(110,231,249,0.05) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid — fades toward the visual column */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 65% 50%, black 20%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 65% 50%, black 20%, transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center relative z-10">
        {/* Text column */}
        <div className="max-w-lg">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(46,125,200,0.12)", border: "1px solid rgba(46,125,200,0.25)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan/80 flex-shrink-0" />
            <p className="text-[10px] font-semibold text-cyan/80 uppercase tracking-[0.2em]">
              Montevideo, Uruguay
            </p>
          </div>

          <h1 className="font-display font-bold text-display-xl text-ink mb-6 leading-[1.08]">
            Investigación de mercado en Uruguay{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6EE7F9 0%, #5AA9FF 55%, #2E7DC8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              con datos reales.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted leading-[1.7] max-w-md mb-10">
            Ayudamos a empresas, agencias y PyMEs a entender mejor a sus
            consumidores a través de estudios prontos, investigaciones a medida
            y consultoría estratégica basada en información.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar un estudio
            </Link>
            <Link href="/servicios" className="btn-secondary">
              Ver servicios
            </Link>
          </div>

          {/* Service tags */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-9 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {["Estudios prontos", "Estudios ad hoc", "Consultoría estratégica"].map((s) => (
              <span key={s} className="flex items-center gap-2 text-xs text-muted/70">
                <span className="w-1 h-1 rounded-full bg-cyan/50 flex-shrink-0" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div className="hidden md:flex justify-center items-center">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

// ─── 2. Trust signals ─────────────────────────────────────────────

const trustItems = [
  {
    icon: <IconDatabase />,
    label: "Datos reales, no supuestos",
    desc: "Trabajamos sobre información concreta del mercado uruguayo para reducir incertidumbre en cada decisión.",
  },
  {
    icon: <IconTarget />,
    label: "Insights accionables",
    desc: "Cada estudio termina con recomendaciones claras. El análisis es el inicio, la acción es el objetivo.",
  },
  {
    icon: <IconLayers />,
    label: "Adaptado a tu escala",
    desc: "Soluciones pensadas para empresas que necesitan información de calidad sin procesos lentos ni costos de grandes consultoras.",
  },
];

function TrustSection() {
  return (
    <section className="bg-sand py-16 border-y border-border" aria-label="Por qué elegirnos">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-sm p-6 flex gap-4 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(46,125,200,0.14)", color: "#6EE7F9" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink mb-1.5">{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Trust icons ──────────────────────────────────────────────────

function IconDatabase() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

// ─── 3. Services ──────────────────────────────────────────────────

const services = [
  {
    number: "01",
    icon: <IconResearch />,
    title: "Investigación de mercado",
    body: "Diseñamos estudios para entender consumidores, mercados, categorías, oportunidades y decisiones de compra.",
    bullets: ["Encuestas online", "Estudios de opinión", "Análisis de consumidores", "Segmentación de mercado", "Medición de percepción de marca"],
    cta: "Ver estudios disponibles",
    ctaHref: "/estudios",
  },
  {
    number: "02",
    icon: <IconStrategy />,
    title: "Consultoría estratégica",
    body: "Basados en insights de investigación, trabajamos junto a la empresa para convertir datos en accionables concretos.",
    bullets: ["Estrategia comercial", "Posicionamiento", "Go-to-market", "Pricing", "Análisis competitivo"],
    cta: "Coordinar una consulta",
    ctaHref: "/contacto",
  },
  {
    number: "03",
    icon: <IconData />,
    title: "Estudios para empresas",
    body: "Soluciones flexibles para empresas que necesitan información clara, rápida y adaptada a sus objetivos.",
    bullets: ["Estudios prontos", "Estudios ad hoc", "Reportes ejecutivos", "Presentaciones para dirección", "Recomendaciones accionables"],
    cta: "Solicitar un estudio",
    ctaHref: "/contacto",
  },
];

function ServicesSection() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-14">
          <p className="section-label mb-4">Servicios</p>
          <h2 className="font-display font-bold text-display-lg text-ink">
            ¿En qué trabajamos?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1} className="flex flex-col">
              <div className="service-card group flex flex-col flex-1 rounded-sm hover:-translate-y-1 hover:shadow-card-hover">
                <div className="h-[2px] rounded-t-sm" style={{ background: "linear-gradient(to right, #6EE7F9, #2E7DC8, rgba(46,125,200,0.2))" }} />

                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center text-cyan
                                  transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(46,125,200,0.14)" }}
                    >
                      {s.icon}
                    </div>
                    <span
                      className="font-bold text-3xl leading-none mt-0.5 tabular-nums"
                      style={{
                        backgroundImage: "linear-gradient(135deg, rgba(46,125,200,0.25) 0%, rgba(110,231,249,0.12) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.number}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl text-ink mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{s.body}</p>

                  <ul className="space-y-2 mb-0 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-cyan/40 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <Link
                      href={s.ctaHref}
                      className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-cyan transition-colors duration-200"
                    >
                      {s.cta}
                      <span className="transition-transform duration-300 group-hover/cta:translate-x-1.5">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-end">
          <Link href="/servicios" className="text-sm font-medium text-muted hover:text-ink transition-colors">
            Ver todos los servicios →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Service icons ────────────────────────────────────────────────

function IconResearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="11" y1="8" x2="11" y2="14" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconData() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="9" x2="9" y2="21" />
    </svg>
  );
}

// ─── 4. Studies teaser ────────────────────────────────────────────

function StudiesSection() {
  return (
    <section className="bg-sand py-20 md:py-28 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-12">
          <p className="section-label mb-4">Estudios</p>
          <h2 className="font-display font-bold text-display-lg text-ink">
            Dos formas de investigar mejor
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              tag: "Estudios prontos",
              title: "Información disponible hoy",
              body: "Estudios prearmados sobre temas relevantes para empresas, agencias y marcas. Ideales para generar contenido, detectar oportunidades y ganar velocidad.",
              bullets: ["Temas predefinidos", "Rápida disponibilidad", "Costo accesible", "Útiles para contenido y estrategia"],
              cta: "Ver estudios disponibles",
              href: "/estudios",
              accent: "#6EE7F9",
            },
            {
              tag: "Estudios ad hoc",
              title: "Investigación a tu medida",
              body: "Diseñamos el estudio según tus objetivos, preguntas, segmentos y decisiones. Cada proyecto empieza por entender qué necesitás resolver.",
              bullets: ["Diseño personalizado", "Preguntas a medida", "Segmentación según objetivo", "Recomendaciones finales"],
              cta: "Solicitar un estudio",
              href: "/contacto",
              accent: "#2E7DC8",
            },
          ].map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.1}>
              <div
                className="rounded-sm overflow-hidden h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="h-[2px]" style={{ background: `linear-gradient(to right, ${card.accent}, transparent)` }} />
                <div className="p-8">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block"
                    style={{ color: card.accent }}
                  >
                    {card.tag}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{card.body}</p>
                  <ul className="space-y-2 mb-7">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: card.accent + "99" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={card.href} className="link-arrow hover:gap-3">
                    {card.cta} <span className="transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Competitive advantage ─────────────────────────────────────

function AdvantageSection() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <p className="section-label mb-4">Nuestra diferencia</p>
            <h2 className="font-display font-bold text-display-lg text-ink mb-6 leading-tight">
              Una forma más accesible de investigar en Uruguay
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Muchas empresas necesitan información confiable para decidir, pero
              los estudios tradicionales suelen ser lentos, costosos o poco
              adaptados a la escala de PyMEs, agencias y startups.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Combinamos metodología, conocimiento local y enfoque estratégico
              para entregar estudios concretos, entendibles y accionables.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                { label: "Brecha identificada", body: "El mercado necesita soluciones de investigación más ágiles y accesibles para empresas que quieren decidir con datos, sin grandes presupuestos ni equipos internos." },
                { label: "Nuestra ventaja", body: "Metodología probada, enfoque local y entregables pensados para ser usados, no archivados." },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="rounded-sm p-6 relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* Subtle left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-sm"
                    style={{
                      background: i === 0
                        ? "linear-gradient(to bottom, rgba(110,231,249,0.6), rgba(46,125,200,0.4))"
                        : "linear-gradient(to bottom, rgba(46,125,200,0.6), rgba(46,125,200,0.2))",
                    }}
                  />
                  <div className="pl-4">
                    <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-2">{item.label}</p>
                    <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Methodology preview ───────────────────────────────────────

const steps = [
  { n: "01", label: "Entendemos la decisión" },
  { n: "02", label: "Diseñamos el estudio" },
  { n: "03", label: "Ejecutamos el relevamiento" },
  { n: "04", label: "Analizamos resultados" },
  { n: "05", label: "Construimos recomendaciones" },
  { n: "06", label: "Acompañamos la decisión" },
];

function MethodologySection() {
  return (
    <section className="bg-sand py-20 md:py-28 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-label mb-4">Proceso</p>
            <h2 className="font-display font-bold text-display-lg text-ink">
              Nuestra metodología
            </h2>
          </div>
          <Link href="/metodologia" className="text-sm font-semibold text-accent hover:underline underline-offset-4 transition-all self-start md:self-auto">
            Ver metodología completa →
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div
                className="relative flex flex-col h-full rounded-sm p-5 transition-all duration-300 hover:-translate-y-0.5 group"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Numbered circle with gradient border */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                  style={{
                    background: "rgba(46,125,200,0.12)",
                    border: "1px solid rgba(46,125,200,0.3)",
                  }}
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: "#6EE7F9" }}
                  >
                    {s.n}
                  </span>
                </div>
                <p className="text-sm font-medium text-ink leading-snug">{s.label}</p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[30px] -right-[8px] w-4 h-px z-10"
                    style={{ background: "rgba(46,125,200,0.25)" }} />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. Final CTA ─────────────────────────────────────────────────

function CtaSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0B1F40 0%, #163868 45%, #0B2040 100%)",
      }}
    >
      {/* Radial glow — bottom center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 110%, rgba(46,125,200,0.35) 0%, transparent 65%)",
        }}
      />
      {/* Cyan accent glow — top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(110,231,249,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Top border gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(110,231,249,0.5) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-5 h-px bg-white/20" />
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.22em]">¿Trabajamos juntos?</p>
            <div className="w-5 h-px bg-white/20" />
          </div>

          <h2 className="font-display font-bold text-display-lg text-white mb-6 leading-tight">
            ¿Querés tomar mejores decisiones{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #6EE7F9 0%, #5AA9FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              con información real?
            </span>
          </h2>
          <p className="text-white/60 text-base mb-10 leading-relaxed max-w-md mx-auto">
            Contanos qué necesitás investigar y te ayudamos a definir el mejor tipo de estudio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto" className="btn-ghost">
              Solicitar un estudio
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <WhatsAppIcon />
              WhatsApp directo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
