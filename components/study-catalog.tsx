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
            className={`px-4 py-1.5 rounded-sm text-sm border transition-all duration-200
              ${
                active === cat
                  ? "bg-ink text-white border-ink"
                  : "border-border text-muted hover:border-accent/40 hover:text-ink"
              }`}
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
      <div className="border border-dashed border-border rounded-sm p-7
                      flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8">
        <div className="w-8 h-8 rounded-full border border-border flex-shrink-0 flex items-center justify-center">
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
