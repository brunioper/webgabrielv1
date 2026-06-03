"use client";

import { motion } from "framer-motion";
import { studies } from "@/lib/studies";

const categoryColor: Record<string, string> = {
  Consumidor: "rgba(41,82,203,0.8)",
  Marcas:     "rgba(107,143,255,0.8)",
  Empresas:   "rgba(41,82,203,0.6)",
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
        className="rounded-sm overflow-hidden"
        style={{
          background: "rgba(5,6,12,0.97)",
          border: "1px solid rgba(41,82,203,0.28)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 40px rgba(41,82,203,0.08)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-2.5"
          style={{ borderBottom: "1px solid rgba(41,82,203,0.18)", background: "rgba(41,82,203,0.05)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2952CB" }} />
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "rgba(41,82,203,0.75)" }}>
              Estudios disponibles
            </span>
          </div>
          <span className="text-[8px] font-bold px-2 py-0.5 rounded-sm"
            style={{ background: "rgba(41,82,203,0.15)", color: "#6B8FFF" }}>
            {studies.filter(s => s.available).length} activos
          </span>
        </div>

        {/* Study list */}
        <div className="px-5 py-4 space-y-3">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              className={`board-row board-row-${i + 1}`}
            >
              <div className="flex items-start justify-between gap-3 py-2.5"
                style={{ borderBottom: i < studies.length - 1 ? "1px solid rgba(41,82,203,0.08)" : "none" }}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[8px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: categoryColor[study.category] ?? "rgba(41,82,203,0.7)" }}>
                      {study.category}
                    </span>
                  </div>
                  <p className="text-[9px] font-medium leading-snug text-ink/70 line-clamp-2">
                    {study.title}
                  </p>
                </div>
                <span
                  className="text-[7px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-sm flex-shrink-0 mt-0.5"
                  style={study.available
                    ? { background: "rgba(41,82,203,0.15)", color: "#6B8FFF" }
                    : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }
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
          style={{ borderTop: "1px solid rgba(41,82,203,0.1)", background: "rgba(41,82,203,0.03)" }}
        >
          <span className="text-[7px] text-ink/30">Catálogo · Uruguay</span>
          <span className="text-[8px] font-semibold" style={{ color: "#6B8FFF" }}>
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
        <div className="rounded-sm px-3 py-2"
          style={{
            background: "rgba(5,6,12,0.99)",
            border: "1px solid rgba(41,82,203,0.45)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
          }}
        >
          <p className="text-[7px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(41,82,203,0.55)" }}>Formato</p>
          <p className="text-xs font-semibold text-ink">PDF + base de datos</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
