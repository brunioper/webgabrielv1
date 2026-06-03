import type { Study } from "@/lib/studies";
import { WHATSAPP_URL } from "@/lib/config";

export function StudyCard({ study }: { study: Study }) {
  return (
    <article
      aria-label={study.title}
      className="flex flex-col h-full rounded-sm overflow-hidden
                 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E8F0",
      }}
    >
      {/* Availability indicator */}
      <div
        className="h-[3px] rounded-t-sm"
        style={{ background: study.available ? "#2952CB" : "#E5E8F0" }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="section-label">{study.category}</span>
          {!study.available && (
            <span className="text-[10px] border text-muted px-2.5 py-1 rounded-sm" style={{ borderColor: "#D2D8E4", background: "#FFFFFF" }}>
              Próximamente
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-display text-lg font-semibold text-ink mb-2.5 leading-snug flex-1">
          {study.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-6">{study.description}</p>

        {/* Metadata */}
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-muted pt-4 mb-6" style={{ borderTop: "1px solid #E5E8F0" }}>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.14em] mb-0.5" style={{ color: "#8A93A8" }}>Fecha</dt>
            <dd>{study.date}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.14em] mb-0.5" style={{ color: "#8A93A8" }}>Formato</dt>
            <dd>{study.format}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-[10px] uppercase tracking-[0.14em] mb-0.5" style={{ color: "#8A93A8" }}>Precio</dt>
            <dd className="font-semibold text-ink">{study.price}</dd>
          </div>
        </dl>

        {/* CTA */}
        {study.available ? (
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent
                       transition-all duration-300"
          >
            Solicitar información
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        ) : (
          <p className="text-sm" style={{ color: "#9AA3B2" }}>Disponible próximamente</p>
        )}
      </div>
    </article>
  );
}
