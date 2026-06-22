"use client";

import { useState, type ChangeEvent, type FocusEvent } from "react";

const AREA_OPTIONS = [
  "Estudios prontos",
  "Estudio ad hoc",
  "Investigación de mercado",
  "Consultoría estratégica",
  "Alianzas estratégicas",
  "Otro",
] as const;

type FormData = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  area: string;
  mensaje: string;
};

type Errors = Partial<Record<keyof FormData, string>>;
type Touched = Partial<Record<keyof FormData, boolean>>;

const EMPTY: FormData = { nombre: "", empresa: "", email: "", telefono: "", area: "", mensaje: "" };

function validateField(name: keyof FormData, value: string): string {
  switch (name) {
    case "nombre":  return value.trim() ? "" : "Ingresá tu nombre";
    case "email":
      if (!value.trim()) return "Ingresá tu email";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "El email no es válido";
      return "";
    case "area":    return value ? "" : "Seleccioná un área de interés";
    case "mensaje": return value.trim() ? "" : "Escribí un mensaje";
    default:        return "";
  }
}

function validateAll(data: FormData): Errors {
  return (Object.keys(data) as (keyof FormData)[]).reduce<Errors>((acc, key) => {
    const err = validateField(key, data[key]);
    if (err) acc[key] = err;
    return acc;
  }, {});
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
    }
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
  }

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true])) as Touched;
    setTouched(allTouched);
    const newErrors = validateAll(form);
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    setLoading(true);
    setSubmitError(null);
    // Replace with real submission logic (Resend, Formspree, etc.)
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  }

  function fieldClass(name: keyof FormData) {
    const hasError = touched[name] && errors[name];
    return [
      "w-full rounded-sm px-4 py-3 text-sm text-ink",
      "focus:outline-none transition-colors",
      hasError ? "border-red-400/60 focus:border-red-400" : "focus:border-accent",
    ].join(" ");
  }

  const inputStyle = {
    background: "rgb(var(--c-surface))",
    border: "1px solid rgb(var(--c-border-strong))",
    color: "rgb(var(--c-ink))",
  };
  if (submitted) {
    return (
      <div
        className="rounded-sm p-10 text-center"
        style={{ background: "rgb(var(--c-accent) / 0.1)", border: "1px solid rgb(var(--c-accent) / 0.25)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "rgb(var(--c-accent) / 0.15)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--c-accent))" strokeWidth="2.5" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-ink mb-2">Consulta enviada</h3>
        <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs mx-auto">
          Recibimos tu mensaje. Nos ponemos en contacto a la brevedad.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(EMPTY); setErrors({}); setTouched({}); }}
          className="text-xs font-bold uppercase tracking-[0.15em] text-accent hover:text-accent-warm transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nombre *" error={touched.nombre ? errors.nombre : undefined}>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} onBlur={handleBlur}
            autoComplete="name" placeholder="Tu nombre" className={fieldClass("nombre")} style={inputStyle}
            aria-required="true" aria-invalid={!!(touched.nombre && errors.nombre)} />
        </Field>
        <Field label="Empresa / organización" error={undefined}>
          <input type="text" name="empresa" value={form.empresa} onChange={handleChange} onBlur={handleBlur}
            autoComplete="organization" placeholder="Opcional" className={fieldClass("empresa")} style={inputStyle} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email *" error={touched.email ? errors.email : undefined}>
          <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
            autoComplete="email" placeholder="tu@email.com" className={fieldClass("email")} style={inputStyle}
            aria-required="true" aria-invalid={!!(touched.email && errors.email)} />
        </Field>
        <Field label="Teléfono" error={undefined}>
          <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} onBlur={handleBlur}
            autoComplete="tel" placeholder="+598 99 000 000" className={fieldClass("telefono")} style={inputStyle} />
        </Field>
      </div>

      <Field label="Área de interés *" error={touched.area ? errors.area : undefined}>
        <select name="area" value={form.area} onChange={handleChange} onBlur={handleBlur}
          className={fieldClass("area")} style={{ ...inputStyle, color: form.area === "" ? "rgb(var(--c-muted))" : "rgb(var(--c-ink))" }}
          aria-required="true" aria-invalid={!!(touched.area && errors.area)}>
          <option value="" disabled>Seleccioná una opción</option>
          {AREA_OPTIONS.map((o) => (
            <option key={o} value={o} style={{ background: "rgb(var(--c-surface))", color: "rgb(var(--c-ink))" }}>{o}</option>
          ))}
        </select>
      </Field>

      <Field label="Mensaje *" error={touched.mensaje ? errors.mensaje : undefined}>
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} onBlur={handleBlur}
          rows={5} placeholder="Contanos qué necesitás investigar o decidir…"
          className={`${fieldClass("mensaje")} resize-none`} style={inputStyle}
          aria-required="true" aria-invalid={!!(touched.mensaje && errors.mensaje)} />
      </Field>

      <p className="text-xs text-muted">* Campos obligatorios</p>

      {submitError && (
        <p role="alert" className="text-sm text-red-400 rounded-sm px-4 py-3" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
          {submitError}
        </p>
      )}

      <button type="submit" disabled={loading}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando…
          </>
        ) : "Enviar consulta"}
      </button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.18em] mb-2">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
            <path d="M5 1a4 4 0 100 8A4 4 0 005 1zm0 2.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zm0 4.25a.625.625 0 110-1.25.625.625 0 010 1.25z"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
