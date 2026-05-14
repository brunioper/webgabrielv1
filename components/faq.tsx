"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const items = [
  {
    q: "¿Qué tipo de empresas pueden consultar?",
    a: "Trabajamos con empresas de todos los tamaños y propietarios particulares en Uruguay. No hay un mínimo de tamaño ni sector: si la necesidad existe y la información puede aportar valor, podemos ayudarte.",
  },
  {
    q: "¿Trabajan con estudios prontos y proyectos a medida?",
    a: "Sí, las dos modalidades. Contamos con estudios listos para adquirir sobre consumidores, mercado inmobiliario y digitalización empresarial. También diseñamos investigaciones completamente a medida según tus objetivos, presupuesto y plazos.",
  },
  {
    q: "¿También acompañan la implementación?",
    a: "Cuando el proyecto lo requiere, sí. El trabajo no siempre termina con el entregable. Si la ejecución necesita seguimiento, ajuste y soporte, también acompañamos esa etapa.",
  },
  {
    q: "¿La primera consulta puede ser virtual?",
    a: "Sí. Trabajamos con equipos en Montevideo de forma presencial y virtual. La primera consulta se puede coordinar fácilmente por la modalidad que mejor funcione para vos.",
  },
  {
    q: "¿Se puede consultar por gestión de propiedades?",
    a: "Sí. La gestión de propiedades residenciales y comerciales es una de nuestras tres áreas de trabajo: alquileres, coordinación de proveedores, mantenimiento y control de rendimiento del activo.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border" role="list">
      {items.map((item, i) => (
        <FAQItem
          key={i}
          question={item.q}
          answer={item.a}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div role="listitem">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left py-5 flex items-start justify-between gap-6 group"
      >
        <span
          className={`font-display text-lg font-semibold leading-snug transition-colors duration-200
            ${isOpen ? "text-accent" : "text-ink group-hover:text-accent"}`}
        >
          {question}
        </span>

        {/* +/× icon */}
        <span
          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center
                      transition-all duration-200
                      ${isOpen
                        ? "bg-accent border-accent"
                        : "border-border group-hover:border-accent/50"
                      }`}
          aria-hidden="true"
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          >
            <path
              d="M4.5 1v7M1 4.5h7"
              stroke={isOpen ? "white" : "currentColor"}
              strokeWidth="1.5"
              strokeLinecap="round"
              className={isOpen ? "" : "text-muted"}
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base text-muted leading-relaxed pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
