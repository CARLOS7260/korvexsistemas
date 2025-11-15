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

export const metadata: Metadata = {
  title: "Korvex — Desenvolvimento de Software Sob Medida para Empresas",
  description:
    "Desenvolvemos sistemas personalizados, aplicativos web e mobile, integrações e automações. Transforme suas necessidades em soluções tecnológicas que impulsionam resultados.",
  keywords: [
    "desenvolvimento de software sob medida",
    "sistemas personalizados",
    "aplicativos web e mobile",
    "desenvolvimento de sistemas",
    "automação de processos",
    "integração de sistemas",
    "ERP personalizado",
    "CRM sob medida",
    "sistema PDV",
    "e-commerce personalizado",
    "aplicativos iOS Android",
    "desenvolvimento de software Brasil",
  ],
  metadataBase: new URL("https://korvex.com.br"),
  openGraph: {
    title: "Korvex — Desenvolvimento de Software Sob Medida",
    description:
      "Desenvolvemos qualquer sistema que sua empresa precise: sistemas de gestão, aplicativos, e-commerce, automações e integrações. Do zero ao deploy.",
    url: "https://korvex.com.br",
    siteName: "Korvex Platform",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/korvex-3d-06.png",
        width: 1200,
        height: 630,
        alt: "Korvex Platform - Sistema de gestão para varejo de moda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korvex Platform — Automação para o varejo de moda",
    description:
      "Gestão de estoque, PDV omnichannel e campanhas de WhatsApp automatizadas em um único sistema.",
    images: ["/korvex-3d-06.png"],
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
    canonical: "https://korvex.com.br",
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
    name: "Korvex Platform",
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
      name: "Korvex Sistemas",
      url: "https://korvex.com.br",
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
