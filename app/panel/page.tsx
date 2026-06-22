import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { FEATURES } from "@/lib/features";
import { WHATSAPP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Panel Uruguay | Sumate y participá en encuestas" },
  description:
    "Panel propio de personas con perfil INSE completo en Uruguay. Registrate gratis para participar respondiendo encuestas online. Sin costo y sin datos bancarios.",
  openGraph: {
    title: "Panel Uruguay | Sumate y participá en encuestas",
    description:
      "El motor de nuestros estudios: un panel local con perfil INSE. Registro gratuito y 100% online.",
    type: "website",
  },
};

// Registration backend is not wired yet — see FEATURES.panelRegistration

const steps = [
  { n: "1", title: "Completá el formulario de registro", desc: "Nombre, email y una contraseña. Con eso ya tenés tu cuenta creada." },
  { n: "2", title: "Confirmá tu email", desc: "Te mandamos un correo de verificación. Hacé clic en el link para activar tu cuenta." },
  { n: "3", title: "Completá tu perfil", desc: "Respondé unas preguntas sobre vos: edad, departamento, nivel educativo y situación laboral. Esto nos ayuda a enviarte las encuestas que más se ajustan a tu perfil." },
  { n: "4", title: "Empezá a participar", desc: "Vas a recibir invitaciones a encuestas por email. Respondés desde donde quieras, a tu ritmo." },
];

const datosBasicos = [
  "Nombre y apellido",
  "Email",
  "Fecha de nacimiento",
  "Departamento de residencia",
  "Teléfono (opcional, para avisos por WhatsApp)",
];

const perfilSocio = [
  "Nivel educativo alcanzado",
  "Situación laboral actual",
  "Composición del hogar",
  "Acceso a bienes y servicios",
];

export default function Panel() {
  if (!FEATURES.panelUruguay) return null;

  return (
    <>
      {/* Header */}
      <section className="bg-bg py-20 md:py-28 section-divider-bottom">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-4">Panel Uruguay</p>
          <h1 className="font-display text-display-xl text-ink mb-6 leading-tight">
            Sumate al panel y participá en encuestas.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl mb-8">
            El motor de nuestros estudios es un panel propio de personas con
            perfil INSE completo en Uruguay. Si querés participar respondiendo
            encuestas, el registro es gratuito, 100% online y toma menos de
            5 minutos.
          </p>
          <p className="text-sm text-muted/80 mb-8">
            Solo necesitás tener más de 18 años y residir en Uruguay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contacto" className="btn-primary">
              Quiero participar <span className="text-xs">→</span>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How to participate */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Cómo participar</p>
            <h2 className="font-display text-display-md text-ink">Pasos para unirte</h2>
          </Reveal>

          <div style={{ borderTop: "1px solid rgb(var(--c-border))" }}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="flex items-start gap-6 md:gap-10 py-7"
                  style={{ borderBottom: "1px solid rgb(var(--c-border))" }}>
                  <span className="font-display text-accent flex-shrink-0 leading-none"
                    style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-ink text-lg mb-1.5" style={{ letterSpacing: "-0.01em" }}>
                      {s.title}
                    </h3>
                    <p className="text-base text-muted leading-relaxed max-w-2xl">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="card mt-10 flex items-start gap-4">
              <span className="text-accent text-xl leading-none mt-0.5" aria-hidden="true">✓</span>
              <p className="text-sm text-ink/90 leading-relaxed">
                <span className="font-semibold">El registro es completamente gratuito.</span>{" "}
                Nunca te vamos a pedir datos bancarios ni de tarjeta de crédito. Solo
                necesitamos saber quién sos para enviarte las encuestas correctas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What data we ask */}
      <section className="bg-bg py-20 md:py-28 section-divider-top">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="section-label mb-4">Tus datos</p>
            <h2 className="font-display text-display-md text-ink">¿Qué datos pedimos al registrarte?</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card h-full">
                <h3 className="font-display text-ink text-lg mb-5" style={{ letterSpacing: "-0.01em" }}>
                  Datos básicos
                </h3>
                <ul className="space-y-2.5">
                  {datosBasicos.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card h-full">
                <h3 className="font-display text-ink text-lg mb-5" style={{ letterSpacing: "-0.01em" }}>
                  Perfil socioeconómico
                </h3>
                <ul className="space-y-2.5">
                  {perfilSocio.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />{d}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted/70 leading-relaxed mt-5">
                  Estos datos son anónimos y se usan solo para segmentar encuestas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "rgb(var(--c-deep))" }}>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="font-display text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", letterSpacing: "-0.02em", lineHeight: "1.1" }}>
              ¿Querés sumarte al panel?
            </h2>
            <p className="text-white/55 mb-10 max-w-md mx-auto leading-relaxed">
              Escribinos y te avisamos apenas abramos el registro, o coordinamos tu participación directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-light">
                Escribir por WhatsApp
              </a>
              <Link href="/contacto" className="btn-ghost">Dejar mis datos</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
