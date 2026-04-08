import { SITE_CONFIG } from "./constants";

export function generateSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CliniquePro",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    offers: [
      {
        "@type": "Offer",
        name: "Licence Enterprise Perpétuelle",
        price: "2500000",
        priceCurrency: "XOF",
        description:
          "Licence perpétuelle avec droit d'utilisation illimité pour votre clinique.",
      },
      {
        "@type": "Offer",
        name: "Abonnement Mensuel SaaS",
        price: "35000",
        priceCurrency: "XOF",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "35000",
          priceCurrency: "XOF",
          billingDuration: "P1M",
        },
        description:
          "Abonnement mensuel avec accès complet à la plateforme CliniquePro.",
      },
    ],
    featureList: [
      "Dossier patient unifié",
      "Consultation assistée par IA",
      "Examens et prescriptions par spécialité",
      "Facturation automatisée et caisse multi-modes",
      "Gestion des assurances et tiers payant",
      "Tableaux de bord et IA analytique",
      "Communication patients (SMS, WhatsApp)",
      "Calcul automatique des honoraires médecins",
    ],
    author: {
      "@type": "Organization",
      name: "CliniquePro",
      url: SITE_CONFIG.url,
    },
  };
}

export function generateFaqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
