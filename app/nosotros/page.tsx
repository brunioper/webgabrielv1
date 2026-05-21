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
  {
    n: "01",
    title: "Investigación",
    body: "Datos confiables para entender mercados, consumidores y oportunidades.",
  },
  {
    n: "02",
    title: "Estrategia",
    body: "Convertimos información en recomendaciones claras y accionables.",
  },
  {
    n: "03",
    title: "Agilidad",
    body: "Estudios pensados para empresas que necesitan respuestas concretas sin procesos eternos.",
  },
];

const values = [
  {
    label: "Información útil",
    desc: "Trabajamos sobre datos reales y preguntas concretas. No generamos reportes que terminan archivados.",
  },
  {
    label: "Criterio local",
    desc: "Conocemos el mercado uruguayo. Nuestro enfoque es específico, no genérico.",
  },
  {
    label: "Foco en la acción",
    desc: "Cada proyecto termina con pasos claros. El diagnóstico es el inicio, no el resultado.",
  },
  {
    label: "Acompañamiento real",
    desc: "Cuando el proyecto lo requiere, también acompañamos la implementación de los insights.",
  },
];

export default function Nosotros() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 border-b border-border">
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
            <div
              className="rounded-sm p-8 md:p-10"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
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
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Cómo trabajamos</p>
            <h2 className="font-display text-display-md text-ink">Tres pilares integrados</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div
                  className="rounded-sm p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="font-bold text-3xl font-light mb-3" style={{ color: "rgba(255,255,255,0.06)" }}>{p.n}</p>
                  <div className="w-6 h-px bg-accent mb-4" />
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-display-md text-white mb-5">¿Trabajamos juntos?</h2>
            <p className="text-white/70 mb-8">Contanos tu situación y vemos cómo podemos ayudarte.</p>
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
