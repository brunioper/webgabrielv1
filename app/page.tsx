import type { Metadata } from "next";
import Link from "next/link";
import HeroVisual from "@/components/hero-visual";
import StatsBand from "@/components/stats-band";
import MethodologyTimeline from "@/components/methodology-timeline";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    absolute: "Investigación de mercado en Uruguay | Estudios e insights para empresas",
  },
  description:
    "Consultora de investigación de mercado en Uruguay. Estudios prontos, estudios ad hoc y consultoría estratégica para tomar decisiones con datos reales.",
  openGraph: {
    title: "Investigación de mercado en Uruguay | Estudios e insights para empresas",
    description: "Estudios de mercado prontos y a medida, consultoría estratégica basada en datos. Montevideo, Uruguay.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBand />
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
      {/* Deep radial glow — right column */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 70% at 75% 50%, rgba(41,82,203,0.18) 0%, transparent 70%)",
      }} />
      {/* Faint upper-left warmth */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 30% at 10% 15%, rgba(41,82,203,0.06) 0%, transparent 65%)",
      }} />
      {/* Dot grid — masked to right column */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 70% 50%, black 15%, transparent 70%)",
        maskImage: "radial-gradient(ellipse 75% 65% at 70% 50%, black 15%, transparent 70%)",
      }} />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center relative z-10">
        <div className="max-w-lg">
          {/* Editorial label — line + text, no pill */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-accent" />
            <span className="text-[11px] font-semibold text-muted tracking-[0.22em] uppercase">
              Montevideo, Uruguay
            </span>
          </div>

          <h1 className="font-display font-bold text-display-xl text-ink mb-7 leading-[1.06]">
            Investigación de mercado{" "}
            <em style={{
              fontStyle: "italic",
              backgroundImage: "linear-gradient(135deg, #6B8FFF 0%, #2952CB 65%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              con datos reales.
            </em>
          </h1>

          <p className="text-base md:text-lg text-muted leading-[1.72] max-w-[420px] mb-10">
            Ayudamos a empresas, agencias y PyMEs a entender mejor a sus
            consumidores a través de estudios prontos, investigaciones a medida
            y consultoría estratégica basada en información.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/contacto" className="btn-primary">Solicitar un estudio</Link>
            <Link href="/servicios" className="btn-secondary">Ver servicios</Link>
          </div>

          {/* Services — inline text, no pills */}
          <div className="flex items-center gap-0 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {["Estudios prontos", "Estudios ad hoc", "Consultoría estratégica"].map((s, i) => (
              <span key={s} className="flex items-center">
                <span className="text-[11px] text-muted/50 tracking-wide">{s}</span>
                {i < 2 && <span className="mx-3 text-muted/20 text-xs">·</span>}
              </span>
            ))}
          </div>
        </div>

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

const badges = [
  "Metodología propia",
  "Datos primarios",
  "GDPR-ready",
  "Confidencialidad garantizada",
];

