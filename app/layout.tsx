import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import WhatsAppBubble from "@/components/whatsapp-bubble";
import { BRAND, CONTACT } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    "estudios para marcas Uruguay",
    "insights de consumidores Uruguay",
    "consultoría estratégica Uruguay",
    "datos de mercado Uruguay",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Investigación de mercado en Uruguay | Estudios e insights para empresas",
    description:
      "Consultora de investigación de mercado en Uruguay. Estudios prontos, estudios ad hoc y consultoría estratégica para tomar decisiones con datos reales.",
    locale: "es_UY",
    type: "website",
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Investigación de mercado en Uruguay | Estudios e insights para empresas",
    description:
      "Estudios de mercado prontos y a medida, consultoría estratégica basada en datos. Montevideo, Uruguay.",
  },
};

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
    "Estudios de mercado",
    "Estudios ad hoc",
    "Consultoría estratégica",
    "Análisis de consumidores",
    "Encuestas online Uruguay",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-body bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
