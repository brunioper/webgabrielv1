"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 50,   prefix: "+", suffix: "",  label: "Estudios realizados" },
  { value: 12,   prefix: "+", suffix: "",  label: "Industrias atendidas" },
  { value: 100,  prefix: "",  suffix: "%", label: "Datos primarios" },
  { value: 2017, prefix: "",  suffix: "",  label: "Fundada" },
];

function Counter({
  target, prefix, suffix, trigger,
}: {
  target: number; prefix: string; suffix: string; trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1600;
    const startTime = performance.now();
    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [trigger, target]);

  return <>{prefix}{count.toLocaleString("es-UY")}{suffix}</>;
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-14 overflow-hidden"
      style={{ background: "#0A1E3D" }}
      aria-label="Cifras de la empresa"
    >
      {/* Horizontal glow stripe */}
      <div
        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(46,125,200,0.2) 25%, rgba(46,125,200,0.2) 75%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center gap-2.5 py-4 ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <p className="text-5xl font-bold text-white tabular-nums leading-none tracking-tight">
                <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} trigger={inView} />
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#6EE7F9" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
