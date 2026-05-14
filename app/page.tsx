import type { Metadata } from "next";
import Link from "next/link";
import HeroVisual from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Decisiones basadas en información | Consultoría, investigación y gestión",
  },
  description:
    "Investigación de mercado, consultoría estratégica comercial y de procesos, y gestión operativa para empresas y propiedades en Montevideo, Uruguay.",
  openGraph: {
    title:
      "Decisiones basadas en información | Consultoría, investigación y gestión",
    description:
      "Investigación de mercado, consultoría estratégica y gestión operativa para empresas y propiedades. Montevideo, Uruguay.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <TrustSignalsSection />
      <ServicesSection />
      <DifferentiatorSection />
      <AudienceSection />
      <MethodologySection />
      <CtaSection />
    </>
  );
}

// ─── 1. Hero ──────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-bg via-bg to-sand/40 py-24 md:py-0">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">

        {/* Text column */}
        <div className="max-w-lg">
          {/* Refined label with leading accent line */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-5 h-px bg-accent flex-shrink-0" />
            <p className="section-label">Montevideo, Uruguay</p>
          </div>

          <h1 className="font-display font-bold text-display-xl text-ink mb-6">
            Decisiones basadas en información.
          </h1>

          <p className="text-base md:text-lg text-muted leading-[1.7] max-w-md mb-10">
            Investigación de mercado, consultoría estratégica y gestión operativa
            para empresas y propiedades que necesitan entender, decidir y
            ejecutar con claridad.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar una consulta
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Escribir por WhatsApp
            </a>
          </div>

          {/* Social proof hint */}
          <p className="mt-7 text-xs text-muted/60 tracking-wide">
            Trabajamos con empresas y propietarios en Uruguay y la región.
          </p>
        </div>

        {/* Visual column */}
        <div className="hidden md:flex justify-center items-center">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

// ─── 2. Problem statement ─────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="bg-sand py-20 md:py-28 border-y border-border">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="section-label mb-8 justify-center flex items-center gap-2">
            <span className="block w-4 h-px bg-muted/50" />
            La realidad
            <span className="block w-4 h-px bg-muted/50" />
          </p>
          <p className="font-display font-bold text-display-md text-ink leading-snug mb-7">
            "No siempre faltan ideas. Muchas veces falta información
            clara, criterio para priorizar y capacidad de ejecución."
          </p>
          <div className="w-10 h-px bg-accent mx-auto mb-7" />
          <p className="text-base text-muted leading-relaxed max-w-xl mx-auto">
            Trabajamos para convertir preguntas de negocio en información útil,
            decisiones concretas y acciones bien enfocadas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 3. Trust signals ─────────────────────────────────────────────

const trustItems = [
  {
    label: "Información que se usa",
    desc: "Trabajamos sobre datos reales y preguntas concretas. No generamos reportes para el archivo.",
  },
  {
    label: "Análisis y ejecución",
    desc: "Integramos criterio de negocio con seguimiento operativo. El diagnóstico es el inicio, no el resultado.",
  },
  {
    label: "Adaptado a cada proyecto",
    desc: "Cada trabajo es distinto. Nos adaptamos a la necesidad, los plazos y el nivel de acompañamiento requerido.",
  },
];

function TrustSignalsSection() {
  return (
    <section className="bg-bg py-14 border-b border-border" aria-label="Cómo trabajamos">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-[3px] h-10 bg-accent/30 flex-shrink-0 mt-0.5 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">{item.label}</p>
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

// ─── 4. Services ──────────────────────────────────────────────────

const services = [
  {
    number: "01",
    icon: <IconResearch />,
    title: "Investigación de mercado",
    body: "Diseñamos herramientas para entender mejor al consumidor, el mercado y las oportunidades de negocio, combinando estudios disponibles y proyectos a medida.",
    bullets: ["Estudios prontos", "Investigaciones ad hoc"],
    cta: "Ver estudios disponibles",
    ctaHref: "/estudios",
  },
  {
    number: "02",
    icon: <IconStrategy />,
    title: "Consultoría estratégica, comercial y de procesos",
    body: "Acompañamos a empresas en la toma de decisiones, la mejora de procesos y la implementación de iniciativas clave, combinando análisis, criterio y foco en la acción.",
    bullets: [
      "Decisiones comerciales",
      "Pricing",
      "Análisis de clientes y segmentos",
      "Funnel de conversión",
      "Optimización de procesos",
      "Digitalización y automatización",
      "Uso aplicado de inteligencia artificial",
      "Liderazgo y seguimiento de proyectos",
    ],
    cta: "Coordinar una consulta",
    ctaHref: "/contacto",
  },
  {
    number: "03",
    icon: <IconOps />,
    title: "Gestión operativa y de propiedades",
    body: "Actuamos como una extensión de la operación, combinando gestión diaria, coordinación y apoyo en decisiones para asegurar el funcionamiento y mejorar el rendimiento.",
    bullets: [
      "Gestión operativa",
      "Coordinación de tareas",
      "Seguimiento de procesos",
      "Soporte administrativo",
      "Gestión de propiedades residenciales y comerciales",
      "Coordinación de proveedores",
      "Seguimiento de incidencias",
    ],
    cta: "WhatsApp directo",
    ctaHref: WHATSAPP_URL,
    ctaExternal: true,
  },
];

function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-14">
          <p className="section-label mb-4">Servicios</p>
          <h2 className="font-display font-bold text-display-lg text-ink">
            ¿En qué trabajamos?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.12} className="flex flex-col">
              <div className="group flex flex-col flex-1 bg-bg border border-border rounded-sm
                              transition-all duration-300
                              hover:-translate-y-1 hover:shadow-card-hover hover:border-accent/20 hover:bg-white">
                {/* Accent top line */}
                <div className="h-[2px] bg-accent rounded-t-sm" />

                <div className="p-7 md:p-8 flex flex-col flex-1">
                  {/* Icon + number row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-sm bg-accent-light flex items-center justify-center text-accent
                                    transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      {s.icon}
                    </div>
                    <span className="font-display text-2xl font-light text-border leading-none mt-1">
                      {s.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl text-ink mb-3 leading-snug">
                    {s.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm text-muted leading-relaxed mb-5">{s.body}</p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-0 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-accent/50 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA — separated by top border */}
                  <div className="mt-7 pt-5 border-t border-border">
                    {s.ctaExternal ? (
                      <a
                        href={s.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                      >
                        {s.cta}
                        <span className="transition-transform duration-300 group-hover/cta:translate-x-1.5">→</span>
                      </a>
                    ) : (
                      <Link
                        href={s.ctaHref}
                        className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                      >
                        {s.cta}
                        <span className="transition-transform duration-300 group-hover/cta:translate-x-1.5">→</span>
                      </Link>
                    )}
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconOps() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

// ─── 5. Differentiator — editorial numbered list ──────────────────

const differentiators = [
  "Información útil, no reportes teóricos sin aplicación.",
  "Enfoque en decisiones reales.",
  "Integración entre análisis y ejecución.",
  "Acompañamiento práctico, no solo diagnóstico.",
  "Uso aplicado de herramientas digitales e inteligencia artificial.",
];

function DifferentiatorSection() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading row with bottom divider */}
        <Reveal className="mb-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-10 border-b border-border">
            <div>
              <p className="section-label mb-4">Nuestra diferencia</p>
              <h2 className="font-display font-bold text-display-lg text-ink max-w-sm leading-tight">
                Una forma distinta de trabajar
              </h2>
            </div>
            <p className="text-sm text-muted mt-4 md:mt-0 max-w-xs leading-relaxed">
              No solo análisis — también ejecución. No solo diagnóstico — también acompañamiento.
            </p>
          </div>
        </Reveal>

        {/* Editorial numbered items */}
        <div>
          {differentiators.map((d, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-8 md:gap-16 py-7 border-b border-border group">
                <span className="font-display text-3xl md:text-4xl font-light text-border leading-none flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-accent/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg text-ink leading-relaxed pt-1.5">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Audience ──────────────────────────────────────────────────

const audience = [
  "Empresas en crecimiento",
  "Pymes",
  "Equipos comerciales",
  "Marcas que lanzan productos o servicios",
  "Negocios que necesitan ordenar su operación",
  "Propietarios",
  "Propiedades y activos comerciales",
];

function AudienceSection() {
  return (
    <section className="bg-sand py-20 md:py-28 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-10">
          <p className="section-label mb-4">Clientes</p>
          <h2 className="font-display font-bold text-display-lg text-ink">
            Para quién trabajamos
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5">
            {audience.map((a) => (
              <span
                key={a}
                className="px-5 py-2.5 bg-white border border-border rounded-full text-sm text-ink
                           transition-all duration-300 hover:border-accent/30 hover:text-accent cursor-default"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 7. Methodology preview ───────────────────────────────────────

const steps = [
  { n: "01", label: "Entendemos la necesidad" },
  { n: "02", label: "Ordenamos la pregunta" },
  { n: "03", label: "Analizamos información" },
  { n: "04", label: "Definimos conclusiones" },
  { n: "05", label: "Proponemos acciones" },
  { n: "06", label: "Acompañamos la ejecución" },
];

function MethodologySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-label mb-4">Proceso</p>
            <h2 className="font-display font-bold text-display-lg text-ink">
              Cómo trabajamos
            </h2>
          </div>
          <Link href="/metodologia" className="text-sm font-semibold text-accent hover:underline underline-offset-4 transition-all self-start md:self-auto">
            Ver metodología completa →
          </Link>
        </Reveal>

        {/* Steps grid — circle numbers, connecting lines on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="relative flex flex-col h-full bg-bg border border-border rounded-sm p-5
                              transition-all duration-300 hover:border-accent/30 hover:shadow-card hover:bg-white group">
                {/* Step circle */}
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center mb-4
                                transition-colors duration-300 group-hover:border-accent/40 flex-shrink-0">
                  <span className="text-[10px] font-bold text-muted">{s.n}</span>
                </div>
                <p className="text-sm font-medium text-ink leading-snug">{s.label}</p>

                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[30px] -right-[8px] w-4 h-px bg-border z-10" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. Final CTA ─────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-5 h-px bg-white/20" />
            <p className="section-label text-white/40">¿Trabajamos juntos?</p>
            <div className="w-5 h-px bg-white/20" />
          </div>

          <h2 className="font-display font-bold text-display-lg text-white mb-6 leading-tight">
            ¿Tenés una decisión que necesitás tomar con más claridad?
          </h2>
          <p className="text-white/55 text-base mb-10 leading-relaxed max-w-md mx-auto">
            Conversemos sobre tu situación. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto" className="btn-ghost">
              Solicitar consulta
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <WhatsAppSmallIcon />
              Escribir por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppSmallIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
