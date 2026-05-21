"use client";

import { useState } from "react";
import { studies, studyCategories, type StudyCategory } from "@/lib/studies";
import { StudyCard } from "@/components/study-card";

export function StudyCatalog() {
  const [active, setActive] = useState<StudyCategory>("Todos");

  const filtered =
    active === "Todos" ? studies : studies.filter((s) => s.category === active);

  return (
    <>
      {/* Category filter */}
      <div
        className="flex flex-wrap gap-2 mb-12"
        role="group"
        aria-label="Filtrar por categoría"
      >
        {studyCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className="px-4 py-1.5 rounded-sm text-sm transition-all duration-200"
            style={
              active === cat
                ? { background: "#2E7DC8", color: "#fff", border: "1px solid #2E7DC8" }
                : {
                    background: "transparent",
                    color: "#AAB8C8",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filtered.map((study) => (
          <StudyCard key={study.id} study={study} />
        ))}
      </div>

      {/* Coming soon — always visible below filtered results */}
      <div
        className="rounded-sm p-7 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8"
        style={{ border: "1px dashed rgba(255,255,255,0.15)" }}
      >
        <div
          className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <span className="text-lg text-muted leading-none select-none">+</span>
        </div>
        <div>
          <p className="text-sm font-medium text-ink mb-1">Nuevos estudios en preparación</p>
          <p className="text-xs text-muted leading-relaxed">
            Escribinos para consultar disponibilidad o solicitar un estudio a medida.
          </p>
        </div>
      </div>
    </>
  );
}
