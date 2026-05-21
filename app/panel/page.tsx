import { FEATURES } from "@/lib/features";

// Panel Uruguay — future feature, not linked from nav
// Enable by setting FEATURES.panelUruguay = true in lib/features.ts

export default function Panel() {
  if (!FEATURES.panelUruguay) {
    return null;
  }

  return (
    <section className="bg-bg min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="section-label mb-4">Panel Uruguay</p>
        <h1 className="font-display text-display-lg text-ink mb-4">Próximamente</h1>
        <p className="text-muted">Esta sección estará disponible en una próxima etapa.</p>
      </div>
    </section>
  );
}
