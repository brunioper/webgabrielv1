// Future: Points program section
// Enable via FEATURES.pointsProgram in lib/features.ts
// Points by survey: short=50, medium=120, long=250
// Bonus: welcome=200 (on profile complete), referral=75, streak=+20% after 3 surveys
// Redemption: gift cards, discounts, sponsor prizes — no expiry while account active

import { FEATURES } from "@/lib/features";

export default function PointsProgramSection() {
  if (!FEATURES.pointsProgram) return null;

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-display-md text-ink mb-4">Programa de puntos</h2>
        {/* TODO: implement points display (balance, history, redemption catalog) */}
      </div>
    </section>
  );
}
