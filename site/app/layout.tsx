import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "CliniquePro — Logiciel Intelligent de Gestion de Clinique | IA Intégrée",
    template: "%s | CliniquePro",
  },
  description:
    "CliniquePro est le logiciel médical intelligent qui unifie patients, consultations, examens, prescriptions, facturation, assurances, caisse et honoraires. Plateforme de gestion de clinique avec IA intégrée, adaptée au contexte africain. Dossier patient, facturation automatisée, gestion des assurances et pilotage en temps réel.",
  keywords: [
    "logiciel de gestion de clinique",
    "logiciel médical",
    "logiciel pour clinique",
    "gestion des patients",
    "facturation clinique",
    "logiciel de caisse clinique",
    "logiciel assurance santé",
    "assistant IA clinique",
    "logiciel hôpital",
    "logiciel centre médical",
    "ERP médical",
    "dossier patient électronique",
    "gestion clinique Afrique",
    "logiciel médical Côte d'Ivoire",
    "plateforme santé",
  ],
  authors: [{ name: "CliniquePro" }],
  creator: "CliniquePro",
  publisher: "CliniquePro",
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
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title:
      "CliniquePro — Logiciel Intelligent de Gestion de Clinique | IA Intégrée",
    description:
      "La plateforme intelligente qui transforme votre clinique en organisation pilotée, fluide et performante. Dossier patient unifié, consultation assistée par IA, facturation automatisée, gestion des assurances et pilotage en temps réel.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CliniquePro — Logiciel intelligent de gestion de clinique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CliniquePro — Logiciel Intelligent de Gestion de Clinique",
    description:
      "La plateforme intelligente qui transforme votre clinique en organisation pilotée, fluide et performante.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
