import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { FAQ } from "@/components/faq";
import { CONTACT, WHATSAPP_URL } from "@/lib/config";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: { absolute: "Contacto | Coordinar una consulta" },
  description:
    "Coordinar una consulta de investigación de mercado, consultoría estratégica o gestión operativa. Atendemos empresas y propietarios en Montevideo, Uruguay.",
  openGraph: {
    title: "Contacto | Coordinar una consulta",
    description:
      "Escribinos para coordinar una consulta. Respondemos a la brevedad. Trabajamos con empresas y propietarios en Montevideo, Uruguay.",
    type: "website",
  },
};

export default function Contacto() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Contacto</p>
          <h1 className="font-display text-display-xl text-ink mb-6">
            Hablemos de tu proyecto
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-xl">
            Completá el formulario o escribinos directamente por WhatsApp.
            Respondemos a la brevedad.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-2">
            <ContactInfoBlock />
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Preguntas frecuentes</p>
            <h2 className="font-display text-display-md text-ink">
              Dudas comunes antes de consultar
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactInfoBlock() {
  return (
    <div className="space-y-8">
      <div>
        <p className="section-label mb-3">WhatsApp</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-sm text-sm font-medium
                     transition-all duration-300 hover:bg-accent/90 hover:-translate-y-px hover:shadow-lg"
        >
          <WhatsAppIcon />
          Escribir por WhatsApp
        </a>
      </div>

      <div>
        <p className="section-label mb-2">Teléfono</p>
        <a
          href={CONTACT.phoneHref}
          className="text-base text-ink hover:text-accent transition-colors"
        >
          {CONTACT.phone}
        </a>
      </div>

      <div>
        <p className="section-label mb-2">Email</p>
        <a
          href={CONTACT.emailHref}
          className="text-base text-ink hover:text-accent transition-colors break-all"
        >
          {CONTACT.email}
        </a>
      </div>

      <div>
        <p className="section-label mb-2">Ubicación</p>
        <p className="text-base text-ink">{CONTACT.location}</p>
        <p className="text-sm text-muted mt-1">{CONTACT.meetings}</p>
      </div>

      <div className="w-10 h-px bg-border" />

      <p className="text-sm text-muted leading-relaxed">
        Respondemos consultas de lunes a viernes. Para temas urgentes, WhatsApp
        es la vía más rápida.
      </p>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
