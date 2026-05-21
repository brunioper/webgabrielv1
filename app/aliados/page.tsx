import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Aliados estratégicos | Empresas que nos acompañan" },
  description:
    "Trabajamos junto a empresas y marcas que buscan generar valor, acceder a información relevante y participar en iniciativas vinculadas a investigación y mercado en Uruguay.",
  openGraph: {
    title: "Aliados estratégicos | Empresas que nos acompañan",
    description:
      "Red de empresas asociadas vinculadas a investigación, consumidores y mercado en Uruguay.",
    type: "website",
  },
};

export default function Aliados() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Aliados estratégicos</p>
          <h1 className="font-display text-display-xl text-ink leading-tight mb-8">
            Empresas que<br />nos acompañan.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            Trabajamos junto a empresas y marcas que buscan generar valor,
            acceder a información relevante y participar en iniciativas
            vinculadas a investigación, consumidores y mercado.
          </p>
        </div>
      </section>

      {/* Value proposition */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <Reveal>
              <div className="w-10 h-px bg-accent mb-8" />
              <h2 className="font-display text-display-md text-ink mb-6">
                ¿Qué significa ser aliado?
              </h2>
              <p className="text-base text-muted leading-relaxed mb-4">
                Nuestros aliados son empresas y marcas que se vinculan con
                nuestra red para acceder a información del mercado, participar
                en iniciativas de investigación y generar valor para sus
                clientes y audiencias.
              </p>
              <p className="text-base text-muted leading-relaxed">
                La alianza se define según los objetivos de cada empresa. Podemos
                armar esquemas de colaboración a medida.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                {[
                  { title: "Visibilidad de marca", body: "Presencia asociada a investigación de mercado y datos del consumidor uruguayo." },
                  { title: "Acceso a información", body: "Participación en estudios e insights relevantes para tu industria." },
                  { title: "Colaboración estratégica", body: "Desarrollo conjunto de iniciativas vinculadas a investigación y mercado." },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-sm p-6"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-px bg-accent" />
                      <p className="text-xs font-bold text-accent uppercase tracking-[0.15em]">0{i + 1}</p>
                    </div>
                    <h3 className="font-medium text-ink mb-1">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logos grid — placeholder */}
      <section className="bg-bg py-20 md:py-28 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Red de aliados</p>
            <h2 className="font-display text-display-md text-ink">Empresas asociadas</h2>
          </Reveal>

          {/* Logo grid — add real logos here */}
          <Reveal delay={0.1}>
            <div
              className="rounded-sm p-12 text-center"
              style={{ border: "1px dashed rgba(255,255,255,0.12)" }}
            >
              <p className="text-muted text-sm">Los logos de aliados aparecerán aquí.</p>
              <p className="text-muted/50 text-xs mt-2">Agregá los logos en este componente cuando estén disponibles.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-display-md text-white mb-5">
              ¿Querés conocer oportunidades de alianza?
            </h2>
            <p className="text-white/70 mb-8">
              Contanos sobre tu empresa y exploramos cómo podemos trabajar juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-ghost">Escribir por formulario</Link>
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
