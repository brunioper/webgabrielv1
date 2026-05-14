import Link from "next/link";
import { Reveal } from "@/components/reveal";

export type ServiceCategory = {
  category: string;
  items: string[];
};

type ServiceBlockProps = {
  number: string;
  title: string;
  intro: string;
  services: ServiceCategory[];
  cta: string;
  ctaHref: string;
  ctaExternal?: boolean;
  bgLight?: boolean;
};

export function ServiceBlock({
  number,
  title,
  intro,
  services,
  cta,
  ctaHref,
  ctaExternal,
  bgLight,
}: ServiceBlockProps) {
  return (
    <section className={`py-20 md:py-28 ${bgLight ? "bg-white" : "bg-bg"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Left: number + title + intro + CTA */}
          <Reveal className="md:col-span-2">
            <p className="font-display text-5xl font-light text-border mb-4 leading-none">
              {number}
            </p>
            <h2 className="font-display text-display-md text-ink mb-4 leading-tight">
              {title}
            </h2>
            <div className="w-8 h-px bg-accent mb-5" />
            <p className="text-base text-muted leading-relaxed mb-8">{intro}</p>
            {ctaExternal ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {cta}
              </a>
            ) : (
              <Link href={ctaHref} className="btn-primary">
                {cta}
              </Link>
            )}
          </Reveal>

          {/* Right: service categories + item lists */}
          <Reveal delay={0.15} className="md:col-span-3 space-y-8">
            {services.map((s) => (
              <div key={s.category}>
                <h3 className="section-label mb-3">{s.category}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
