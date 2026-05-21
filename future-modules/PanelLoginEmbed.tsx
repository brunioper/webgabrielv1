// Future: Panel login embed
// Enable via FEATURES.panelLogin in lib/features.ts

import { FEATURES } from "@/lib/features";

export default function PanelLoginEmbed() {
  if (!FEATURES.panelLogin) return null;

  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="max-w-md mx-auto px-6">
        <h2 className="font-display text-display-md text-ink mb-4">Ingresar al panel</h2>
        {/* TODO: implement login form or embed */}
      </div>
    </section>
  );
}
