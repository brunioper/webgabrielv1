import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import AnimatedSteps from "@/components/animated-steps";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Metodología de trabajo | Información, decisiones y ejecución",
  },
  description:
    "Cómo trabajamos: seis pasos desde entender la necesidad hasta acompañar la ejecución. De la pregunta correcta a la información útil y la acción concreta.",
  openGraph: {
    title: "Metodología de trabajo | Información, decisiones y ejecución",
    description:
      "Nuestro proceso: entender la necesidad, ordenar la pregunta, analizar, definir conclusiones, proponer acciones y acompañar la ejecución. Consultoría en Uruguay.",
    type: "website",
  },
};

const steps = [
  {
    n: "01",
    title: "Entendemos la necesidad",
    body: "Antes de cualquier análisis, dedicamos tiempo a entender bien la situación: el contexto, las restricciones, los actores involucrados y lo que se espera del trabajo.",
  },
  {
    n: "02",
    title: "Ordenamos la pregunta",
    body: "Muchas veces la dificultad no es la falta de respuestas, sino no tener clara la pregunta correcta. Trabajamos con el cliente para definir el problema con precisión.",
  },
  {
    n: "03",
    title: "Analizamos información",
    body: "Relevamos datos disponibles, información de mercado, procesos internos o lo que el proyecto requiera. Combinamos fuentes primarias y secundarias según la necesidad.",
  },
  {
    n: "04",
    title: "Definimos conclusiones",
    body: "Transformamos la información en conclusiones claras, jerarquizadas y orientadas a la acción. Distinguimos lo que sabemos, lo que inferimos y lo que aún es incierto.",
  },
  {
    n: "05",
    title: "Proponemos acciones",
    body: "Entregamos recomendaciones concretas con el foco en lo que se puede hacer, cuándo y cómo. Priorizamos según impacto y viabilidad.",
  },
  {
    n: "06",
    title: "Acompañamos la ejecución",
    body: "Cuando el proyecto lo requiere, también acompañamos la implementación: seguimiento, ajuste y soporte para que las decisiones se conviertan en resultados.",
  },
];

const principles = [
  {
    title: "Práctica sobre teoría",
    body: "No entregamos marcos conceptuales ni metodologías genéricas. El foco está en lo que sirve para este problema, en este contexto.",
  },
  {
    title: "Claridad sobre volumen",
    body: "Preferimos un informe de 10 páginas bien enfocado a uno de 100 que requiera interpretación. La densidad de información no es valor.",
  },
  {
    title: "Adaptación al cliente",
    body: "Cada cliente tiene una dinámica distinta. Nos adaptamos al nivel de detalle, los plazos y los formatos que mejor funcionan para cada equipo.",
  },
  {
    title: "Continuidad si es necesario",
    body: "El trabajo no termina con el entregable. Si la ejecución lo requiere, seguimos acompañando.",
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
            De la pregunta<br />a la ejecución.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            Nuestro trabajo parte de una necesidad concreta: entender mejor una
            situación, reducir incertidumbre, mejorar una decisión o hacer que
            una operación funcione mejor.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-lg text-ink leading-relaxed mb-4">
              A partir de ahí, ordenamos la pregunta, definimos el enfoque de
              trabajo, relevamos o analizamos información y entregamos
              conclusiones claras con próximos pasos posibles.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Cuando el proyecto lo requiere, también acompañamos la
              implementación. No todos los trabajos necesitan todas las etapas —
              el proceso se adapta a la naturaleza de cada necesidad.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Animated steps */}
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
                <div className="bg-white border border-border rounded-sm p-7
                                transition-all duration-300 hover:border-accent/25 hover:shadow-card-hover">
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
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-display-md text-white mb-5">
              ¿Tiene sentido trabajar juntos?
            </h2>
            <p className="text-white/60 mb-8">
              Contanos qué necesitás y evaluamos cómo podemos ayudarte.
            </p>
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
