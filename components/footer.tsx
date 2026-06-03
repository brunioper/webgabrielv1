import Link from "next/link";
import { BRAND, CONTACT, WHATSAPP_URL } from "@/lib/config";

const navColumns = [
  {
    label: "Empresa",
    links: [
      { href: "/nosotros",    label: "Nosotros" },
      { href: "/metodologia", label: "Metodología" },
      { href: "/aliados",     label: "Aliados" },
      { href: "/clientes",    label: "Clientes" },
    ],
  },
  {
    label: "Servicios",
    links: [
      { href: "/servicios", label: "Investigación de mercado" },
      { href: "/servicios", label: "Consultoría estratégica" },
      { href: "/estudios",  label: "Estudios prontos" },
      { href: "/contacto",  label: "Solicitar estudio" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep">
      {/* Top rule */}
      <div className="h-px" style={{ background: "linear-gradient(to right, rgba(41,82,203,0.5), rgba(41,82,203,0.15), transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-16 py-20 md:py-24"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>

          {/* Brand column */}
          <div className="max-w-xs">
            <p className="font-display font-bold text-white text-2xl mb-2 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}>
              {BRAND.name}
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-8">
              {BRAND.tagline}
            </p>
            <div className="space-y-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white transition-colors duration-200"
              >
                <WhatsAppIcon />
                WhatsApp directo
              </a>
              <a href={CONTACT.emailHref}
                className="block text-sm text-white/40 hover:text-white transition-colors duration-200">
                {CONTACT.email}
              </a>
              <p className="text-sm text-white/25">{CONTACT.location}</p>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-12 md:gap-20">
            {navColumns.map((col) => (
              <div key={col.label}>
                <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.22em] mb-6">
                  {col.label}
                </p>
                <ul className="space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal strip */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/15">Montevideo, Uruguay</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
