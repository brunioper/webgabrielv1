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
            Trabajamos en dos áreas que se complementan: investigación de
            mercado y consultoría. Según la necesidad, trabajamos en una o las
            combinamos.
          </p>
        </div>
      </section>

      <ServiceBlock
        number="01"
        title="Investigación de mercado"
        intro="Diseñamos herramientas para entender mejor al consumidor, el mercado y las oportunidades de negocio, combinando estudios disponibles, proyectos a medida y un panel propio."
        services={[
          {
            category: "Estudios prontos",
            items: [
              "Informes ya elaborados, listos para acceder de forma ágil",
              "Información útil sin esperar un desarrollo desde cero",
              "Generan contenido, imagen y tracción de marca",
              "Análisis del consumidor y contexto sectorial",
            ],
          },
          {
            category: "Investigaciones ad hoc",
            items: [
              "Estudios diseñados a medida según cada necesidad",
              "Ideales para validar decisiones y reducir incertidumbre",
              "Diseño de cuestionario, segmentos y muestra",
              "Reportes ejecutivos y recomendaciones accionables",
            ],
          },
          {
            category: "Panel propio",
            items: [
              "Panel de personas con perfil INSE completo",
              "Listo para ejecutar estudios con rapidez",
              "Registro abierto a quienes quieran participar",
              "Encuestas online segmentadas",
            ],
          },
        ]}
        cta="Ver estudios disponibles"
        ctaHref="/estudios"
      />

      <ServiceBlock
        number="02"
        title="Consultoría estratégica, comercial y de procesos"
        intro="Acompañamos a empresas en la toma de decisiones, la mejora de procesos y la implementación de iniciativas clave, combinando análisis, criterio y foco en la acción. No nos quedamos en el diagnóstico: acompañamos decisiones, mejoras e implementación."
        services={[
          {
            category: "Decisiones comerciales",
            items: [
              "Propuesta de valor y pricing",
              "Análisis de clientes y segmentos",
              "Priorización de oportunidades",
              "Acompañamiento en lanzamientos",
            ],
          },
          {
            category: "Optimización y mejora de procesos",
            items: [
              "Revisión de procesos comerciales y operativos",
              "Mejora del funnel de conversión",
              "Identificación de cuellos de botella",
              "Simplificación y eficiencia operativa",
            ],
          },
          {
            category: "Digitalización y automatización",
            items: [
              "Incorporación de herramientas digitales",
              "Automatización de tareas repetitivas",
              "Mejora de procesos de atención y back office",
              "Uso aplicado de inteligencia artificial",
            ],
          },
          {
            category: "Liderazgo y seguimiento de proyectos",
            items: [
              "Coordinación de iniciativas y equipos",
              "Seguimiento de proyectos y control de avances",
              "Implementación de mejoras",
              "Acompañamiento hasta la ejecución",
            ],
          },
        ]}
        cta="Coordinar una consulta"
        ctaHref="/contacto"
        altBg
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
