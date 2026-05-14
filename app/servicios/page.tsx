import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ServiceBlock } from "@/components/service-block";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Servicios de investigación, consultoría y gestión operativa",
  },
  description:
    "Investigación de mercado, consultoría estratégica comercial y mejora de procesos, gestión operativa y gestión de propiedades residenciales y comerciales. Montevideo, Uruguay.",
  openGraph: {
    title: "Servicios de investigación, consultoría y gestión operativa",
    description:
      "Tres áreas integradas: investigación de mercado, consultoría estratégica y de procesos, y gestión operativa y de propiedades. Trabajamos en Uruguay.",
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
            consultoría y gestión. Según la necesidad, trabajamos en una o las
            combinamos.
          </p>
        </div>
      </section>

      <ServiceBlock
        number="01"
        title="Investigación de mercado"
        intro="Diseñamos herramientas para entender mejor al consumidor, el mercado y las oportunidades de negocio, combinando estudios disponibles y proyectos a medida."
        services={[
          {
            category: "Estudios prontos",
            items: [
              "Estudios de mercado listos para adquirir sobre sectores específicos",
              "Análisis de hábitos y preferencias del consumidor",
              "Informes de tendencias y contexto sectorial",
              "Análisis competitivos",
            ],
          },
          {
            category: "Investigaciones ad hoc",
            items: [
              "Diseño y ejecución de estudios cuantitativos",
              "Investigación cualitativa: entrevistas, focus groups",
              "Análisis de posicionamiento y percepción de marca",
              "Estudios de satisfacción y experiencia del cliente",
              "Evaluación de nuevos productos o servicios",
              "Análisis de precio y disposición a pagar",
            ],
          },
        ]}
        cta="Ver estudios disponibles"
        ctaHref="/estudios"
        bgLight
      />

      <ServiceBlock
        number="02"
        title="Consultoría estratégica, comercial y de procesos"
        intro="Acompañamos a empresas en la toma de decisiones, la mejora de procesos y la implementación de iniciativas clave, combinando análisis, criterio y foco en la acción."
        services={[
          {
            category: "Área comercial y estratégica",
            items: [
              "Decisiones comerciales y estratégicas",
              "Pricing y estrategia de precio",
              "Análisis de clientes y segmentos",
              "Optimización del funnel de conversión",
              "Evaluación de nuevos mercados o productos",
              "Diagnóstico comercial",
            ],
          },
          {
            category: "Procesos y operación",
            items: [
              "Optimización de procesos internos",
              "Digitalización de flujos de trabajo",
              "Automatización de procesos repetitivos",
              "Uso aplicado de inteligencia artificial",
              "Mapeo y documentación de procesos",
            ],
          },
          {
            category: "Proyectos e implementación",
            items: [
              "Liderazgo y seguimiento de proyectos",
              "Gestión del cambio organizacional",
              "Soporte en implementación de iniciativas",
            ],
          },
        ]}
        cta="Coordinar una consulta"
        ctaHref="/contacto"
      />

      <ServiceBlock
        number="03"
        title="Gestión operativa y de propiedades"
        intro="Actuamos como una extensión de la operación, combinando gestión diaria, coordinación y apoyo en decisiones para asegurar el funcionamiento y mejorar el rendimiento."
        services={[
          {
            category: "Gestión operativa de negocios",
            items: [
              "Gestión operativa y coordinación diaria",
              "Seguimiento y control de procesos",
              "Soporte administrativo y organizacional",
              "Coordinación de equipos y tareas",
              "Reportes de seguimiento y control de gestión",
            ],
          },
          {
            category: "Gestión de propiedades",
            items: [
              "Gestión de propiedades residenciales y comerciales",
              "Coordinación de proveedores y servicios",
              "Seguimiento de incidencias y mantenimiento",
              "Gestión de alquileres y contratos",
              "Control de gastos y rendimiento del activo",
            ],
          },
        ]}
        cta="WhatsApp directo"
        ctaHref={WHATSAPP_URL}
        ctaExternal
        bgLight
      />

      {/* CTA final */}
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-display-md text-white mb-5">
              ¿No sabés por dónde empezar?
            </h2>
            <p className="text-white/60 mb-8">
              Contanos tu situación y definimos juntos qué tipo de trabajo tiene más sentido.
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
