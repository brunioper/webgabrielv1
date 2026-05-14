import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import WhatsAppBubble from "@/components/whatsapp-bubble";
import { BRAND, CONTACT } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  // Replace "https://tudominio.com" with the actual production URL before launch.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tudominio.com"
  ),
  title: {
    default:
      "Decisiones basadas en información | Consultoría, investigación y gestión",
    template: "%s | Consultoría",
  },
  description:
    "Investigación de mercado, consultoría estratégica comercial y de procesos, y gestión operativa para empresas y propiedades en Montevideo, Uruguay.",
  keywords: [
    "consultoría estratégica",
    "consultoría comercial",
    "investigación de mercado",
    "gestión operativa",
    "gestión de propiedades",
    "mejora de procesos",
    "digitalización",
    "inteligencia artificial aplicada",
    "Montevideo",
    "Uruguay",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title:
      "Decisiones basadas en información | Consultoría, investigación y gestión",
    description:
      "Investigación de mercado, consultoría estratégica y gestión operativa para empresas y propiedades en Montevideo, Uruguay.",
    locale: "es_UY",
    type: "website",
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Decisiones basadas en información | Consultoría, investigación y gestión",
    description:
      "Investigación de mercado, consultoría estratégica y gestión operativa. Montevideo, Uruguay.",
  },
};

// JSON-LD structured data for local business discovery
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND.name,
  description: BRAND.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montevideo",
    addressCountry: "UY",
  },
  telephone: CONTACT.phone,
  email: CONTACT.email,
  areaServed: "Uruguay",
  serviceType: [
    "Investigación de mercado",
    "Consultoría estratégica",
    "Consultoría comercial",
    "Mejora de procesos",
    "Gestión operativa",
    "Gestión de propiedades",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Skip link — visible on keyboard focus, hidden otherwise */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>

        <Nav />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
