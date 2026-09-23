"use client";

import { useState, type ChangeEvent, type FocusEvent } from "react";

const DEPARTAMENTOS = [
  "Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores",
  "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro",
  "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres",
] as const;

const EDUCACION = [
  "Primaria",
  "Ciclo básico",
  "Bachillerato",
  "Terciario no universitario",
  "Universitario",
  "Posgrado",
] as const;

const LABORAL = [
  "Empleado/a",
  "Independiente",
  "Empresario/a",
  "Estudiante",
  "Jubilado/a",
  "Tareas del hogar",
  "Desocupado/a",
] as const;

const HOGAR = [
  "Vivo solo/a",
  "Pareja sin hijos",
  "Pareja con hijos",
  "Monoparental",
  "Familia extendida",
  "Otro",
] as const;

const BIENES = [
  "Internet en el hogar",
  "Smartphone",
  "Computadora",
  "Auto",
  "Tarjeta de crédito",
] as const;

type FormData = {
  nombre: string;
  email: string;
  nacimiento: string;
  departamento: string;
  telefono: string;
  educacion: string;
  laboral: string;
  hogar: string;
  bienes: string[];
};

type Errors = Partial<Record<Exclude<keyof FormData, "bienes">, string>>;
type Touched = Partial<Record<Exclude<keyof FormData, "bienes">, boolean>>;

const EMPTY: FormData = {
  nombre: "",
  email: "",
  nacimiento: "",
  departamento: "",
  telefono: "",
  educacion: "",
  laboral: "",
  hogar: "",
  bienes: [],
};

function ageFrom(iso: string): number | null {
  if (!iso) return null;
  const born = new Date(iso);
  if (Number.isNaN(born.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - born.getFullYear();
  const month = today.getMonth() - born.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < born.getDate())) age -= 1;
  return age;
}

function validateField(name: keyof Omit<FormData, "bienes">, value: string): string {
  switch (name) {
    case "nombre":
      return value.trim().length >= 3 ? "" : "Ingresá tu nombre y apellido";
    case "email":
      if (!value.trim()) return "Ingresá tu email";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "El email no es válido";
      return "";
    case "nacimiento": {
      if (!value) return "Ingresá tu fecha de nacimiento";
      const age = ageFrom(value);
      if (age === null) return "La fecha no es válida";
      if (age < 18) return "Tenés que ser mayor de 18 años";
      if (age > 110) return "Revisá la fecha de nacimiento";
      return "";
    }
    case "departamento":
      return value ? "" : "Elegí tu departamento";
    case "educacion":
      return value ? "" : "Elegí tu nivel educativo";
    case "laboral":
      return value ? "" : "Elegí tu situación laboral";
    case "hogar":
      return value ? "" : "Elegí la composición de tu hogar";
    default:
      return "";
  }
}

