// Future: Panel Uruguay public section
// Enable via FEATURES.panelUruguay in lib/features.ts

import { FEATURES } from "@/lib/features";

export default function PanelUruguaySection() {
  if (!FEATURES.panelUruguay) return null;

  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-display-md text-ink mb-4">Panel Uruguay</h2>
        {/* TODO: implement panel content */}
      </div>
    </section>
  );
}
