import type { Metadata } from "next";
import Link from "next/link";
import HeroVisual from "@/components/hero-visual";
import LogoMarquee from "@/components/logo-marquee";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/config";
import { studies } from "@/lib/studies";

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
      <TrustStrip />
      <ServicesSection />
      <ValuesSection />
      <StudiesSection />
      <CtaSection />
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────

const heroStats = [
  { value: "+50", label: "estudios realizados" },
  { value: "+12", label: "industrias" },
  { value: "100%", label: "datos primarios" },
  { value: "Desde 2017", label: "en el mercado" },
];

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col bg-bg relative overflow-hidden">
      {/* Soft ambient blue */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 60% at 82% 40%, rgba(41,82,203,0.08) 0%, transparent 62%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(41,82,203,0.06) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 78% 45%, black 5%, transparent 70%)",
        maskImage: "radial-gradient(ellipse 70% 60% at 78% 45%, black 5%, transparent 70%)",
      }} />

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 w-full py-24 grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-16 items-center">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-9">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[11px] font-bold text-accent tracking-[0.22em] uppercase">
                Investigación de mercado · Montevideo
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold text-ink leading-[1.04] mb-8"
              style={{ fontSize: "clamp(2.75rem, 6vw, 5.4rem)", letterSpacing: "-0.035em" }}
            >
              Datos confiables,<br />
              decisiones<br />
              <span className="text-accent">más inteligentes.</span>
            </h1>

            <p className="text-lg text-muted leading-[1.7] max-w-md mb-10">
              Ayudamos a empresas a entender mejor a sus consumidores a través de estudios prontos, investigaciones a medida y consultoría estratégica basada en información real.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contacto" className="btn-primary">
                Solicitar un estudio
                <span className="text-xs">→</span>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-colors duration-200"
              >
                Ver servicios <span className="text-xs">→</span>
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-end items-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t relative z-10 bg-white/50" style={{ borderColor: "#E5E8F0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 px-6 ${i > 0 ? "border-l" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} first:pl-0`}
                style={{ borderColor: "#E5E8F0" }}
              >
                <p className="font-display font-extrabold text-2xl text-ink tracking-tight"
                  style={{ letterSpacing: "-0.03em" }}>
                  {s.value}
                </p>
                <p className="text-xs text-muted mt-0.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust strip ──────────────────────────────────────────────────

