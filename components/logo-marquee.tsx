"use client";

import { motion } from "framer-motion";

type LogoItem = { name: string; abbr: string };

// Replace with real logo images when available
const placeholderLogos: LogoItem[] = [
  { name: "Empresa A", abbr: "EA" },
  { name: "Empresa B", abbr: "EB" },
  { name: "Empresa C", abbr: "EC" },
  { name: "Empresa D", abbr: "ED" },
  { name: "Empresa E", abbr: "EE" },
  { name: "Empresa F", abbr: "EF" },
  { name: "Empresa G", abbr: "EG" },
  { name: "Empresa H", abbr: "EH" },
];

export default function LogoMarquee({ logos = placeholderLogos }: { logos?: LogoItem[] }) {
  const items = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative">
      <div className="py-4">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #FBFBFD, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #FBFBFD, transparent)" }}
        />

        <motion.div
          className="flex gap-6 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {items.map((logo, i) => (
            <div
              key={i}
              className="logo-item flex items-center gap-3 px-5 py-3 rounded-lg cursor-default select-none"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E8F0",
              }}
            >
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-bold"
                style={{ background: "#EAEFFB", color: "#2952CB" }}
              >
                {logo.abbr}
              </div>
              <span className="text-sm font-medium text-ink/55 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
