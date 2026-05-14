// Server component — CSS animations handle motion, no JS needed

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[420px] md:h-[480px] select-none" aria-hidden="true">
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#C8C3BC" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Card 1 — research card, floats slowly upward */}
      <div className="hero-float-a absolute top-4 left-0 z-0">
        <div className="w-52 bg-white border border-border rounded shadow-sm p-4" style={{ transform: "rotate(-2.5deg)" }}>
          <p className="text-[8px] font-semibold text-muted uppercase tracking-[0.12em] mb-2">
            Análisis de Mercado
          </p>
          <div className="space-y-1.5 mb-3">
            <div className="h-1.5 bg-sand rounded-full w-full" />
            <div className="h-1.5 bg-sand rounded-full w-4/5" />
            <div className="h-1.5 bg-sand rounded-full w-11/12" />
            <div className="h-1.5 bg-sand rounded-full w-3/5" />
          </div>
          <div className="flex items-end gap-1 h-9">
            {[55, 80, 60, 92, 70, 84].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i % 2 === 1 ? "bg-accent opacity-60" : "bg-accent-light"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card 2 — main insight card, gentle float */}
      <div className="hero-float-b absolute top-12 left-[20%] md:left-[15%] z-10">
        <div className="w-64 bg-white border border-border rounded overflow-hidden shadow-lg">
          <div className="h-[3px] bg-accent" />
          <div className="p-5">
            <p className="text-[8px] font-semibold text-ink uppercase tracking-[0.12em] mb-3">
              Conclusión estratégica
            </p>
            <div className="space-y-1.5 mb-4">
              <div className="h-1.5 bg-sand rounded-full w-full" />
              <div className="h-1.5 bg-sand rounded-full w-3/4" />
              <div className="h-1.5 bg-sand rounded-full w-11/12" />
              <div className="h-1.5 bg-sand rounded-full w-2/3" />
            </div>
            <div className="flex items-end gap-3">
              <div>
                <p className="font-display font-bold text-ink leading-none" style={{ fontSize: "2rem" }}>87%</p>
                <p className="text-[8px] text-muted mt-0.5">oportunidad identificada</p>
              </div>
              {/* Sparkline draws itself on load */}
              <svg viewBox="0 0 100 32" className="flex-1 h-8" fill="none">
                <polyline
                  className="sparkline"
                  points="0,28 18,20 36,23 54,12 72,16 100,4"
                  stroke="#1B3A6E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="100" cy="4" r="3" fill="#1B3A6E" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 — process card, drifts downward slightly */}
      <div className="hero-float-c absolute bottom-10 right-0 z-5">
        <div className="w-56 bg-white border border-border rounded shadow-sm p-4" style={{ transform: "rotate(1.5deg)" }}>
          <p className="text-[8px] font-semibold text-muted uppercase tracking-[0.12em] mb-3">
            Plan de acción
          </p>
          <div className="flex items-center mb-2">
            {["01", "02", "03", "04"].map((n, i) => (
              <div key={n} className="flex items-center flex-1 last:flex-none">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 ${
                    i === 0
                      ? "bg-accent text-white"
                      : i === 1
                      ? "border border-accent text-accent"
                      : "border border-border text-muted"
                  }`}
                >
                  {n}
                </div>
                {i < 3 && <div className="flex-1 h-px bg-border mx-0.5" />}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {["Análisis", "Decisión", "Plan", "Acción"].map((s, i) => (
              <span key={s} className={`text-[7px] ${i === 1 ? "text-accent font-semibold" : "text-muted"}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card 4 — small data label, independent drift */}
      <div className="hero-float-d absolute bottom-32 left-[5%] z-10">
        <div className="bg-white border border-border rounded px-3 py-2 shadow-sm">
          <p className="text-[7px] text-muted uppercase tracking-wider">Segmento</p>
          <p className="text-sm font-display font-semibold text-ink">B2B · PME</p>
        </div>
      </div>

      {/* Pulsing dots */}
      <div className="dot-breathe-a absolute top-10 right-6 w-2 h-2 rounded-full bg-accent" />
      <div className="dot-breathe-b absolute top-24 right-12 w-1.5 h-1.5 rounded-full bg-accent" />
      <div className="dot-breathe-c absolute bottom-[45%] left-[8%] w-1.5 h-1.5 rounded-full bg-accent" />

      {/* Connecting dotted line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" overflow="visible">
        <line
          x1="30%" y1="62%" x2="60%" y2="78%"
          stroke="#C8C3BC" strokeWidth="0.75" strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
