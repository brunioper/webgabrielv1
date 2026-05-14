import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { StudyCatalog } from "@/components/study-catalog";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Estudios de mercado disponibles" },
  description:
    "Catálogo de estudios de mercado listos para adquirir: hábitos del consumidor uruguayo, mercado inmobiliario en Montevideo y digitalización en PyMEs.",
  openGraph: {
    title: "Estudios de mercado disponibles",
    description:
      "Investigaciones listas para adquirir sobre consumidores, mercado inmobiliario y digitalización empresarial en Uruguay. También diseñamos proyectos a medida.",
    type: "website",
  },
};

export default function Estudios() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Estudios disponibles</p>
          <h1 className="font-display text-display-xl text-ink mb-6">
            Investigaciones listas para usar
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-xl">
            Estudios de mercado elaborados que podés adquirir directamente o
            adaptar como punto de partida para una investigación a medida.
          </p>
        </div>
      </section>

      {/* Catalog with category filter */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <StudyCatalog />
        </div>
      </section>

      {/* Custom research CTA */}
      <section className="bg-sand py-20 md:py-24">
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
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn-primary">
                Solicitar investigación
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