function TrustSection() {
  return (
    <section className="bg-sand py-16 section-divider-top section-divider-bottom" aria-label="Por qué elegirnos">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {trustItems.map((item) => (
              <div key={item.label} className="glass-card rounded-sm p-6 flex gap-4 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(41,82,203,0.14)", color: "#2952CB" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink mb-1.5">{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {badges.map((b) => (
              <div key={b}
                className="badge-cert flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-medium text-muted/60 transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="w-1 h-1 rounded-full bg-current flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
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
    headerSvg: <ScatterSVG />,
  },
  {
    number: "02",
    icon: <IconStrategy />,
    title: "Consultoría estratégica",
    body: "Basados en insights de investigación, trabajamos junto a la empresa para convertir datos en accionables concretos.",
    bullets: ["Estrategia comercial", "Posicionamiento", "Go-to-market", "Pricing", "Análisis competitivo"],
    cta: "Coordinar una consulta",
    ctaHref: "/contacto",
    headerSvg: <MatrixSVG />,
  },
  {
    number: "03",
    icon: <IconData />,
    title: "Estudios para empresas",
    body: "Soluciones flexibles para empresas que necesitan información clara, rápida y adaptada a sus objetivos.",
    bullets: ["Estudios prontos", "Estudios ad hoc", "Reportes ejecutivos", "Presentaciones para dirección", "Recomendaciones accionables"],
    cta: "Solicitar un estudio",
    ctaHref: "/contacto",
    headerSvg: <DocumentSVG />,
  },
];

function ServicesSection() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-14">
          <p className="section-label mb-3">Servicios</p>
          <h2 className="font-display font-bold text-display-lg text-ink">¿En qué trabajamos?</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1} className="flex flex-col">
              <div className="service-card-v2 group flex flex-col flex-1 rounded-sm overflow-hidden hover:-translate-y-1">
                <div className="h-[110px] overflow-hidden flex items-center justify-center relative"
                  style={{ background: "rgba(9,10,20,0.85)", borderBottom: "1px solid rgba(41,82,203,0.12)" }}>
                  {s.headerSvg}
                  <span className="absolute top-3 right-4 text-4xl font-bold tabular-nums leading-none"
                    style={{
                      backgroundImage: "linear-gradient(135deg, rgba(41,82,203,0.22) 0%, rgba(107,143,255,0.08) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {s.number}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center text-accent transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(41,82,203,0.14)" }}>
                      {s.icon}
                    </div>
                    <h3 className="font-display font-semibold text-base text-ink leading-snug">{s.title}</h3>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-5">{s.body}</p>

                  <ul className="space-y-2 mb-0 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-accent/40 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <Link href={s.ctaHref}
                      className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all duration-200">
                      {s.cta} <span>→</span>
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

function ScatterSVG() {
  return (
    <svg viewBox="0 0 240 110" fill="none" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
      {[0,1,2,3].map(i => (
        <line key={i} x1="20" y1={15 + i * 22} x2="220" y2={15 + i * 22} stroke="#2952CB" strokeWidth="0.4" strokeOpacity="0.25" />
      ))}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={20 + i * 50} y1="10" x2={20 + i * 50} y2="100" stroke="#2952CB" strokeWidth="0.4" strokeOpacity="0.2" />
      ))}
      <circle cx="48"  cy="82" r="5" fill="#2952CB" opacity="0.7" />
      <circle cx="78"  cy="62" r="6" fill="#6B8FFF" opacity="0.6" />
      <circle cx="108" cy="72" r="4" fill="#2952CB" opacity="0.55" />
      <circle cx="135" cy="44" r="7" fill="#6B8FFF" opacity="0.55" />
      <circle cx="162" cy="54" r="5" fill="#2952CB" opacity="0.7" />
      <circle cx="192" cy="32" r="6" fill="#6B8FFF" opacity="0.65" />
      <circle cx="90"  cy="88" r="3" fill="#2952CB" opacity="0.45" />
      <circle cx="175" cy="68" r="4" fill="#5B7EE8" opacity="0.5" />
      <line x1="40" y1="92" x2="205" y2="24" stroke="#6B8FFF" strokeWidth="1" strokeDasharray="5 4" strokeOpacity="0.4" />
    </svg>
  );
}

function MatrixSVG() {
  return (
    <svg viewBox="0 0 240 110" fill="none" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="95" x2="215" y2="95" stroke="#2952CB" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="20" y1="10" x2="20"  y2="100" stroke="#2952CB" strokeWidth="1" strokeOpacity="0.4" />
      <polygon points="215,92 220,95 215,98" fill="#2952CB" opacity="0.4" />
      <polygon points="17,10 20,5 23,10"    fill="#2952CB" opacity="0.4" />
      <line x1="117" y1="10" x2="117" y2="95" stroke="#2952CB" strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.2" />
      <line x1="20" y1="52" x2="215" y2="52" stroke="#2952CB" strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.2" />
      <circle cx="162" cy="26" r="16" fill="rgba(41,82,203,0.12)" stroke="#6B8FFF" strokeWidth="1" strokeOpacity="0.55" />
      <circle cx="162" cy="26" r="6"  fill="#6B8FFF" opacity="0.65" />
      <circle cx="58"  cy="74" r="10" fill="rgba(41,82,203,0.15)" stroke="#2952CB" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="160" cy="74" r="12" fill="rgba(41,82,203,0.1)"  stroke="#2952CB" strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="62"  cy="30" r="8"  fill="rgba(41,82,203,0.08)" stroke="#2952CB" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M88 68 Q110 48 138 32" stroke="#6B8FFF" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <polygon points="134,29 142,30 138,37" fill="#6B8FFF" opacity="0.5" />
    </svg>
  );
}

