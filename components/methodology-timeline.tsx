"use client";

import { Reveal } from "@/components/reveal";

export type TimelineStep = { n: string; label: string; desc?: string };

function StepCard({ step }: { step: TimelineStep }) {
  return (
    <div
      className="rounded-sm p-5 transition-all duration-300 hover:-translate-y-0.5 w-full"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        className="text-[9px] font-bold uppercase tracking-[0.18em] mb-1.5"
        style={{ color: "#E8B45A" }}
      >
        PASO {step.n}
      </p>
      <h3 className="font-semibold text-sm text-white leading-snug">{step.label}</h3>
      {step.desc && (
        <p className="text-xs text-muted mt-1.5 leading-relaxed">{step.desc}</p>
      )}
    </div>
  );
}

export default function MethodologyTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <>
      {/* Desktop — alternating L/R timeline */}
      <div className="hidden md:block relative">
        {/* Dashed vertical line */}
        <div
          className="absolute left-1/2 top-5 bottom-5 w-px -translate-x-1/2 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(203,123,53,0.4) 0px, rgba(203,123,53,0.4) 6px, transparent 6px, transparent 14px)",
          }}
        />

        <div className="space-y-5">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={s.n} delay={i * 0.09}>
                <div className="grid grid-cols-[1fr_80px_1fr] items-center">
                  {/* Left slot */}
                  <div className="flex justify-end pr-6">
                    {isLeft ? <StepCard step={s} /> : <div className="h-6" />}
                  </div>

                  {/* Node */}
                  <div className="flex justify-center z-10">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "#0A0804",
                        border: "1.5px solid rgba(203,123,53,0.7)",
                        boxShadow: "0 0 14px rgba(203,123,53,0.2)",
                      }}
                    >
                      <span
                        className="text-[11px] font-bold tabular-nums"
                        style={{ color: "#E8B45A" }}
                      >
                        {s.n}
                      </span>
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className="pl-6">
                    {!isLeft ? <StepCard step={s} /> : <div className="h-6" />}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Mobile — left-side timeline */}
      <div className="md:hidden relative pl-10">
        <div
          className="absolute left-4 top-2 bottom-2 w-px z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(203,123,53,0.4) 0px, rgba(203,123,53,0.4) 6px, transparent 6px, transparent 14px)",
          }}
        />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative mb-5">
              <div
                className="absolute -left-9 top-3 w-8 h-8 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                style={{
                  background: "#0A0804",
                  border: "1.5px solid rgba(203,123,53,0.6)",
                }}
              >
                <span
                  className="text-[9px] font-bold tabular-nums"
                  style={{ color: "#E8B45A" }}
                >
                  {s.n}
                </span>
              </div>
              <StepCard step={s} />
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
