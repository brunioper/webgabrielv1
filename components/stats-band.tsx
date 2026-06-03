"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 50,   prefix: "+", suffix: "",  label: "Estudios realizados" },
  { value: 12,   prefix: "+", suffix: "",  label: "Industrias atendidas" },
  { value: 100,  prefix: "",  suffix: "%", label: "Datos primarios" },
  { value: 2017, prefix: "",  suffix: "",  label: "Año de fundación" },
];

function Counter({
  target, prefix, suffix, trigger,
}: {
  target: number; prefix: string; suffix: string; trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1800;
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-sand section-divider-top section-divider-bottom py-16 md:py-20"
      aria-label="Cifras de la empresa"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-3 ${
                i < stats.length - 1
                  ? "md:border-r md:border-white/[0.07] md:pr-10 md:mr-10"
                  : ""
              }`}
            >
              <p
                className="font-display font-bold tabular-nums leading-none"
                style={{
                  fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                  color: "#2952CB",
                  letterSpacing: "-0.04em",
                }}
              >
                <Counter
                  target={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  trigger={inView}
                />
              </p>
              <p className="text-[11px] font-semibold text-muted/70 tracking-[0.16em] uppercase leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
