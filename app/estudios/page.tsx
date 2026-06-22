import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { StudyCatalog } from "@/components/study-catalog";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Estudios de mercado en Uruguay | Prontos y a medida" },
  description:
    "Estudios de mercado prontos y ad hoc para empresas en Uruguay. Análisis de consumidores, percepción de marcas, digitalización empresarial y más.",
  openGraph: {
    title: "Estudios de mercado en Uruguay | Prontos y a medida",
    description:
      "Estudios de mercado listos para adquirir e investigaciones a medida. Información útil para tomar mejores decisiones en Uruguay.",
    type: "website",
  },
};

export default function Estudios() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Estudios</p>
          <h1 className="font-display text-display-xl text-ink mb-6">
            Dos formas de investigar mejor
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-xl">
            Estudios prontos listos para usar o investigaciones diseñadas
            específicamente para tu empresa, tu pregunta y tu decisión.
          </p>
        </div>
      </section>

      {/* Types explanation */}
      <section className="bg-sand py-16 md:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div
              className="rounded-sm p-7 h-full"
              style={{ background: "rgb(var(--c-surface))", border: "1px solid rgb(var(--c-border))" }}
            >
              <span className="section-label mb-3 block text-accent">Estudios prontos</span>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">Información disponible hoy</h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Estudios prearmados sobre temas relevantes para empresas, agencias y marcas.
                Ideales para generar contenido, detectar oportunidades y ganar velocidad sin
                iniciar un proyecto desde cero.
              </p>
              <ul className="space-y-2">
                {["Temas predefinidos", "Rápida disponibilidad", "Costo accesible", "Útiles para contenido, prensa y estrategia"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="rounded-sm p-7 h-full"
              style={{ background: "rgb(var(--c-surface))", border: "1px solid rgb(var(--c-border))" }}
            >
              <span className="section-label mb-3 block text-accent">Estudios ad hoc</span>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">Investigación a tu medida</h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Diseñamos el estudio según tus objetivos, preguntas, segmentos y decisiones.
                Cada proyecto empieza por entender qué necesitás resolver.
              </p>
              <ul className="space-y-2">
                {["Diseño personalizado", "Preguntas a medida", "Segmentación según objetivo", "Análisis profundo", "Recomendaciones finales"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-10">
            <p className="section-label mb-3">Estudios disponibles</p>
            <h2 className="font-display text-display-md text-ink">Catálogo actual</h2>
          </Reveal>
          <StudyCatalog />
        </div>
      </section>

      {/* Ad hoc CTA */}
      <section className="bg-sand py-20 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="section-label mb-3">Investigación a medida</p>
            <h2 className="font-display text-display-md text-ink mb-4">
              ¿Necesitás algo específico?
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Si ningún estudio disponible responde tu pregunta exacta, podemos
              diseñar una investigación a medida adaptada a tus objetivos,
              presupuesto y plazos.
            </p>
            <p className="text-xs text-muted/60 mt-4 italic">
              La metodología y las fuentes se definen según cada proyecto.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn-primary">
                Solicitar un estudio ad hoc
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
