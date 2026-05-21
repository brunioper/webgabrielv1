// Future: Monthly giveaway section
// Enable via FEATURES.monthlyGiveaway in lib/features.ts
// Entries per survey: short (1), medium (3), long (5)
// Winner notified by email or WhatsApp at end of month

import { FEATURES } from "@/lib/features";

export default function MonthlyGiveawaySection() {
  if (!FEATURES.monthlyGiveaway) return null;

  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-display-md text-ink mb-4">Sorteo del mes</h2>
        {/* TODO: implement giveaway display (prize image, description, sponsor, deadline) */}
      </div>
    </section>
  );
}
