"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const dataRows = [
  { label: "Reconocimiento de marca",  value: 78 },
  { label: "Intención de compra",      value: 62 },
  { label: "Satisfacción del cliente", value: 91 },
];

export default function HeroVisual() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <motion.div
      className="relative w-full max-w-sm select-none"
      aria-hidden="true"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
    >
      {/* Main data board */}
      <div
        className="rounded-sm overflow-hidden"
        style={{
          background: "rgba(12,10,7,0.97)",
          border: "1px solid rgba(203,123,53,0.28)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 40px rgba(203,123,53,0.08)",
        }}
      >
        {/* Terminal header */}
        <div
          className="flex items-center justify-between px-5 py-2.5"
          style={{ borderBottom: "1px solid rgba(203,123,53,0.18)", background: "rgba(203,123,53,0.05)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#CB7B35" }} />
            <span
              className="text-[8px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "rgba(203,123,53,0.75)" }}
            >
              Panel · Mercado UY
            </span>
          </div>
          <span className="text-[8px] tabular-nums" style={{ color: "rgba(203,123,53,0.35)", fontFamily: "monospace" }}>
            {mounted ? new Date().toLocaleDateString("es-UY", { day: "2-digit", month: "short", year: "2-digit" }) : "—"}
          </span>
        </div>

        {/* Big stat + sparkline */}
        <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(203,123,53,0.1)" }}>
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(203,123,53,0.55)" }}>
            Índice de oportunidad
          </p>
          <div className="flex items-end gap-4">
            <p
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(3rem,7vw,4rem)", color: "#CB7B35", letterSpacing: "-0.02em" }}
            >
              87<span style={{ fontSize: "42%", opacity: 0.6 }}>%</span>
            </p>
            <div className="mb-1 flex-1 flex flex-col gap-1.5 items-end">
              <span
                className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-sm"
                style={{ background: "rgba(203,123,53,0.15)", color: "#E8B45A" }}
              >
                ↑ +23pp vs 2023
              </span>
              <svg viewBox="0 0 90 24" className="w-full h-6" fill="none">
                <polyline
                  className="sparkline"
                  points="0,20 15,14 30,17 45,8 62,11 90,2"
                  stroke="#CB7B35"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="90" cy="2" r="2.5" fill="#CB7B35" />
              </svg>
            </div>
          </div>
        </div>

        {/* Data rows */}
        <div className="px-5 py-4 space-y-3">
          {dataRows.map((row, i) => (
            <div key={row.label} className={`board-row board-row-${i + 1}`}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[8.5px] font-medium" style={{ color: "rgba(238,229,216,0.55)" }}>{row.label}</span>
                <span className="text-[8.5px] font-bold tabular-nums" style={{ color: "#E8B45A", fontFamily: "monospace" }}>{row.value}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(203,123,53,0.1)" }}>
                <div
                  className={`bar-fill bar-fill-${i + 1} h-full rounded-full`}
                  style={{ width: `${row.value}%`, background: "linear-gradient(to right, rgba(203,123,53,0.7), #E8B45A)" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer status */}
        <div
          className="px-5 py-2 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(203,123,53,0.1)", background: "rgba(203,123,53,0.03)" }}
        >
          <span className="text-[7px]" style={{ color: "rgba(203,123,53,0.35)" }}>n=400 · Área metropolitana Mvd.</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#CB7B35" }} />
            <span className="text-[7px]" style={{ color: "rgba(203,123,53,0.5)" }}>Live</span>
          </div>
        </div>
      </div>

      {/* Floating segment tag */}
      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
      >
        <div
          className="rounded-sm px-3 py-2"
          style={{
            background: "rgba(12,10,7,0.99)",
            border: "1px solid rgba(203,123,53,0.45)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
          }}
        >
          <p className="text-[7px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(203,123,53,0.55)" }}>Segmento</p>
          <p className="text-xs font-semibold text-ink">B2B · PyMEs</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
