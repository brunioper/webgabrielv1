import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import WhatsAppBubble from "@/components/whatsapp-bubble";
import { BRAND, CONTACT } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tudominio.com"
  ),
  title: {
    default: "Investigación de mercado en Uruguay | Estudios e insights para empresas",
    template: "%s | Investigación de mercado Uruguay",
  },
  description:
    "Consultora de investigación de mercado en Uruguay. Estudios prontos, estudios ad hoc y consultoría estratégica para tomar decisiones con datos reales.",
  keywords: [
    "investigación de mercado Uruguay",
    "estudios de mercado Uruguay",
    "encuestas online Uruguay",
    "consultora de investigación de mercado Uruguay",
    "estudios de opinión Uruguay",
    "investigación para empresas Uruguay",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Investigación de mercado en Uruguay | Estudios e insights para empresas",
    description: "Consultora de investigación de mercado en Uruguay. Estudios prontos y a medida, consultoría estratégica.",
    locale: "es_UY",
    type: "website",
    siteName: BRAND.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND.name,
  description: BRAND.description,
  address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" },
  telephone: CONTACT.phone,
  email: CONTACT.email,
  areaServed: "Uruguay",
  serviceType: ["Investigación de mercado", "Estudios de mercado", "Consultoría estratégica"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <Nav />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
