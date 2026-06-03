import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import AnimatedSteps from "@/components/animated-steps";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Metodología | Cómo diseñamos y ejecutamos estudios de mercado" },
  description:
    "Nuestra metodología de investigación de mercado: desde entender la decisión hasta acompañar su implementación. Seis pasos para convertir información en acción.",
  openGraph: {
    title: "Metodología | Cómo diseñamos y ejecutamos estudios de mercado",
    description:
      "Proceso de seis pasos: entender la decisión, diseñar el estudio, ejecutar, analizar, recomendar y acompañar. Consultoría de investigación en Uruguay.",
    type: "website",
  },
};

const steps = [
  {
    n: "01",
    title: "Entendemos la decisión",
    body: "Definimos qué necesita resolver la empresa y qué información falta para tomar esa decisión con más claridad.",
  },
  {
    n: "02",
    title: "Diseñamos el estudio",
    body: "Armamos preguntas, segmentos, muestra y metodología según los objetivos específicos del proyecto.",
  },
  {
    n: "03",
    title: "Ejecutamos el relevamiento",
    body: "Recolectamos información con el método más adecuado para cada objetivo: encuestas, entrevistas, análisis de datos secundarios.",
  },
  {
    n: "04",
    title: "Analizamos resultados",
    body: "Transformamos datos en hallazgos claros, visuales y comprensibles. Jerarquizamos lo que sabemos, lo que inferimos y lo incierto.",
  },
  {
    n: "05",
    title: "Construimos recomendaciones",
    body: "Pasamos de información a accionables concretos. Priorizamos según impacto y viabilidad para el negocio.",
  },
  {
    n: "06",
    title: "Acompañamos la decisión",
    body: "Trabajamos junto al cliente para aplicar los insights en la estrategia. Cuando el proyecto lo requiere, también acompañamos la implementación.",
  },
];

const principles = [
  {
    title: "Preguntas antes que respuestas",
    body: "Dedicamos tiempo a entender bien qué se necesita resolver antes de cualquier análisis. La pregunta correcta define el valor del estudio.",
  },
  {
    title: "Claridad sobre volumen",
    body: "Preferimos un entregable de 10 páginas bien enfocado a uno de 100 que requiera interpretación. La densidad de información no es valor.",
  },
  {
    title: "Adaptación al cliente",
    body: "Cada cliente tiene una dinámica distinta. Nos adaptamos al nivel de detalle, los plazos y los formatos que mejor funcionan para cada equipo.",
  },
  {
    title: "Acción como objetivo final",
    body: "El trabajo no termina con el entregable. Si la decisión necesita seguimiento y soporte, también acompañamos esa etapa.",
  },
];

export default function Metodologia() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Metodología</p>
          <h1 className="font-display text-display-xl text-ink mb-8 leading-tight">
            De la pregunta<br />a la decisión.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            Nuestro trabajo parte de entender qué necesita resolver la empresa.
            A partir de ahí, diseñamos el estudio, relevamos información y
            entregamos conclusiones claras con próximos pasos posibles.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-sand py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-lg text-ink leading-relaxed mb-4">
              No todos los trabajos necesitan todas las etapas. El proceso se
              adapta a la naturaleza de cada necesidad: algunos proyectos
              arrancan directamente en el análisis, otros requieren acompañamiento
              hasta la implementación.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Lo que siempre mantenemos es el foco en producir información útil
              y recomendaciones accionables.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label">Proceso de trabajo</p>
          </Reveal>
          <AnimatedSteps steps={steps} />
        </div>
      </section>

      {/* Principles */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Principios</p>
            <h2 className="font-display text-display-md text-ink">
              Lo que guía nuestra forma de trabajar
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div
                  className="rounded-sm p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                  style={{ background: "#FFFFFF", border: "1px solid #E5E8F0" }}
                >
                  <div className="w-6 h-px bg-accent mb-4" />
                  <h3 className="font-medium text-ink mb-2">{p.title}</h3>
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
            <h2 className="font-display text-display-md text-white mb-5">
              ¿Tiene sentido trabajar juntos?
            </h2>
            <p className="text-white/70 mb-8">
              Contanos qué necesitás investigar y evaluamos cómo podemos ayudarte.
            </p>
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