function DocumentSVG() {
  return (
    <svg viewBox="0 0 240 110" fill="none" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
      <rect x="75"  y="55" width="110" height="52" rx="2" fill="rgba(41,82,203,0.07)" stroke="#2952CB" strokeWidth="0.7" strokeOpacity="0.3" />
      <rect x="63"  y="42" width="110" height="52" rx="2" fill="rgba(41,82,203,0.1)"  stroke="#2952CB" strokeWidth="0.7" strokeOpacity="0.4" />
      <rect x="50"  y="28" width="110" height="52" rx="2" fill="rgba(7,8,16,0.95)"    stroke="#2952CB" strokeWidth="1"   strokeOpacity="0.6" />
      <line x1="64" y1="44" x2="146" y2="44" stroke="#6B8FFF" strokeWidth="1"   strokeOpacity="0.6" />
      <line x1="64" y1="55" x2="138" y2="55" stroke="#2952CB" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="64" y1="64" x2="142" y2="64" stroke="#2952CB" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="64" y1="73" x2="120" y2="73" stroke="#2952CB" strokeWidth="0.8" strokeOpacity="0.25" />
      <circle cx="148" cy="57" r="13" fill="rgba(41,82,203,0.18)" stroke="#6B8FFF" strokeWidth="1" strokeOpacity="0.65" />
      <polyline points="142,57 146,62 156,51" stroke="#6B8FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
    </svg>
  );
}

function IconResearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
      <line x1="8" y1="11" x2="14" y2="11" /><line x1="11" y1="8" x2="11" y2="14" />
    </svg>
  );
}
function IconStrategy() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function IconData() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="9" x2="9" y2="21" />
    </svg>
  );
}

// ─── 4. Studies teaser ────────────────────────────────────────────

