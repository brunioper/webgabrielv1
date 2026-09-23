import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ServiceBlock } from "@/components/service-block";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Servicios de investigación de mercado y consultoría estratégica | Uruguay" },
  description:
    "Consultoría estratégica, investigación de mercado y panel en Uruguay. Estudios prontos, estudios ad hoc y registro para participar en encuestas.",
  openGraph: {
    title: "Servicios de consultoría estratégica e investigación de mercado",
    description:
      "Tres áreas: consultoría estratégica, investigación de mercado y Panel Uruguay.",
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
            Tres áreas que se complementan: consultoría estratégica,
            investigación de mercado y el panel. Según la necesidad, trabajamos
            en una o las combinamos.
          </p>
        </div>
      </section>

      <ServiceBlock
        id="consultoria"
        number="01"
        title="Consultoría estratégica"
        intro="A partir de los insights de las investigaciones, trabajamos una estrategia en conjunto con la empresa para convertir la información en accionables que permitan alcanzar los objetivos de nuestros clientes."
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
            category: "Estrategia a partir de la investigación",
            items: [
              "Lectura conjunta de los hallazgos",
              "Traducción de datos a decisiones",
              "Prioridades claras para el equipo",
              "Acompañamiento hasta la ejecución",
            ],
          },
          {
            category: "Digitalización e inteligencia artificial",
            items: [
              "Incorporación de herramientas digitales",
              "Automatización de tareas repetitivas",
              "Mejora de procesos de atención",
              "Uso aplicado de inteligencia artificial",
            ],
          },
        ]}
        cta="Coordinar una consulta"
        ctaHref="/contacto"
      />

      <ServiceBlock
        id="investigacion"
        number="02"
        title="Investigación de mercado"
        intro="Diseñamos estudios para entender al consumidor, el mercado y las oportunidades de negocio. Los prontos ya están armados. Los ad hoc se construyen para una pregunta concreta y se ejecutan sobre el panel."
        services={[
          {
            category: "Estudios prontos",
            items: [
              "Estudios prearmados, listos para acceder",
              "Se ofrecen de forma proactiva sobre temas del mercado",
              "Generan contenido, imagen y tracción de marca",
              "Análisis del consumidor y contexto sectorial",
            ],
          },
          {
            category: "Estudios ad hoc",
            items: [
              "Investigación a medida para cada cliente",
              "Diseño de cuestionario, segmentos y muestra",
              "Se apoyan en el panel para ejecutarse",
              "Reportes ejecutivos y recomendaciones accionables",
            ],
          },
        ]}
        cta="Ver estudios disponibles"
        ctaHref="/estudios"
        altBg
      />

      <ServiceBlock
        id="panel"
        number="03"
        title="Panel Uruguay"
        intro="El motor de todo. Un panel de personas con perfil INSE completo, abierto a quien quiera participar respondiendo encuestas. El registro es gratuito y las recompensas se resuelven con sponsors locales."
        services={[
          {
            category: "Registro",
            items: [
              "Gratuito, 100% online y en menos de 5 minutos",
              "Para mayores de 18 años que residan en Uruguay",
              "Nombre, email y perfil para recibir las encuestas correctas",
              "Sin datos bancarios ni tarjeta",
            ],
          },
          {
            category: "Participación",
            items: [
              "Invitaciones a encuestas por email",
              "Cada encuesta suma chances al sorteo del mes",
              "Perfil INSE para segmentar con precisión",
              "Programa de puntos, en preparación",
            ],
          },
        ]}
        cta="Registrarme en el panel"
        ctaHref="/panel#registro"
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
