"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    q: "¿Qué tipo de empresas pueden consultar?",
    a: "Trabajamos con empresas de todos los tamaños en Uruguay: desde startups y PyMEs hasta agencias y organizaciones más grandes. Si necesitás información para tomar una decisión mejor, podemos ayudarte.",
  },
  {
    q: "¿Trabajan con estudios prontos y proyectos a medida?",
    a: "Sí, las dos modalidades. Contamos con estudios listos para adquirir sobre consumidores, marcas y empresas. También diseñamos investigaciones completamente a medida según tus objetivos, presupuesto y plazos.",
  },
  {
    q: "¿Cuánto tiempo lleva un estudio ad hoc?",
    a: "Depende del alcance, la metodología y el tamaño de la muestra. Un estudio simple puede estar listo en dos a tres semanas. Los proyectos más complejos pueden requerir cuatro a ocho semanas. Lo definimos juntos en la primera conversación.",
  },
  {
    q: "¿También acompañan la implementación de los insights?",
    a: "Cuando el proyecto lo requiere, sí. Entregamos recomendaciones claras y accionables, y si la empresa necesita apoyo para aplicarlas en su estrategia o decisiones, también acompañamos esa etapa.",
  },
  {
    q: "¿La primera consulta puede ser virtual?",
    a: "Sí. Trabajamos con equipos en Montevideo de forma presencial y virtual. La primera consulta se puede coordinar fácilmente por la modalidad que mejor funcione para vos.",
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

        <span
          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center
                      transition-all duration-200"
          style={{
            background: isOpen ? "#2E7DC8" : "transparent",
            borderColor: isOpen ? "#2E7DC8" : "rgba(255,255,255,0.2)",
          }}
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
              stroke={isOpen ? "white" : "#AAB8C8"}
              strokeWidth="1.5"
              strokeLinecap="round"
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
