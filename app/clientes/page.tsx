import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import LogoMarquee from "@/components/logo-marquee";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Clientes | Empresas que trabajan con nosotros" },
  description:
    "Acompañamos a empresas, agencias, emprendedores y organizaciones que buscan entender mejor a sus consumidores y tomar decisiones con información confiable en Uruguay.",
  openGraph: {
    title: "Clientes | Empresas que trabajan con nosotros",
    description:
      "Empresas, agencias y organizaciones que confían en nuestra investigación de mercado para tomar mejores decisiones.",
    type: "website",
  },
};

const audiences = [
  { title: "Empresas en crecimiento", body: "Que necesitan información para expandirse, lanzar nuevos productos o entender mejor su mercado." },
  { title: "Agencias",               body: "Que necesitan datos para respaldar estrategias de comunicación, posicionamiento o lanzamientos." },
  { title: "PyMEs",                  body: "Que quieren tomar decisiones con datos sin los costos de una consultora grande." },
  { title: "Startups",               body: "Que necesitan validar hipótesis, entender su mercado objetivo y reducir incertidumbre." },
  { title: "Marcas",                 body: "Que quieren medir su posicionamiento, percepción y evolución en el mercado uruguayo." },
  { title: "Organizaciones",         body: "Que necesitan información para diseñar programas, comunicar mejor o tomar decisiones estratégicas." },
];

export default function Clientes() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 section-divider-bottom">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Clientes</p>
          <h1 className="font-display text-display-xl text-ink leading-tight mb-8">
            Nuestros clientes.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl">
            Acompañamos a empresas, agencias, emprendedores y organizaciones
            que buscan entender mejor a sus consumidores y tomar decisiones con
            información confiable.
          </p>
        </div>
      </section>

      {/* Audience types */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">¿Con quién trabajamos?</p>
            <h2 className="font-display text-display-md text-ink">Para quién están pensados nuestros estudios</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="rounded-sm p-7 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-6 h-px mb-4" style={{ background: "linear-gradient(to right, #7BA4FF, #3D6BF5)" }} />
                  <h3 className="font-medium text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client logo marquee */}
      <section className="section-divider-top section-divider-bottom">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <Reveal className="mb-8">
            <p className="section-label mb-3">Empresas que confían en nosotros</p>
            <h2 className="font-display text-display-md text-ink">Nuestros clientes</h2>
          </Reveal>
        </div>

        {/* Full-width marquee — intentionally outside max-w container */}
        <LogoMarquee />

        <p className="text-center text-xs text-muted/40 mt-6 pb-6">
          Logos de referencia · Los logotipos reales se actualizarán próximamente
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #060810 0%, #0D1430 50%, #060810 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(61,107,245,0.4), transparent)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="font-display text-display-md text-white mb-5">
              ¿Querés ser nuestro próximo cliente?
            </h2>
            <p className="text-white/60 mb-8">
              Contanos qué necesitás investigar y evaluamos cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-ghost">Solicitar un estudio</Link>
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
