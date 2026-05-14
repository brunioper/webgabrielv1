import type { Study } from "@/lib/studies";
import { WHATSAPP_URL } from "@/lib/config";

export function StudyCard({ study }: { study: Study }) {
  return (
    <article
      aria-label={study.title}
      className="border border-border rounded-sm bg-bg flex flex-col h-full
                 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-accent/20"
    >
      {/* Availability indicator */}
      <div className={`h-[3px] rounded-t-sm ${study.available ? "bg-accent" : "bg-border"}`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="section-label">{study.category}</span>
          {!study.available && (
            <span className="text-[10px] bg-sand border border-border text-muted px-2.5 py-1 rounded-sm">
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
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-muted border-t border-border pt-4 mb-6">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.14em] text-muted/55 mb-0.5">Fecha</dt>
            <dd>{study.date}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.14em] text-muted/55 mb-0.5">Formato</dt>
            <dd>{study.format}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-[10px] uppercase tracking-[0.14em] text-muted/55 mb-0.5">Precio</dt>
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
          <p className="text-sm text-muted/55">Disponible próximamente</p>
        )}
      </div>
    </article>
  );
}
