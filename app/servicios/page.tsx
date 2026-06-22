import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ServiceBlock } from "@/components/service-block";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Servicios de investigación de mercado y consultoría estratégica | Uruguay" },
  description:
    "Investigación de mercado, consultoría estratégica y estudios para empresas en Uruguay. Encuestas, análisis de consumidores, posicionamiento y más.",
  openGraph: {
    title: "Servicios de investigación de mercado y consultoría estratégica",
    description:
      "Tres áreas integradas: investigación de mercado, consultoría estratégica y estudios para empresas. Trabajamos en Uruguay.",
    type: "website",
  },
};

export default function Servicios() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Servicios</p>
          <h1 className="font-display text-display-xl text-ink mb-6">
            ¿En qué podemos ayudarte?
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-xl">
            Trabajamos en tres áreas que se complementan: investigación,
            estrategia y estudios. Según la necesidad, trabajamos en una o las
            combinamos.
          </p>
        </div>
      </section>

      <ServiceBlock
        number="01"
        title="Investigación de mercado"
        intro="Diseñamos estudios para entender consumidores, mercados, categorías, oportunidades y decisiones de compra."
        services={[
          {
            category: "Investigación cuantitativa",
            items: [
              "Encuestas online",
              "Estudios de opinión",
              "Análisis de consumidores",
              "Validación de productos o servicios",
              "Segmentación de mercado",
              "Medición de percepción de marca",
            ],
          },
          {
            category: "Investigación cualitativa",
            items: [
              "Entrevistas en profundidad",
              "Focus groups",
              "Análisis de motivaciones de compra",
              "Evaluación de conceptos y comunicación",
            ],
          },
        ]}
        cta="Ver estudios disponibles"
        ctaHref="/estudios"
      />

      <ServiceBlock
        number="02"
        title="Consultoría estratégica"
        intro="Basados en información e insights de investigación, trabajamos junto a la empresa para convertir datos en accionables concretos."
        services={[
          {
            category: "Estrategia y posicionamiento",
            items: [
              "Estrategia comercial",
              "Posicionamiento de marca",
              "Go-to-market",
              "Pricing y estrategia de precio",
              "Análisis competitivo",
              "Decisiones basadas en datos",
            ],
          },
          {
            category: "Análisis y diagnóstico",
            items: [
              "Diagnóstico comercial",
              "Análisis de clientes y segmentos",
              "Evaluación de nuevos mercados o productos",
              "Oportunidades de crecimiento",
            ],
          },
        ]}
        cta="Coordinar una consulta"
        ctaHref="/contacto"
        altBg
      />

      <ServiceBlock
        number="03"
        title="Estudios para empresas"
        intro="Soluciones flexibles para empresas que necesitan información clara, rápida y adaptada a sus objetivos."
        services={[
          {
            category: "Estudios prontos",
            items: [
              "Estudios prearmados sobre temas relevantes",
              "Rápida disponibilidad y costo accesible",
              "Útiles para contenido, prensa y estrategia",
              "Análisis del consumidor uruguayo",
              "Tendencias y contexto sectorial",
            ],
          },
          {
            category: "Estudios ad hoc",
            items: [
              "Diseño completamente personalizado",
              "Preguntas y segmentos a medida",
              "Reportes ejecutivos y presentaciones",
              "Recomendaciones accionables",
              "Acompañamiento estratégico en la implementación",
            ],
          },
        ]}
        cta="Solicitar un estudio"
        ctaHref="/contacto"
      />

      {/* CTA final */}
      <section className="bg-accent py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-display-md text-on-accent mb-5">
              ¿No sabés por dónde empezar?
            </h2>
            <p className="text-on-accent/80 mb-8">
              Contanos tu situación y definimos juntos qué tipo de estudio tiene más sentido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-ghost">
                Escribir por formulario
              </Link>
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
