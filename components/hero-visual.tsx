"use client";

import { motion } from "framer-motion";
import { studies } from "@/lib/studies";

const categoryColor: Record<string, string> = {
  Consumidor: "rgb(var(--c-accent))",
  Marcas:     "rgb(var(--c-accent))",
  Empresas:   "rgb(var(--c-accent))",
};

export default function HeroVisual() {
  return (
    <motion.div
      className="relative w-full max-w-sm select-none"
      aria-hidden="true"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
    >
      {/* Main card */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "rgb(var(--c-surface))",
          border: "1px solid rgb(var(--c-border))",
          boxShadow: "0 32px 80px -24px rgb(var(--c-ink) / 0.25), 0 4px 16px -8px rgb(var(--c-ink) / 0.10)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: "1px solid rgb(var(--c-border))", background: "rgb(var(--c-surface))" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgb(var(--c-accent))" }} />
            <span className="text-[8px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "rgb(var(--c-accent))" }}>
              Estudios disponibles
            </span>
          </div>
          <span className="text-[8px] font-bold px-2 py-0.5 rounded-sm"
            style={{ background: "rgb(var(--c-accent-soft))", color: "rgb(var(--c-accent))" }}>
            {studies.filter(s => s.available).length} activos
          </span>
        </div>

        {/* Study list */}
        <div className="px-5 py-2">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              className={`board-row board-row-${i + 1}`}
            >
              <div className="flex items-start justify-between gap-3 py-3"
                style={{ borderBottom: i < studies.length - 1 ? "1px solid rgb(var(--c-border))" : "none" }}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[8px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: categoryColor[study.category] ?? "rgb(var(--c-accent))" }}>
                      {study.category}
                    </span>
                  </div>
                  <p className="text-[9px] font-medium leading-snug text-ink/75 line-clamp-2">
                    {study.title}
                  </p>
                </div>
                <span
                  className="text-[7px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-sm flex-shrink-0 mt-0.5"
                  style={study.available
                    ? { background: "rgb(var(--c-accent-soft))", color: "rgb(var(--c-accent))" }
                    : { background: "rgb(var(--c-surface))", color: "rgb(var(--c-muted))" }
                  }
                >
                  {study.available ? "Disponible" : "Próximamente"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ borderTop: "1px solid rgb(var(--c-border))", background: "rgb(var(--c-surface))" }}
        >
          <span className="text-[7px] text-ink/35">Catálogo · Uruguay</span>
          <span className="text-[8px] font-bold" style={{ color: "rgb(var(--c-accent))" }}>
            Ver catálogo →
          </span>
        </div>
      </div>

      {/* Floating tag */}
      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
      >
        <div className="rounded-lg px-3 py-2"
          style={{
            background: "rgb(var(--c-surface))",
            border: "1px solid rgb(var(--c-border))",
            boxShadow: "0 12px 28px -10px rgb(var(--c-ink) / 0.22)",
          }}
        >
          <p className="text-[7px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "rgb(var(--c-accent))" }}>Formato</p>
          <p className="text-xs font-semibold text-ink">PDF + base de datos</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
