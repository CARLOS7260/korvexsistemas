import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://korvex.com.br";
const siteName = "Korvex Sistemas";
const siteDescription =
  "Software sob medida, automação comercial, PDV omnichannel, integrações e aplicativos para varejo e indústria. Planejamos, desenvolvemos e operamos soluções digitais completas para acelerar resultados.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Software sob medida, PDV e automação comercial`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "software sob medida",
    "desenvolvimento de sistemas",
    "ERP personalizado",
    "PDV omnichannel",
    "automação comercial",
    "integração de sistemas",
    "apps corporativos",
    "consultoria tecnológica",
    "Korvex Sistemas",
    "desenvolvimento Next.js",
  ],
  category: "technology",
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    title: `${siteName} | Software sob medida, PDV e automação comercial`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/korvex-3d-06.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Plataforma completa de software sob medida`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Software sob medida e automação`,
    description: siteDescription,
    images: [`${siteUrl}/korvex-3d-06.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/korvex-3d-06.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    description:
      "Sistema completo de gestão para varejo de moda: controle de estoque, PDV omnichannel e campanhas automatizadas de WhatsApp.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50",
    },
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-51-98033-9085",
        contactType: "customer service",
        email: "contato@korvexsistemas.com.br",
        areaServed: "BR",
        availableLanguage: "pt-BR",
      },
    },
  };

  return (
    <html lang="pt-BR" className="bg-[#0f172a]">
      <head>
        <link rel="preload" as="image" href="/korvex-3d-06.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-[#f3f4f6]`}
      >
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
