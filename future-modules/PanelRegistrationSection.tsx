// Future: Panel registration section
// Enable via FEATURES.panelRegistration in lib/features.ts
// Data collected: nombre, email, fecha de nacimiento, departamento, teléfono (optional)
// Perfil: nivel educativo, situación laboral, composición del hogar, acceso a bienes y servicios

import { FEATURES } from "@/lib/features";

export default function PanelRegistrationSection() {
  if (!FEATURES.panelRegistration) return null;

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-display-md text-ink mb-4">Registrarme al panel</h2>
        {/* TODO: implement registration form */}
      </div>
    </section>
  );
}