function StudiesSection() {
  return (
    <section className="bg-sand py-20 md:py-28 section-divider-top section-divider-bottom">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-12">
          <p className="section-label mb-3">Estudios</p>
          <h2 className="font-display font-bold text-display-lg text-ink">Dos formas de investigar mejor</h2>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 z-10">
            <div className="h-px w-full" style={{ borderTop: "1px dashed rgba(41,82,203,0.4)" }} />
          </div>

          {[
            {
              tag: "Estudios prontos",
              badge: "Disponible hoy",
              badgeColor: "#6B8FFF",
              accentBorder: "#6B8FFF",
              title: "Información disponible hoy",
              body: "Estudios prearmados sobre temas relevantes para empresas, agencias y marcas. Ideales para generar contenido, detectar oportunidades y ganar velocidad.",
              bullets: ["Temas predefinidos", "Rápida disponibilidad", "Costo accesible", "Útiles para contenido y estrategia"],
              cta: "Ver estudios disponibles",
              href: "/estudios",
            },
            {
              tag: "Estudios ad hoc",
              badge: "A tu medida",
              badgeColor: "#2952CB",
              accentBorder: "#2952CB",
              title: "Investigación a tu medida",
              body: "Diseñamos el estudio según tus objetivos, preguntas, segmentos y decisiones. Cada proyecto empieza por entender qué necesitás resolver.",
              bullets: ["Diseño personalizado", "Preguntas a medida", "Segmentación según objetivo", "Recomendaciones finales"],
              cta: "Solicitar un estudio",
              href: "/contacto",
            },
          ].map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.1}>
              <div
                className="rounded-sm overflow-hidden h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover relative"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: `3px solid ${card.accentBorder}`,
                }}
              >
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                    style={{
                      background: card.badgeColor + "18",
                      border: `1px solid ${card.badgeColor}55`,
                      color: card.badgeColor,
                    }}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="p-8 pt-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block"
                    style={{ color: card.accentBorder }}>
                    {card.tag}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-5">{card.body}</p>
                  <ul className="space-y-2 mb-7">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: card.accentBorder + "99" }} />
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
            <div className="relative">
              <span className="absolute -left-6 -top-4 text-8xl font-bold leading-none pointer-events-none select-none"
                style={{ color: "rgba(41,82,203,0.1)", fontFamily: "Georgia, serif" }}>
                [
              </span>
              <p className="section-label mb-3 relative z-10">Nuestra diferencia</p>
              <h2 className="font-display font-bold text-display-lg text-ink mb-6 leading-tight relative z-10">
                Una forma más accesible de investigar en Uruguay
              </h2>
              <p className="text-base text-muted leading-relaxed mb-6 relative z-10">
                Muchas empresas necesitan información confiable para decidir, pero
                los estudios tradicionales suelen ser lentos, costosos o poco
                adaptados a la escala de PyMEs, agencias y startups.
              </p>
              <p className="text-base text-muted leading-relaxed relative z-10">
                Combinamos metodología, conocimiento local y enfoque estratégico
                para entregar estudios concretos, entendibles y accionables.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="rounded-sm p-6 relative overflow-hidden"
                style={{
                  background: "rgba(255,107,107,0.04)",
                  border: "1px solid rgba(255,107,107,0.25)",
                }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base" aria-hidden="true">⚠</span>
                  <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(255,107,107,0.8)" }}>
                    Brecha identificada
                  </p>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  El mercado necesita soluciones de investigación más ágiles y accesibles para empresas que quieren decidir con datos, sin grandes presupuestos ni equipos internos.
                </p>
              </div>

              <div className="rounded-sm p-6 relative overflow-hidden"
                style={{
                  background: "rgba(41,82,203,0.05)",
                  border: "1px solid rgba(41,82,203,0.25)",
                }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base" aria-hidden="true">✓</span>
                  <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(41,82,203,0.8)" }}>
                    Nuestra ventaja
                  </p>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Metodología probada, enfoque local y entregables pensados para ser usados, no archivados.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Methodology preview ───────────────────────────────────────

const methodologySteps = [
  { n: "01", label: "Entendemos la decisión" },
  { n: "02", label: "Diseñamos el estudio" },
  { n: "03", label: "Ejecutamos el relevamiento" },
  { n: "04", label: "Analizamos resultados" },
  { n: "05", label: "Construimos recomendaciones" },
  { n: "06", label: "Acompañamos la decisión" },
];

function MethodologySection() {
  return (
    <section className="bg-sand py-20 md:py-28 section-divider-top section-divider-bottom">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-label mb-3">Proceso</p>
            <h2 className="font-display font-bold text-display-lg text-ink">Nuestra metodología</h2>
          </div>
          <Link href="/metodologia" className="text-sm font-semibold text-accent hover:underline underline-offset-4 transition-all self-start md:self-auto">
            Ver metodología completa →
          </Link>
        </Reveal>

        <MethodologyTimeline steps={methodologySteps} />
      </div>
    </section>
  );
}

// ─── 7. Final CTA ─────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060810 0%, #0D1430 50%, #060810 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 75% 65% at 50% 110%, rgba(41,82,203,0.4) 0%, transparent 65%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(41,82,203,0.06) 0%, transparent 70%)",
      }} />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent 0%, rgba(41,82,203,0.5) 50%, transparent 100%)" }} />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-5 h-px bg-white/20" />
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.22em]">¿Trabajamos juntos?</p>
            <div className="w-5 h-px bg-white/20" />
          </div>
          <h2 className="font-display font-bold text-display-lg text-white mb-6 leading-tight">
            ¿Querés tomar mejores decisiones{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #6B8FFF 0%, #2952CB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              con información real?
            </span>
          </h2>
          <p className="text-white/60 text-base mb-10 leading-relaxed max-w-md mx-auto">
            Contanos qué necesitás investigar y te ayudamos a definir el mejor tipo de estudio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto" className="btn-ghost">Solicitar un estudio</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-light">
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
