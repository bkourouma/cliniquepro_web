export const SITE_CONFIG = {
  name: "CliniquePro",
  company: "Alliance Computer Consultants",
  tagline: "De la première prise en charge au dernier encaissement, sans friction",
  description:
    "CliniquePro est la plateforme intelligente de gestion de clinique qui unifie patients, consultations, examens, prescriptions, facturation, assurances, caisse et honoraires. Logiciel médical avec IA intégrée.",
  url: "https://cliniquepro.com",
  email: "contact@allianceconsultants.net",
  phone: "+225 07 07 66 41 05",
  address: "Abidjan, Côte d'Ivoire",
} as const;

export const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO_STATS = [
  { value: "100%", label: "Traçabilité" },
  { value: "÷3", label: "Temps de facturation" },
  { value: "24/7", label: "Accès sécurisé" },
] as const;

export const BENEFITS = [
  {
    title: "Historique patient instantané",
    description:
      "Accédez à l'intégralité du dossier médical et administratif de chaque patient en un clic. Fini les recherches dans les archives papier.",
    icon: "ClipboardList" as const,
  },
  {
    title: "Facturation et caisse sans rupture",
    description:
      "Du soin à l'encaissement, zéro ressaisie. Facturation automatisée, caisse multi-modes et calcul instantané des honoraires médecins.",
    icon: "Banknote" as const,
  },
  {
    title: "Gestion assurances simplifiée",
    description:
      "Workflow d'approbation digitalisé, suivi en temps réel des dossiers et portail assureur intégré. Réduction drastique des délais.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Tableaux de bord et IA analytique",
    description:
      "Pilotez votre clinique avec des statistiques en temps réel et un assistant IA conversationnel pour interroger votre activité.",
    icon: "BarChart3" as const,
  },
] as const;

export interface Feature {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export const FEATURES: Feature[] = [
  {
    title: "Dossier patient unifié",
    description:
      "Une seule fiche pour tout : identité, assurance, historique médical et administratif. Chaque praticien accède instantanément à une vue complète et à jour du patient.",
    icon: "UserRound",
    benefits: [
      "Identité et coordonnées centralisées",
      "Couvertures assurance rattachées",
      "Historique médical complet et structuré",
      "Antécédents et allergies toujours visibles",
    ],
  },
  {
    title: "Consultation assistée par IA",
    description:
      "L'intelligence artificielle accompagne le praticien à chaque étape : saisie structurée, suggestions CIM-10, aide à la rédaction et résumé intelligent du dossier.",
    icon: "BrainCircuit",
    benefits: [
      "Aide à la saisie structurée intelligente",
      "Suggestions cliniques contextuelles",
      "Résumé IA automatique du dossier",
      "Formulaires adaptés à chaque spécialité",
    ],
  },
  {
    title: "Examens et prescriptions",
    description:
      "Formulaires d'examens configurables par spécialité, ordonnances intelligentes avec catalogue médicaments et alertes interactions, suivi complet des résultats.",
    icon: "Microscope",
    benefits: [
      "Examens configurables par spécialité",
      "Ordonnances avec alertes interactions",
      "Modèles de prescriptions personnalisables",
      "Suivi et historique des résultats",
    ],
  },
  {
    title: "Facturation, caisse et honoraires",
    description:
      "Automatisez l'intégralité de votre chaîne financière. Facturation liée au parcours patient, caisse multi-modes de paiement et calcul automatique des honoraires médecins.",
    icon: "Receipt",
    benefits: [
      "Facturation automatisée sans ressaisie",
      "Caisse multi-modes (espèces, mobile, carte)",
      "Calcul automatique des honoraires",
      "Gestion des écarts et clôture de caisse",
    ],
  },
  {
    title: "Assurances et tiers payant",
    description:
      "Digitalisez entièrement la relation assureur. Workflow d'approbation, portail dédié et suivi en temps réel pour réduire drastiquement les délais et litiges.",
    icon: "ShieldCheck",
    benefits: [
      "Workflow d'approbation digitalisé",
      "Suivi des dossiers en temps réel",
      "Portail assureur intégré",
      "Réduction des délais de remboursement",
    ],
  },
  {
    title: "Pilotage et statistiques",
    description:
      "Tableaux de bord dynamiques, statistiques avancées et assistant IA conversationnel pour interroger votre activité. Prenez des décisions éclairées instantanément.",
    icon: "LayoutDashboard",
    benefits: [
      "Revenus et performance par médecin",
      "Évolution des consultations",
      "Assistant IA conversationnel",
      "Export et rapports automatisés",
    ],
  },
  {
    title: "Communication patients",
    description:
      "Rappels automatiques, notifications et intégration WhatsApp pour une relation patient moderne. Réduisez les no-shows et améliorez la satisfaction.",
    icon: "MessageSquare",
    benefits: [
      "Rappels SMS et WhatsApp automatiques",
      "Notifications de rendez-vous",
      "Communication post-consultation",
      "Réduction significative des no-shows",
    ],
  },
];

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    before: "Médecins sans historique patient complet",
    after: "Accès instantané à l'historique médical complet",
  },
  {
    before: "Gestion papier et fichiers Excel",
    after: "Système centralisé, structuré et intelligent",
  },
  {
    before: "Processus fragmentés et déconnectés",
    after: "Flux unifié de bout en bout",
  },
  {
    before: "Calcul manuel des honoraires médecins",
    after: "Automatisation complète et sans erreur",
  },
  {
    before: "Manque de visibilité sur l'activité",
    after: "Pilotage en temps réel avec IA analytique",
  },
];

export interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Licence Enterprise",
    subtitle: "Licence perpétuelle",
    price: "1 750 000",
    period: "FCFA — paiement unique ou échelonné sur 1 an",
    description:
      "Investissement durable pour les cliniques souhaitant être propriétaires de leur solution. Droit d'utilisation illimité dans le temps. Paiement échelonné disponible sur 12 mois.",
    features: [
      "Droit d'utilisation illimité",
      "Tous les modules inclus",
      "Intelligence artificielle intégrée",
      "Multi-spécialités",
      "Mises à jour incluses 1 an",
      "Support prioritaire",
    ],
    highlighted: true,
    badge: "Recommandé",
  },
  {
    name: "CliniquePro SaaS",
    subtitle: "Abonnement mensuel",
    price: "45 000",
    period: "FCFA / mois",
    description:
      "Démarrage rapide avec un faible investissement initial. Accès complet à la plateforme avec engagement flexible.",
    features: [
      "Accès complet à la plateforme",
      "Tous les modules inclus",
      "Intelligence artificielle intégrée",
      "Multi-spécialités",
      "Mises à jour continues",
      "Support inclus",
    ],
  },
];

export const PRICING_ADDONS = [
  {
    name: "Implémentation & Mise en service",
    price: "350 000 FCFA",
    items: [
      "Installation et configuration",
      "Paramétrage initial (services, médecins, prestations)",
      "Formation des utilisateurs",
      "Assistance au démarrage",
    ],
  },
  {
    name: "Hébergement sécurisé",
    price: "25 000 FCFA / mois",
    items: [
      "Sauvegardes automatiques",
      "Maintenance technique",
      "Disponibilité et performance garanties",
      "Sécurité des données",
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Qu'est-ce que CliniquePro ?",
    answer:
      "CliniquePro est une plateforme intelligente de gestion de clinique qui unifie l'ensemble du parcours patient : dossier médical, consultations, examens, prescriptions, facturation, caisse, honoraires et assurances. C'est un ERP médical complet augmenté par l'intelligence artificielle, conçu pour les cliniques modernes qui veulent gagner en efficacité et en rentabilité.",
  },
  {
    question: "À quel type de clinique s'adresse CliniquePro ?",
    answer:
      "CliniquePro s'adresse à toutes les structures de santé : cliniques généralistes, polycliniques, centres médicaux spécialisés, cabinets de groupe et établissements multi-spécialités. La plateforme est nativement multi-spécialités avec des formulaires et protocoles configurables par service. Elle est particulièrement adaptée au contexte africain avec la gestion des paiements mobiles, l'intégration WhatsApp et la prise en charge des assurances locales.",
  },
  {
    question: "CliniquePro gère-t-il les assurances et le tiers payant ?",
    answer:
      "Oui, CliniquePro intègre un module complet de gestion des assurances santé et du tiers payant. Le workflow d'approbation est entièrement digitalisé, avec un portail assureur dédié et un suivi en temps réel des dossiers. Cela permet de réduire drastiquement les délais de remboursement et les litiges avec les organismes d'assurance.",
  },
  {
    question: "Peut-on suivre la caisse et les honoraires des médecins ?",
    answer:
      "Absolument. CliniquePro propose un module complet de gestion de caisse multi-modes de paiement (espèces, mobile money, carte bancaire) avec clôture automatisée et gestion des écarts. Les honoraires des médecins sont calculés automatiquement selon les règles définies par la clinique, avec traçabilité complète de chaque transaction.",
  },
  {
    question:
      "À quoi sert l'intelligence artificielle dans CliniquePro ?",
    answer:
      "L'IA est intégrée à tous les niveaux de CliniquePro. En consultation, elle assiste le praticien avec des suggestions cliniques, l'aide à la saisie et la génération de résumés automatiques. Pour le pilotage, un assistant conversationnel permet d'interroger l'activité de la clinique en langage naturel : chiffre d'affaires, performance par médecin, évolution des consultations. L'IA transforme vos données en décisions.",
  },
  {
    question: "CliniquePro est-il adapté à plusieurs spécialités médicales ?",
    answer:
      "Oui, CliniquePro est nativement multi-spécialités. Chaque service de votre clinique peut configurer ses propres formulaires d'examens, protocoles de soins et documents types. Que vous ayez de la médecine générale, de la cardiologie, de la gynécologie ou toute autre spécialité, la plateforme s'adapte à vos processus métier spécifiques.",
  },
  {
    question: "Quel est le coût de mise en place de CliniquePro ?",
    answer:
      "CliniquePro propose deux options flexibles. La licence enterprise perpétuelle est à 1 750 000 FCFA en paiement unique ou échelonné sur 12 mois. L'abonnement mensuel SaaS est à 45 000 FCFA par mois. Dans les deux cas, des frais d'implémentation et de mise en service de 350 000 FCFA couvrent l'installation, le paramétrage, la formation et l'assistance au démarrage. L'hébergement sécurisé est proposé à 25 000 FCFA par mois.",
  },
  {
    question: "L'hébergement et les sauvegardes sont-ils inclus ?",
    answer:
      "L'hébergement sécurisé est proposé en option à 25 000 FCFA par mois. Il inclut l'hébergement sur infrastructure sécurisée, les sauvegardes automatiques quotidiennes, la maintenance technique et une disponibilité garantie. Vos données médicales sont protégées avec les plus hauts standards de sécurité et de confidentialité.",
  },
];