function TrustStrip() {
  return (
    <section className="bg-bg py-12 border-b" style={{ borderColor: "#E5E8F0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted/70 mb-7">
          Empresas que confían en nosotros
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────

const services = [
  {
    number: "01",
    title: "Investigación de mercado",
    desc: "Diseñamos estudios para entender consumidores, mercados, categorías y decisiones de compra en Uruguay.",
    tags: ["Encuestas online", "Estudios de opinión", "Segmentación", "Medición de marca"],
    href: "/servicios",
  },
  {
    number: "02",
    title: "Consultoría estratégica",
    desc: "Convertimos datos e insights en recomendaciones claras y accionables para tu negocio.",
    tags: ["Posicionamiento", "Go-to-market", "Análisis competitivo", "Pricing"],
    href: "/servicios",
  },
  {
    number: "03",
    title: "Estudios para empresas",
    desc: "Soluciones de investigación accesibles pensadas para la escala y velocidad que las empresas uruguayas necesitan.",
    tags: ["Estudios prontos", "Estudios ad hoc", "Reportes ejecutivos"],
    href: "/estudios",
  },
];

function ServicesSection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="section-label block mb-4">Servicios</span>
              <h2
                className="font-display font-bold text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                Cómo trabajamos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-warm transition-colors duration-200 pb-1"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </Reveal>

        {/* Editorial numbered list */}
        <div style={{ borderTop: "1px solid #E5E8F0" }}>
          {services.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.07}>
              <Link
                href={s.href}
                className="group flex items-start gap-6 md:gap-12 py-10 md:py-11 -mx-6 px-6 transition-colors duration-300 hover:bg-sand rounded-lg"
                style={{ borderBottom: "1px solid #E5E8F0" }}
              >
                {/* Number */}
                <span
                  className="font-display font-extrabold tabular-nums leading-none pt-1 w-14 flex-shrink-0 hidden md:block"
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    letterSpacing: "-0.04em",
                    color: "#D7E0F4",
                  }}
                >
                  {s.number}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display font-bold text-ink mb-3 group-hover:text-accent transition-colors duration-300"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", letterSpacing: "-0.02em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed mb-4 max-w-2xl">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted/60 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <span className="text-border-strong group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 text-2xl flex-shrink-0 pt-1 hidden md:block">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/servicios" className="text-sm font-semibold text-accent hover:text-accent-warm transition-colors">
            Ver todos los servicios →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Values ───────────────────────────────────────────────────────

const values = [
  {
    title: "Rigor metodológico",
    desc: "Cada estudio sigue un diseño cuidado: muestras representativas, instrumentos validados y análisis transparente.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Datos primarios",
    desc: "Trabajamos con información de primera mano, recolectada directamente para responder a tus preguntas.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
  },
  {
    title: "Insights accionables",
    desc: "No entregamos solo números: traducimos los resultados en recomendaciones claras para decidir.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "Cercanía local",
    desc: "Conocemos el mercado uruguayo en profundidad y acompañamos cada proyecto de cerca, sin intermediarios.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

function ValuesSection() {
  return (
    <section className="bg-sand py-24 md:py-32 border-y" style={{ borderColor: "#E5E8F0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <span className="section-label block mb-4">Por qué nosotros</span>
            <h2
              className="font-display font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
            >
              Investigación seria, sin la distancia de las grandes firmas
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="card h-full">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-accent mb-6"
                  style={{ background: "#EAEFFB" }}
                >
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-ink text-lg mb-2.5 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Studies ──────────────────────────────────────────────────────

function StudiesSection() {
  const available = studies.filter((s) => s.available);
  const coming = studies.filter((s) => !s.available);

  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="section-label block mb-4">Estudios</span>
              <h2
                className="font-display font-bold text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                Dos formas de investigar
              </h2>
            </div>
            <Link
              href="/estudios"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-warm transition-colors duration-200"
            >
              Ver catálogo completo →
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Estudios prontos */}
          <Reveal>
            <div className="rounded-xl p-9 md:p-11 h-full flex flex-col bg-white"
              style={{ border: "1px solid #E5E8F0", boxShadow: "0 1px 2px rgba(20,23,31,0.04), 0 4px 16px -8px rgba(20,23,31,0.10)" }}>
              <div className="mb-7">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md mb-6"
                  style={{ background: "#EAEFFB", color: "#1E40A6" }}
                >
                  Disponibles hoy
                </span>
                <h3
                  className="font-display font-bold text-ink mb-3"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em" }}
                >
                  Estudios prontos
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Investigaciones prearmadas sobre temas relevantes para empresas y marcas en Uruguay. Rápidos, accesibles y listos para usar.
                </p>
              </div>

              <div className="flex-1" style={{ borderTop: "1px solid #EEF1F7" }}>
                {available.map((study) => (
                  <div key={study.id} className="py-4" style={{ borderBottom: "1px solid #F0F2F8" }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent block mb-1">
                          {study.category}
                        </span>
                        <p className="text-sm font-medium text-ink/85 leading-snug">{study.title}</p>
                      </div>
                      <span className="text-[10px] font-semibold text-muted/70 flex-shrink-0 pt-0.5">{study.date}</span>
                    </div>
                  </div>
                ))}
                {coming.map((study) => (
                  <div key={study.id} className="py-4 opacity-50" style={{ borderBottom: "1px solid #F0F2F8" }}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1">
                      Próximamente
                    </span>
                    <p className="text-sm font-medium text-ink/60 leading-snug">{study.title}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link href="/estudios" className="text-sm font-semibold text-accent hover:text-accent-warm transition-colors">
                  Ver catálogo →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Estudios ad hoc */}
          <Reveal delay={0.08}>
            <div
              className="rounded-xl p-9 md:p-11 h-full flex flex-col relative overflow-hidden"
              style={{ background: "#0B1A33" }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none" style={{
                background: "radial-gradient(circle at 100% 0%, rgba(75,115,232,0.35) 0%, transparent 60%)",
              }} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-7">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md mb-6"
                    style={{ background: "rgba(255,255,255,0.1)", color: "#9FB8FF" }}
                  >
                    A tu medida
                  </span>
                  <h3
                    className="font-display font-bold text-white mb-3"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em" }}
                  >
                    Estudios ad hoc
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Diseñamos el estudio según tus objetivos, preguntas y segmentos. Cada proyecto empieza por entender qué necesitás resolver.
                  </p>
                </div>

                <div className="flex-1 space-y-4 my-7">
                  {[
                    "Diseño personalizado del cuestionario",
                    "Segmentación según tu objetivo",
                    "Análisis profundo de resultados",
                    "Recomendaciones accionables",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#9FBFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <p className="text-sm text-white/80">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link href="/contacto" className="btn-light inline-flex">
                    Solicitar estudio ad hoc
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-32 md:py-44"
      style={{ background: "#0B1A33" }}
    >
      {/* Centered glow */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center">
        <div style={{
          width: "70%",
          height: "55%",
          background: "radial-gradient(ellipse at 50% 100%, rgba(75,115,232,0.4) 0%, transparent 65%)",
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/45 mb-8">
            ¿Trabajamos juntos?
          </p>
          <h2
            className="font-display font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", letterSpacing: "-0.03em", lineHeight: "1.08" }}
          >
            Tomá mejores decisiones{" "}
            <span style={{ color: "#9FBFFF" }}>
              con información real.
            </span>
          </h2>
          <p className="text-white/55 text-base mb-12 max-w-sm mx-auto leading-relaxed">
            Contanos qué necesitás investigar y te ayudamos a definir el estudio correcto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-light">
              <WhatsAppIcon />
              WhatsApp
            </a>
            <Link href="/contacto" className="btn-ghost">Solicitar un estudio</Link>
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
