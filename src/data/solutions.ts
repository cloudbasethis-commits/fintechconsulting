import type { Lang } from '../i18n/ui';

/** Carte affichée sur la page hub /solutions (les 4 solutions). */
export interface SolutionCard {
  name: string;
  tag: string;
  desc: string;
  /** Fiche détaillée interne (/solutions/<slug>). */
  slug?: string;
  /** Lien externe (produit hébergé ailleurs). */
  href?: string;
  cta?: string;
}

/** Contenu d'une fiche solution détaillée (produits maison). */
export interface SolutionDetail {
  slug: string;
  name: string;
  tag: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string[];
  features: { title: string; desc: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
  ctaLine: string;
}

export const solutionsHub: Record<Lang, { heading: string; intro: string; items: SolutionCard[] }> = {
  fr: {
    heading: 'Des solutions digitales pensées pour l’Afrique',
    intro:
      'Au-delà du conseil, nous concevons et déployons des produits souverains, sécurisés et adaptés aux réalités africaines — de la finance au commerce et à la logistique.',
    items: [
      {
        name: 'Core Banking Digital',
        tag: 'Banque · Microfinance · Temps réel',
        desc: 'Plateforme de gestion des comptes et des transactions, avec une interface moderne, pour banques et institutions de microfinance.',
        slug: 'core-banking',
        cta: 'Découvrir la solution',
      },
      {
        name: 'Switch Monétique',
        tag: 'Paiement · Cartes · Interconnexion',
        desc: 'Interconnexion sécurisée des réseaux de paiement en temps réel : cartes, mobile money et systèmes interbancaires.',
        slug: 'switch-monetique',
        cta: 'Découvrir la solution',
      },
      {
        name: 'digabloPos',
        tag: 'Point de vente · Mobile money · Hors ligne',
        desc: 'Logiciel de caisse moderne pour commerces, restaurants et cafés. Plan gratuit, mobile money intégré, fonctionne hors ligne.',
        href: 'https://digablopos.fr/',
        cta: 'Visiter le site',
      },
      {
        name: 'Surestaria',
        tag: 'Transit & douane · Facturation · Afrique',
        desc: 'Logiciel de gestion des surestaries pour transitaires et commissionnaires en douane : conteneurs, dossiers et facturation multi-devises.',
        href: 'https://surestaria.com/',
        cta: 'Visiter le site',
      },
    ],
  },
  en: {
    heading: 'Digital solutions built for Africa',
    intro:
      'Beyond consulting, we design and deploy sovereign, secure products adapted to African realities — from finance to retail and logistics.',
    items: [
      {
        name: 'Digital Core Banking',
        tag: 'Banking · Microfinance · Real time',
        desc: 'Account and transaction management platform with a modern interface, for banks and microfinance institutions.',
        slug: 'core-banking',
        cta: 'Explore the solution',
      },
      {
        name: 'Card Switch',
        tag: 'Payment · Cards · Interconnection',
        desc: 'Secure real-time interconnection of payment networks: cards, mobile money and interbank systems.',
        slug: 'switch-monetique',
        cta: 'Explore the solution',
      },
      {
        name: 'digabloPos',
        tag: 'Point of sale · Mobile money · Offline',
        desc: 'Modern POS software for retail, restaurants and cafés. Free plan, built-in mobile money, works offline.',
        href: 'https://digablopos.fr/',
        cta: 'Visit the site',
      },
      {
        name: 'Surestaria',
        tag: 'Freight & customs · Billing · Africa',
        desc: 'Demurrage management software for freight forwarders and customs brokers: containers, cases and multi-currency billing.',
        href: 'https://surestaria.com/',
        cta: 'Visit the site',
      },
    ],
  },
};

export const solutionDetails: Record<Lang, SolutionDetail[]> = {
  fr: [
    {
      slug: 'core-banking',
      name: 'Core Banking Digital',
      tag: 'Banque · Microfinance · Temps réel',
      metaTitle: 'Core Banking Digital pour banques & microfinances en Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Solution Core Banking digitale pour banques et institutions de microfinance en Côte d’Ivoire : gestion des comptes et transactions en temps réel, mobile money, conformité BCEAO/UEMOA.',
      tagline: 'Le cœur digital de votre banque, ouvert sur le mobile money et conforme à l’UEMOA.',
      intro: [
        'Le Core Banking est le système central qui gère les comptes, les transactions et les opérations de votre établissement. Notre solution Core Banking Digital a été pensée pour les banques et institutions de microfinance ivoiriennes : moderne, ouverte et centrée sur l’utilisateur.',
        'Elle s’intègre en temps réel avec les canaux mobiles, le mobile money et la monétique, et intègre la conformité BCEAO / UEMOA dès sa conception. Vous gardez le contrôle, vos clients gagnent en simplicité.',
      ],
      features: [
        { title: 'Comptes & transactions en temps réel', desc: 'Gestion centralisée des comptes, dépôts, retraits et transferts, à jour en permanence.' },
        { title: 'Interface centrée utilisateur', desc: 'Une expérience intuitive pour vos agents comme pour vos clients finaux.' },
        { title: 'Mobile money & paiements marchands', desc: 'Intégration native des canaux mobiles (Orange, MTN, Moov, Wave) et du paiement marchand.' },
        { title: 'Conformité BCEAO / UEMOA', desc: 'Règles, reporting réglementaire et traçabilité conçus pour le cadre de l’union.' },
        { title: 'Multi-agences & multi-devises', desc: 'Pilotez plusieurs agences et devises depuis une plateforme unique.' },
        { title: 'Reporting & pilotage', desc: 'Tableaux de bord et indicateurs pour décider sur la base de données réelles.' },
      ],
      benefits: [
        'Réduction des délais et des coûts opérationnels',
        'Onboarding client à distance, en quelques minutes',
        'Sécurité et traçabilité des flux financiers',
        'Évolutivité pour accompagner votre croissance',
      ],
      faq: [
        { q: 'La solution est-elle conforme à la réglementation BCEAO/UEMOA ?', a: 'Oui. La conformité (règles, reporting, traçabilité) est intégrée dès la conception, dans le respect du cadre de la BCEAO et de l’UEMOA.' },
        { q: 'Peut-on intégrer le mobile money ?', a: 'Oui, le Core Banking s’intègre nativement avec les opérateurs de mobile money et le paiement marchand utilisés en Côte d’Ivoire.' },
        { q: 'Convient-elle aux institutions de microfinance ?', a: 'Absolument. La solution s’adapte aux banques comme aux IMF, avec une gestion multi-agences et multi-devises.' },
      ],
      ctaLine: 'Modernisons le cœur digital de votre banque.',
    },
    {
      slug: 'switch-monetique',
      name: 'Switch Monétique',
      tag: 'Paiement · Cartes · Interconnexion',
      metaTitle: 'Switch monétique & interconnexion GIM-UEMOA en Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Solution de switch monétique en Côte d’Ivoire : interconnexion sécurisée temps réel des réseaux de paiement, compatibilité cartes et GIM-UEMOA, haute disponibilité.',
      tagline: 'L’infrastructure qui route et sécurise vos paiements en temps réel.',
      intro: [
        'Le switch monétique est l’infrastructure qui route et autorise les transactions de paiement en temps réel entre banques, réseaux de cartes et opérateurs de mobile money. Le maîtriser est un levier de souveraineté et de marge.',
        'Notre solution interconnecte de façon sécurisée vos canaux de paiement et s’intègre au GIM-UEMOA, avec une exigence de haute disponibilité et de performance.',
      ],
      features: [
        { title: 'Interconnexion temps réel', desc: 'Routage et autorisation des transactions en quelques centaines de millisecondes.' },
        { title: 'Sécurité de bout en bout', desc: 'Chiffrement, gestion des clés et conformité aux standards de sécurité des paiements.' },
        { title: 'Compatibilité cartes & GIM-UEMOA', desc: 'Interopérabilité régionale et acceptation élargie pour vos porteurs.' },
        { title: 'Interopérabilité mobile money', desc: 'Connexion des wallets et comptes bancaires pour des parcours fluides.' },
        { title: 'Haute disponibilité', desc: 'Redondance et bascule automatique pour ne jamais interrompre le service.' },
        { title: 'Supervision 24/7', desc: 'Monitoring proactif et alertes pour anticiper le moindre incident.' },
      ],
      benefits: [
        'Contrôle de vos transactions et de vos coûts d’interchange',
        'Réseau d’acceptation élargi dans l’UEMOA',
        'Revenus sur les transactions interbancaires',
        'Confiance renforcée grâce à la sécurité et la disponibilité',
      ],
      faq: [
        { q: 'Votre switch est-il interconnecté au GIM-UEMOA ?', a: 'Oui, la solution est conçue pour l’interopérabilité régionale, dont l’interconnexion au GIM-UEMOA et la compatibilité cartes.' },
        { q: 'Gère-t-il l’interopérabilité avec le mobile money ?', a: 'Oui, le switch interconnecte cartes, mobile money et systèmes interbancaires pour des parcours de paiement unifiés.' },
        { q: 'Quel niveau de disponibilité garantissez-vous ?', a: 'L’architecture vise une haute disponibilité (redondance, bascule automatique, supervision 24/7) pour éviter toute interruption de service.' },
      ],
      ctaLine: 'Prenez le contrôle de votre monétique.',
    },
  ],
  en: [
    {
      slug: 'core-banking',
      name: 'Digital Core Banking',
      tag: 'Banking · Microfinance · Real time',
      metaTitle: 'Digital Core Banking for banks & microfinance in Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Digital Core Banking solution for banks and microfinance institutions in Côte d’Ivoire: real-time account and transaction management, mobile money, BCEAO/WAEMU compliance.',
      tagline: 'The digital heart of your bank, open to mobile money and WAEMU-compliant.',
      intro: [
        'Core Banking is the central system that manages accounts, transactions and operations. Our Digital Core Banking solution is designed for Ivorian banks and microfinance institutions: modern, open and user-centric.',
        'It integrates in real time with mobile channels, mobile money and monetics, and builds in BCEAO / WAEMU compliance from the design phase. You keep control, your customers gain simplicity.',
      ],
      features: [
        { title: 'Real-time accounts & transactions', desc: 'Centralized management of accounts, deposits, withdrawals and transfers, always up to date.' },
        { title: 'User-centric interface', desc: 'An intuitive experience for both your agents and end customers.' },
        { title: 'Mobile money & merchant payments', desc: 'Native integration of mobile channels (Orange, MTN, Moov, Wave) and merchant payment.' },
        { title: 'BCEAO / WAEMU compliance', desc: 'Rules, regulatory reporting and traceability designed for the union framework.' },
        { title: 'Multi-branch & multi-currency', desc: 'Run several branches and currencies from a single platform.' },
        { title: 'Reporting & steering', desc: 'Dashboards and indicators to decide on real data.' },
      ],
      benefits: [
        'Reduced delays and operating costs',
        'Remote customer onboarding in minutes',
        'Security and traceability of financial flows',
        'Scalability to support your growth',
      ],
      faq: [
        { q: 'Is the solution compliant with BCEAO/WAEMU regulation?', a: 'Yes. Compliance (rules, reporting, traceability) is built in from the design phase, within the BCEAO and WAEMU framework.' },
        { q: 'Can mobile money be integrated?', a: 'Yes, Core Banking natively integrates with mobile money operators and merchant payment used in Côte d’Ivoire.' },
        { q: 'Is it suitable for microfinance institutions?', a: 'Absolutely. The solution fits banks and MFIs alike, with multi-branch and multi-currency management.' },
      ],
      ctaLine: 'Let’s modernize the digital heart of your bank.',
    },
    {
      slug: 'switch-monetique',
      name: 'Card Switch',
      tag: 'Payment · Cards · Interconnection',
      metaTitle: 'Card switch & GIM-WAEMU interconnection in Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Card switch solution in Côte d’Ivoire: secure real-time interconnection of payment networks, card and GIM-WAEMU compatibility, high availability.',
      tagline: 'The infrastructure that routes and secures your payments in real time.',
      intro: [
        'The card switch is the infrastructure that routes and authorizes payment transactions in real time between banks, card networks and mobile money operators. Mastering it is a lever for sovereignty and margin.',
        'Our solution securely interconnects your payment channels and integrates with GIM-WAEMU, with a requirement for high availability and performance.',
      ],
      features: [
        { title: 'Real-time interconnection', desc: 'Routing and authorization of transactions within a few hundred milliseconds.' },
        { title: 'End-to-end security', desc: 'Encryption, key management and compliance with payment security standards.' },
        { title: 'Card & GIM-WAEMU compatibility', desc: 'Regional interoperability and broader acceptance for your cardholders.' },
        { title: 'Mobile money interoperability', desc: 'Connecting wallets and bank accounts for seamless journeys.' },
        { title: 'High availability', desc: 'Redundancy and automatic failover to never interrupt service.' },
        { title: '24/7 monitoring', desc: 'Proactive monitoring and alerts to anticipate any incident.' },
      ],
      benefits: [
        'Control of your transactions and interchange costs',
        'Broader acceptance network across WAEMU',
        'Revenue on interbank transactions',
        'Stronger trust through security and availability',
      ],
      faq: [
        { q: 'Is your switch interconnected with GIM-WAEMU?', a: 'Yes, the solution is designed for regional interoperability, including GIM-WAEMU interconnection and card compatibility.' },
        { q: 'Does it handle mobile money interoperability?', a: 'Yes, the switch interconnects cards, mobile money and interbank systems for unified payment journeys.' },
        { q: 'What level of availability do you guarantee?', a: 'The architecture targets high availability (redundancy, automatic failover, 24/7 monitoring) to avoid any service interruption.' },
      ],
      ctaLine: 'Take control of your monetics.',
    },
  ],
};

export function getSolutionsHub(lang: Lang) {
  return solutionsHub[lang];
}
export function getSolutionDetails(lang: Lang): SolutionDetail[] {
  return solutionDetails[lang];
}
export function getSolutionDetail(lang: Lang, slug: string): SolutionDetail | undefined {
  return solutionDetails[lang].find((s) => s.slug === slug);
}
