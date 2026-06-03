import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Nosotros | Investigación de mercado y estrategia en Uruguay" },
  description:
    "Somos una consultora de investigación de mercado y estrategia que ayuda a empresas a transformar información en decisiones concretas. Montevideo, Uruguay.",
  openGraph: {
    title: "Nosotros | Investigación de mercado y estrategia en Uruguay",
    description:
      "Investigación, datos y estrategia para empresas en Uruguay. Metodologías ágiles, estudios accesibles y enfoque local.",
    type: "website",
  },
};

const pillars = [
  { n: "01", title: "Investigación", body: "Datos confiables para entender mercados, consumidores y oportunidades." },
  { n: "02", title: "Estrategia",    body: "Convertimos información en recomendaciones claras y accionables." },
  { n: "03", title: "Agilidad",      body: "Estudios pensados para empresas que necesitan respuestas concretas sin procesos eternos." },
];

const values = [
  { label: "Información útil",     desc: "Trabajamos sobre datos reales y preguntas concretas. No generamos reportes que terminan archivados." },
  { label: "Criterio local",       desc: "Conocemos el mercado uruguayo. Nuestro enfoque es específico, no genérico." },
  { label: "Foco en la acción",    desc: "Cada proyecto termina con pasos claros. El diagnóstico es el inicio, no el resultado." },
  { label: "Acompañamiento real",  desc: "Cuando el proyecto lo requiere, también acompañamos la implementación de los insights." },
];

const timeline = [
  { year: "2017", title: "Fundación", desc: "Inicio de la consultora en Montevideo con foco en investigación de mercado para empresas uruguayas." },
  { year: "2019", title: "Primeros estudios sectoriales", desc: "Relevamientos en consumo masivo, retail y servicios financieros para empresas y agencias locales." },
  { year: "2021", title: "Metodologías digitales", desc: "Expansión hacia encuestas online y paneles digitales, reduciendo tiempos de campo a días." },
  { year: "2023", title: "+50 estudios completados", desc: "Consolidación del portafolio: investigación cuantitativa, cualitativa y consultoría estratégica." },
  { year: "2024", title: "Estudios prontos", desc: "Lanzamiento de la línea de estudios prearmados para generar insights de mercado con rapidez y accesibilidad." },
];

export default function Nosotros() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 section-divider-bottom">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Nosotros</p>
          <h1 className="font-display text-display-xl text-ink leading-tight mb-8">
            Investigación, datos<br />y estrategia para decidir mejor.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            Somos una consultora de investigación de mercado y estrategia que
            ayuda a empresas a transformar información en decisiones concretas.
          </p>
        </div>
      </section>

      {/* Main text */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <div className="w-10 h-px bg-accent mb-8" />
            <p className="text-lg text-ink leading-relaxed mb-6">
              Trabajamos con metodologías ágiles, estudios accesibles y un
              enfoque local para entender consumidores, mercados y oportunidades
              en Uruguay.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Nuestro enfoque combina información útil, criterio de negocio y
              recomendaciones accionables, adaptándonos a la necesidad de cada
              empresa, agencia o emprendimiento.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-sm p-8 md:p-10"
              style={{ background: "#FFFFFF", border: "1px solid #E5E8F0" }}>
              <p className="section-label mb-6">Lo que nos define</p>
              <ul className="space-y-6">
                {values.map((v) => (
                  <li key={v.label}>
                    <p className="font-medium text-ink mb-1">{v.label}</p>
                    <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-bg py-20 md:py-28 section-divider-top">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Cómo trabajamos</p>
            <h2 className="font-display text-display-md text-ink">Tres pilares integrados</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="rounded-sm p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                  style={{ background: "#FFFFFF", border: "1px solid #E5E8F0" }}>
                  <p className="font-display font-extrabold text-4xl mb-3" style={{ color: "#D7E0F4", letterSpacing: "-0.04em" }}>
                    {p.n}
                  </p>
                  <div className="w-6 h-px mb-4" style={{ background: "linear-gradient(to right, #1E40A6, #2952CB)" }} />
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company history timeline */}
      <section className="bg-sand py-20 md:py-28 section-divider-top section-divider-bottom">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="mb-14">
            <p className="section-label mb-4">Nuestra historia</p>
            <h2 className="font-display text-display-md text-ink">Cómo llegamos hasta acá</h2>
          </Reveal>

          <div className="relative">
            {/* Vertical dashed line */}
            <div className="absolute left-[52px] md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 z-0"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, rgba(41,82,203,0.4) 0px, rgba(41,82,203,0.4) 6px, transparent 6px, transparent 14px)",
              }} />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.1}>
                  {/* Mobile layout: year node on left, card on right */}
                  <div className="flex gap-6 md:gap-0 md:grid md:grid-cols-2 items-start">

                    {/* Mobile: node + year */}
                    <div className="flex flex-col items-center flex-shrink-0 md:hidden">
                      <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center z-10"
                        style={{ background: "#2952CB", boxShadow: "0 0 16px rgba(41,82,203,0.4)" }}>
                        <span className="text-[9px] font-bold text-white leading-tight text-center">{item.year}</span>
                      </div>
                    </div>

                    {/* Desktop left slot: even → card, odd → empty */}
                    <div className="hidden md:flex justify-end pr-12">
                      {i % 2 === 0 ? (
                        <TimelineCard item={item} />
                      ) : (
                        <div className="flex justify-end items-center pr-0 w-full">
                          <span className="text-sm font-bold text-muted/40">{item.year}</span>
                        </div>
                      )}
                    </div>

                    {/* Desktop center node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10" style={{ marginTop: "10px" }}>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center"
                        style={{ background: "#2952CB", boxShadow: "0 0 16px rgba(41,82,203,0.4)" }}>
                        <span className="text-[9px] font-bold text-white leading-tight text-center">{item.year}</span>
                      </div>
                    </div>

                    {/* Desktop right slot: even → empty, odd → card */}
                    <div className="hidden md:flex pl-12">
                      {i % 2 === 1 ? (
                        <TimelineCard item={item} />
                      ) : (
                        <div className="flex items-center pl-0 w-full">
                          <span className="text-sm font-bold text-muted/40">{item.year}</span>
                        </div>
                      )}
                    </div>

                    {/* Mobile card */}
                    <div className="md:hidden flex-1">
                      <TimelineCard item={item} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #060810 0%, #0D1430 50%, #060810 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(41,82,203,0.4), transparent)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="font-display text-display-md text-white mb-5">¿Trabajamos juntos?</h2>
            <p className="text-white/60 mb-8">Contanos tu situación y vemos cómo podemos ayudarte.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-ghost">Contactar</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-light">
                WhatsApp directo
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TimelineCard({ item }: { item: { year: string; title: string; desc: string } }) {
  return (
    <div className="rounded-sm p-5 w-full max-w-sm"
      style={{ background: "#FFFFFF", border: "1px solid #E5E8F0" }}>
      <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: "#1E40A6" }}>
        {item.year}
      </p>
      <h3 className="font-semibold text-sm text-ink mb-1.5">{item.title}</h3>
      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
    </div>
  );
}
