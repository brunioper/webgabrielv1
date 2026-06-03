"use client";

import { motion } from "framer-motion";

type Step = { n: string; title: string; body: string };

export default function AnimatedSteps({ steps }: { steps: Step[] }) {
  return (
    <div>
      {steps.map((s, i) => (
        <StepRow key={s.n} step={s} index={i} />
      ))}
      <div className="border-t border-border" />
    </div>
  );
}

function StepRow({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.07 }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8
                 py-8 border-t border-border
                 -mx-6 px-6 md:-mx-8 md:px-8
                 transition-colors duration-300 hover:bg-sand rounded-sm"
    >
      {/* Step number */}
      <div className="md:col-span-1 flex md:block items-center gap-3">
        <p
          className="font-display font-extrabold text-3xl leading-none transition-colors duration-300 group-hover:text-accent"
          style={{ color: "#D7E0F4", letterSpacing: "-0.03em" }}
        >
          {step.n}
        </p>
      </div>

      {/* Title with animated accent underline */}
      <div className="md:col-span-5 flex flex-col justify-center">
        <div className="relative inline-block">
          <h3 className="font-display text-xl font-semibold text-ink leading-snug">
            {step.title}
          </h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 + 0.28 }}
            style={{ transformOrigin: "left" }}
            className="absolute -bottom-1 left-0 w-8 h-px bg-accent"
          />
        </div>
      </div>

      {/* Body */}
      <div className="md:col-span-6">
        <p className="text-base text-muted leading-relaxed">{step.body}</p>
      </div>
    </motion.div>
  );
}