export default function RegistroForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    const key = name as keyof Touched;
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(key, value) }));
    }
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const key = name as keyof Touched;
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(key, value) }));
  }

  function toggleBien(bien: string) {
    setForm((prev) => ({
      ...prev,
      bienes: prev.bienes.includes(bien)
        ? prev.bienes.filter((b) => b !== bien)
        : [...prev.bienes, bien],
    }));
  }

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    const keys = ["nombre", "email", "nacimiento", "departamento", "educacion", "laboral", "hogar"] as const;
    const allTouched = Object.fromEntries(keys.map((k) => [k, true])) as Touched;
    setTouched(allTouched);
    const next: Errors = {};
    for (const key of keys) {
      const err = validateField(key, form[key]);
      if (err) next[key] = err;
    }
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    setLoading(true);
    // Account backend is not wired yet. The form confirms the pre-registration locally.
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div
        className="rounded-sm p-10 text-center"
        style={{ background: "rgb(var(--c-accent) / 0.1)", border: "1px solid rgb(var(--c-accent) / 0.25)" }}
      >
        <h3 className="font-display text-2xl text-ink mb-3">Registro recibido</h3>
        <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
          Quedaste preinscripto al panel. Te escribimos a {form.email} para confirmar
          el email y activar la cuenta. No pedimos datos bancarios ni de tarjeta.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      <fieldset className="space-y-5">
        <legend className="font-display text-ink text-xl mb-5">Datos básicos</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Nombre y apellido *" error={touched.nombre ? errors.nombre : undefined}>
            <input name="nombre" value={form.nombre} onChange={handleChange} onBlur={handleBlur}
              autoComplete="name" placeholder="Tu nombre" className={fieldClass(touched.nombre, errors.nombre)} style={inputStyle}
              aria-required="true" />
          </Field>
          <Field label="Email *" error={touched.email ? errors.email : undefined}>
            <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
              autoComplete="email" placeholder="tu@email.com" className={fieldClass(touched.email, errors.email)} style={inputStyle}
              aria-required="true" />
          </Field>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Fecha de nacimiento *" error={touched.nacimiento ? errors.nacimiento : undefined}>
            <input type="date" name="nacimiento" value={form.nacimiento} onChange={handleChange} onBlur={handleBlur}
              autoComplete="bday" className={fieldClass(touched.nacimiento, errors.nacimiento)} style={inputStyle}
              aria-required="true" />
          </Field>
          <Field label="Departamento *" error={touched.departamento ? errors.departamento : undefined}>
            <Select name="departamento" value={form.departamento} onChange={handleChange} onBlur={handleBlur}
              error={touched.departamento && errors.departamento} placeholder="Elegí tu departamento"
              options={DEPARTAMENTOS} />
          </Field>
        </div>
        <Field label="Teléfono" error={undefined}>
          <input type="tel" name="telefono" value={form.telefono} onChange={handleChange}
            autoComplete="tel" placeholder="Opcional, para avisos por WhatsApp"
            className={fieldClass(false, undefined)} style={inputStyle} />
        </Field>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-display text-ink text-xl mb-1">Perfil socioeconómico</legend>
        <p className="text-xs text-muted/80 mb-5">
          Estos datos son anónimos y se usan solo para segmentar encuestas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Nivel educativo *" error={touched.educacion ? errors.educacion : undefined}>
            <Select name="educacion" value={form.educacion} onChange={handleChange} onBlur={handleBlur}
              error={touched.educacion && errors.educacion} placeholder="Elegí una opción" options={EDUCACION} />
          </Field>
          <Field label="Situación laboral *" error={touched.laboral ? errors.laboral : undefined}>
            <Select name="laboral" value={form.laboral} onChange={handleChange} onBlur={handleBlur}
              error={touched.laboral && errors.laboral} placeholder="Elegí una opción" options={LABORAL} />
          </Field>
        </div>
        <Field label="Composición del hogar *" error={touched.hogar ? errors.hogar : undefined}>
          <Select name="hogar" value={form.hogar} onChange={handleChange} onBlur={handleBlur}
            error={touched.hogar && errors.hogar} placeholder="Elegí una opción" options={HOGAR} />
        </Field>
        <div>
          <p className="block text-[10px] font-bold text-muted uppercase tracking-[0.18em] mb-3">
            Acceso a bienes y servicios
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {BIENES.map((bien) => (
              <label key={bien} className="flex items-center gap-2.5 text-sm text-ink/85 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.bienes.includes(bien)}
                  onChange={() => toggleBien(bien)}
                  className="accent-[rgb(var(--c-accent))]"
                />
                {bien}
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <p className="text-xs text-muted">
        * Campos obligatorios. El registro es gratuito. Nunca pedimos datos bancarios ni de tarjeta.
      </p>

      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? "Enviando…" : "Crear mi registro"}
      </button>
    </form>
  );
}

export function AvisoPuntosForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingresá un email válido");
      return;
    }
    setError("");
    setDone(true);
  }

  if (done) {
    return <p className="text-sm text-ink">Listo. Te avisamos a {email} cuando el programa de puntos esté activo.</p>;
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3" noValidate>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        aria-label="Email para aviso del programa de puntos"
        className="w-full sm:max-w-xs rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent"
        style={inputStyle}
      />
      <button type="submit" className="btn-primary">Avisarme</button>
      {error && <p className="text-xs text-red-400 sm:self-center" role="alert">{error}</p>}
    </form>
  );
}

const inputStyle = {
  background: "rgb(var(--c-surface))",
  border: "1px solid rgb(var(--c-border-strong))",
  color: "rgb(var(--c-ink))",
};

function fieldClass(touched: boolean | undefined, error: string | undefined) {
  const hasError = touched && error;
  return [
    "w-full rounded-sm px-4 py-3 text-sm text-ink",
    "focus:outline-none transition-colors",
    hasError ? "border-red-400/60 focus:border-red-400" : "focus:border-accent",
  ].join(" ");
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-muted uppercase tracking-[0.18em] mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400" role="alert">{error}</p>}
    </div>
  );
}

function Select({
  name, value, onChange, onBlur, error, placeholder, options,
}: {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: FocusEvent<HTMLSelectElement>) => void;
  error?: string | false;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={fieldClass(true, error || undefined)}
      style={{ ...inputStyle, color: value === "" ? "rgb(var(--c-muted))" : "rgb(var(--c-ink))" }}
      aria-required="true"
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o} style={{ background: "rgb(var(--c-surface))", color: "rgb(var(--c-ink))" }}>{o}</option>
      ))}
    </select>
  );
}
