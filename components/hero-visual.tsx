// Server component — CSS animations only, no JS

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[420px] md:h-[480px] select-none" aria-hidden="true">
      {/* Data grid background — slightly higher opacity for presence */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2E7DC8" strokeWidth="0.6" />
          </pattern>
          {/* Fade out toward left edge */}
          <linearGradient id="gridFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="30%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </linearGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
      </svg>

      {/* Card 1 — Market analysis bars */}
      <div className="hero-float-a absolute top-4 left-0 z-0">
        <div className="glass-card w-52 rounded-sm p-4" style={{ transform: "rotate(-2deg)" }}>
          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(110,231,249,0.7)" }}>
            Análisis de Mercado
          </p>
          <div className="space-y-1.5 mb-3">
            {[100, 80, 95, 65].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full" style={{ width: `${w}%`, background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-full" style={{ width: `${[68, 55, 80, 45][i]}%`, background: `linear-gradient(to right, #2E7DC8, #6EE7F9)` }} />
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1 h-9">
            {[55, 80, 60, 92, 70, 84].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i % 2 === 1
                    ? "linear-gradient(to top, #2E7DC8, #6EE7F9)"
                    : "rgba(46,125,200,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card 2 — Insight card */}
      <div className="hero-float-b absolute top-12 left-[20%] md:left-[15%] z-10">
        <div className="glass-card w-64 rounded-sm overflow-hidden">
          <div className="h-[2px]" style={{ background: "linear-gradient(to right, #6EE7F9, #2E7DC8, rgba(46,125,200,0.2))" }} />
          <div className="p-5">
            <p className="text-[8px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(110,231,249,0.7)" }}>
              Insight estratégico
            </p>
            <div className="space-y-1.5 mb-4">
              {[100, 75, 90, 60].map((w, i) => (
                <div key={i} className="h-1 rounded-full" style={{ width: `${w}%`, background: "rgba(255,255,255,0.07)" }}>
                  <div className="h-full rounded-full" style={{ width: `${[80, 60, 72, 45][i]}%`, background: "rgba(110,231,249,0.45)" }} />
                </div>
              ))}
            </div>
            <div className="flex items-end gap-3">
              <div>
                <p
                  className="font-bold leading-none"
                  style={{
                    fontSize: "2rem",
                    backgroundImage: "linear-gradient(135deg, #6EE7F9 0%, #5AA9FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  87%
                </p>
                <p className="text-[8px] mt-0.5" style={{ color: "#AAB8C8" }}>oportunidad identificada</p>
              </div>
              <svg viewBox="0 0 100 32" className="flex-1 h-8" fill="none">
                <polyline
                  className="sparkline"
                  points="0,28 18,20 36,23 54,12 72,16 100,4"
                  stroke="#6EE7F9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="100" cy="4" r="3" fill="#6EE7F9" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 — Study progress */}
      <div className="hero-float-c absolute bottom-10 right-0" style={{ zIndex: 5 }}>
        <div className="glass-card w-56 rounded-sm p-4" style={{ transform: "rotate(1.5deg)" }}>
          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(110,231,249,0.7)" }}>
            Estudio en proceso
          </p>
          <div className="flex items-center mb-2">
            {["01", "02", "03", "04"].map((n, i) => (
              <div key={n} className="flex items-center flex-1 last:flex-none">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #2E7DC8, #6EE7F9)"
                      : "transparent",
                    border: i === 0
                      ? "none"
                      : i === 1
                      ? "1px solid rgba(46,125,200,0.6)"
                      : "1px solid rgba(255,255,255,0.12)",
                    color: i === 0 ? "#fff" : i === 1 ? "#2E7DC8" : "rgba(255,255,255,0.25)",
                  }}
                >
                  {n}
                </div>
                {i < 3 && (
                  <div
                    className="flex-1 h-px mx-0.5"
                    style={{
                      background: i === 0
                        ? "linear-gradient(to right, rgba(46,125,200,0.6), rgba(46,125,200,0.15))"
                        : "rgba(255,255,255,0.08)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {["Diseño", "Campo", "Análisis", "Entrega"].map((s, i) => (
              <span key={s} className="text-[7px]" style={{ color: i === 1 ? "#6EE7F9" : "rgba(255,255,255,0.25)", fontWeight: i === 1 ? 600 : 400 }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card 4 — Segment tag */}
      <div className="hero-float-d absolute bottom-32 left-[5%] z-10">
        <div className="glass-card rounded-sm px-3 py-2">
          <p className="text-[7px] uppercase tracking-wider" style={{ color: "rgba(110,231,249,0.6)" }}>Segmento</p>
          <p className="text-sm font-bold text-ink">B2B · PyMEs</p>
        </div>
      </div>

      {/* Pulsing data dots */}
      <div className="dot-breathe-a absolute top-10 right-6 w-2 h-2 rounded-full" style={{ background: "rgba(110,231,249,0.7)" }} />
      <div className="dot-breathe-b absolute top-24 right-12 w-1.5 h-1.5 rounded-full" style={{ background: "#2E7DC8" }} />
      <div className="dot-breathe-c absolute left-[8%] w-1.5 h-1.5 rounded-full" style={{ bottom: "45%", background: "rgba(110,231,249,0.45)" }} />

      {/* Connecting dotted line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" overflow="visible">
        <line x1="30%" y1="62%" x2="60%" y2="78%" stroke="#2E7DC8" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.35" />
      </svg>
    </div>
  );
}
