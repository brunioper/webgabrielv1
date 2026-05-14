import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    absolute: "Sobre nosotros | Consultoría práctica para decidir y ejecutar",
  },
  description:
    "Integramos investigación de mercado, consultoría estratégica y gestión operativa con una mirada práctica. Trabajamos con empresas y propietarios en Montevideo, Uruguay.",
  openGraph: {
    title: "Sobre nosotros | Consultoría práctica para decidir y ejecutar",
    description:
      "Investigación, análisis, consultoría y gestión integradas. Orientados a entender problemas reales y transformarlos en acciones concretas. Montevideo, Uruguay.",
    type: "website",
  },
};

const values = [
  {
    label: "Información útil",
    desc: "Trabajamos sobre datos reales y preguntas concretas. No generamos reportes teóricos sin aplicación.",
  },
  {
    label: "Criterio de negocio",
    desc: "Integramos análisis con experiencia práctica para ofrecer perspectiva, no solo datos.",
  },
  {
    label: "Foco en la acción",
    desc: "Cada proyecto termina con pasos claros. El diagnóstico es el inicio, no el resultado.",
  },
  {
    label: "Acompañamiento real",
    desc: "Cuando el proyecto lo requiere, también acompañamos la implementación.",
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
            Claridad para decidir.<br />Orden para ejecutar.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            Trabajamos con empresas y propietarios que necesitan más claridad
            para decidir y más orden para ejecutar.
          </p>
        </div>
      </section>

      {/* Main text */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <Reveal>
            <div className="w-10 h-px bg-accent mb-8" />
            <p className="text-lg text-ink leading-relaxed mb-6">
              Integramos investigación, análisis, consultoría y gestión con una
              mirada práctica, orientada a entender problemas reales y
              transformarlos en acciones concretas.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Nuestro enfoque combina información útil, criterio de negocio y
              seguimiento operativo, adaptándonos a cada necesidad con
              soluciones claras y aplicables.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-sand rounded-sm p-8 md:p-10">
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

      {/* Areas */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Áreas de trabajo</p>
            <h2 className="font-display text-display-md text-ink">Tres líneas integradas</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Investigación de mercado",
                d: "Estudios disponibles e investigaciones a medida para entender el mercado, el consumidor y las oportunidades.",
              },
              {
                n: "02",
                t: "Consultoría estratégica, comercial y de procesos",
                d: "Acompañamiento en decisiones clave, mejora de procesos e implementación de iniciativas.",
              },
              {
                n: "03",
                t: "Gestión operativa y de propiedades",
                d: "Extensión operativa para asegurar el funcionamiento y mejorar el rendimiento del negocio o la propiedad.",
              },
            ].map((a, i) => (
              <Reveal key={a.n} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-sm p-7
                                transition-all duration-300 hover:border-accent/25 hover:shadow-card-hover hover:-translate-y-0.5">
                  <p className="font-display text-3xl font-light text-border mb-3">{a.n}</p>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">{a.t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-display-md text-white mb-5">¿Trabajamos juntos?</h2>
            <p className="text-white/60 mb-8">Contanos tu situación y vemos cómo podemos ayudarte.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-ghost">Contactar</Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                WhatsApp directo
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
