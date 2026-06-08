import type { Lang } from '../i18n/ui';

export interface ServiceItem {
  title: string;
  desc: string;
  /** Slug de la page service vers laquelle pointe la carte (lien interne SEO). */
  slug?: string;
}
export interface ServiceGroup {
  id: string;
  name: string;
  tagline: string;
  items: ServiceItem[];
}
export interface SolutionItem {
  name: string;
  tag: string;
  desc: string;
  features: string[];
  /** Lien externe vers le produit (affiche un CTA « Visiter le site »). */
  href?: string;
  cta?: string;
}
export interface HomeContent {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    linkLabel: string;
    groups: ServiceGroup[];
  };
  solutions: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: SolutionItem[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: ServiceItem[];
  };
  references: {
    eyebrow: string;
    heading: string;
    subheading: string;
    clients: { name: string; logo: string; href?: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    note: string;
  };
}

export const homeContent: Record<Lang, HomeContent> = {
  fr: {
    seoTitle: 'FinTech Consulting SA — Transformation digitale & FinTech en Côte d’Ivoire',
    seoDescription:
      'Cabinet de conseil à Abidjan : Finance & FinTech, infrastructure IT & cloud, cybersécurité, télécoms et formation. FinTech Consulting SA accélère la transformation digitale des entreprises ivoiriennes.',
    hero: {
      eyebrow: 'FinTech · Conseil · Côte d’Ivoire',
      title: 'L’avenir de la finance',
      titleAccent: 'est digital',
      subtitle:
        'À Abidjan, FinTech Consulting SA accompagne banques, institutions financières et entreprises dans leur transformation digitale. Notre mission dépasse la technologie : nous forgeons la souveraineté numérique de la finance africaine.',
      ctaPrimary: 'Consultation gratuite',
      ctaSecondary: 'Découvrir nos services',
      badges: ['Conformité BCEAO & UEMOA', 'Basés à Abidjan', 'Support 24/7'],
    },
    services: {
      eyebrow: 'Nos expertises',
      heading: 'Quatre pôles, une transformation maîtrisée',
      subheading:
        'De la finance digitale aux infrastructures critiques, nous couvrons toute la chaîne de votre transformation numérique, avec un ancrage local fort.',
      linkLabel: 'Voir le détail de nos services',
      groups: [
        {
          id: 'finance',
          name: 'Finance & FinTech',
          tagline: 'La finance digitale, conforme et performante.',
          items: [
            { title: 'Ingénierie financière', desc: 'Optimisation, structuration et solutions de gestion financière sur mesure.', slug: 'finance-fintech' },
            { title: 'Digitalisation des paiements', desc: 'Mobile money, monétique et paiement marchand intégrés à vos systèmes.', slug: 'finance-fintech' },
            { title: 'Switch monétique', desc: 'Interconnexion sécurisée temps réel des réseaux de paiement (GIM-UEMOA).', slug: 'finance-fintech' },
            { title: 'Business Intelligence', desc: 'Reporting automatisé et tableaux de bord pour décider par la donnée.', slug: 'finance-fintech' },
          ],
        },
        {
          id: 'tech',
          name: 'Technologie, Cloud & Sécurité',
          tagline: 'Des fondations IT solides et protégées.',
          items: [
            { title: 'Infrastructure & data center', desc: 'Réseaux LAN/WAN, serveurs et salles techniques fiables et évolutifs.', slug: 'infrastructure-cloud' },
            { title: 'Cloud & continuité', desc: 'Migration, architecture cloud, sauvegarde et plans de continuité.', slug: 'infrastructure-cloud' },
            { title: 'Cybersécurité', desc: 'Audit, protection des données et conformité ARTCI pour vos systèmes.', slug: 'cybersecurite' },
            { title: 'Télécoms & connectivité', desc: 'VSAT satellite, fibre optique et interconnexion de vos sites.', slug: 'telecoms' },
          ],
        },
        {
          id: 'conseil',
          name: 'Conseil & Accompagnement',
          tagline: 'De la stratégie à l’adoption.',
          items: [
            { title: 'Audit & stratégie digitale', desc: 'Diagnostic de maturité et feuille de route de transformation priorisée.', slug: 'conseil-formation' },
            { title: 'Conduite du changement', desc: 'Accompagnement humain pour ancrer durablement les nouveaux usages.', slug: 'conseil-formation' },
            { title: 'Formations sur mesure', desc: 'Programmes adaptés à vos métiers, en présentiel à Abidjan ou à distance.', slug: 'conseil-formation' },
            { title: 'Gouvernance & pilotage', desc: 'Indicateurs, gouvernance et support continu de vos projets.', slug: 'conseil-formation' },
          ],
        },
      ],
    },
    solutions: {
      eyebrow: 'Nos solutions',
      heading: 'Des solutions digitales pensées pour l’Afrique',
      subheading:
        'Au-delà du conseil, nous concevons et déployons des produits souverains, sécurisés et adaptés aux réalités africaines — de la finance au commerce et à la logistique.',
      items: [
        {
          name: 'Core Banking Digital',
          tag: 'Banque · Microfinance · Temps réel',
          desc: 'Plateforme de gestion des comptes et des transactions, avec une interface moderne centrée sur l’utilisateur, pour les banques et institutions de microfinance.',
          features: [
            'Gestion des comptes et des transactions en temps réel',
            'Interface intuitive pour vos agents et vos clients',
            'Intégration mobile money et paiements marchands',
            'Conçu pour la conformité BCEAO / UEMOA',
          ],
        },
        {
          name: 'Switch Monétique',
          tag: 'Paiement · Cartes · Interconnexion',
          desc: 'Solution d’interconnexion sécurisée des réseaux de paiement en temps réel : cartes, mobile money et systèmes interbancaires, pour fluidifier vos transactions.',
          features: [
            'Interconnexion temps réel des réseaux de paiement',
            'Sécurité de bout en bout des transactions',
            'Compatibilité cartes et GIM-UEMOA',
            'Supervision et haute disponibilité',
          ],
        },
        {
          name: 'digabloPos',
          tag: 'Point de vente · Mobile money · Hors ligne',
          desc: 'Logiciel de caisse moderne pour commerces, restaurants et cafés. Plan gratuit disponible, paiement mobile money intégré, et fonctionne même sans connexion.',
          features: [
            'Encaissement rapide sur mobile, tablette ou ordinateur',
            'Paiement mobile money intégré',
            'Mode hors ligne avec synchronisation automatique',
            'Gestion des stocks et rapports en temps réel',
          ],
          href: 'https://digablopos.fr/',
          cta: 'Visiter le site',
        },
        {
          name: 'Surestaria',
          tag: 'Transit & douane · Facturation · Afrique',
          desc: 'Logiciel de gestion des surestaries pour transitaires et commissionnaires en douane : suivi des conteneurs, des dossiers et facturation multi-devises.',
          features: [
            'Calcul automatisé des surestaries (demurrage)',
            'Suivi des conteneurs et des dossiers',
            'Facturation multi-devises (USD, EUR, FCFA…)',
            'Conçu pour l’Afrique subsaharienne',
          ],
          href: 'https://surestaria.com/',
          cta: 'Visiter le site',
        },
      ],
    },
    about: {
      eyebrow: 'À propos',
      heading: 'Votre partenaire de la souveraineté numérique',
      paragraphs: [
        'FinTech Consulting SA est un cabinet de conseil ivoirien spécialisé dans la transformation digitale. Nous combinons expertise financière, technologie de pointe et innovation pour guider les organisations vers des modèles modernes, agiles et sécurisés.',
        'Notre ambition : devenir un acteur majeur de la transformation digitale en Afrique, reconnu pour son expertise, son agilité et la valeur qu’il crée. Nous croyons à une finance africaine maîtrisée, souveraine et au service de tous.',
        'Trois principes nous guident — Innovation, Excellence, Transparence — et une conviction : la technologie n’a de sens que lorsqu’elle sert des résultats mesurables pour nos clients.',
      ],
      stats: [
        { value: '4', label: 'Pôles d’expertise' },
        { value: '6', label: 'Grandes références' },
        { value: '24/7', label: 'Supervision & support' },
        { value: 'Abidjan', label: 'Ancrage local, ambition panafricaine' },
      ],
    },
    process: {
      eyebrow: 'Notre méthode',
      heading: 'De l’audit à l’adoption, sans friction',
      subheading: 'Une démarche claire en quatre étapes, pour une transformation maîtrisée et des résultats mesurables.',
      steps: [
        { title: '1 · Audit & diagnostic', desc: 'Nous analysons vos processus, votre maturité digitale et vos enjeux de conformité.' },
        { title: '2 · Stratégie & cadrage', desc: 'Nous définissons une feuille de route priorisée, alignée sur vos objectifs métier.' },
        { title: '3 · Déploiement', desc: 'Nous mettons en œuvre les solutions par étapes, avec sécurité et qualité à chaque jalon.' },
        { title: '4 · Accompagnement', desc: 'Nous formons vos équipes, supervisons et faisons évoluer vos systèmes 24/7.' },
      ],
    },
    references: {
      eyebrow: 'Ils nous font confiance',
      heading: 'Des références qui parlent d’elles-mêmes',
      subheading:
        'Banques, organismes publics et grands groupes nous confient leur transformation digitale et leurs infrastructures critiques.',
      clients: [
        { name: 'SIB', logo: '/clients/sib.png' },
        { name: 'CNAM', logo: '/clients/cnam.jpeg' },
        { name: 'SNEDAI', logo: '/clients/snedai.jpeg' },
        { name: 'Addoha', logo: '/clients/addoha.png' },
        { name: '2AT', logo: '/clients/2at.png' },
        { name: 'ICWP', logo: '/clients/icwp.png' },
        { name: 'digabloPos', logo: '/clients/digablopos.png', href: 'https://digablopos.fr/' },
        { name: 'DIGABLO', logo: '/clients/digablo.png', href: 'https://digablo.fr/' },
        { name: 'Surestaria', logo: '/clients/surestaria.png', href: 'https://surestaria.com/' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Discutons de votre projet',
      intro:
        'Que vous démarriez votre transformation digitale ou que vous souhaitiez passer à l’étape suivante, notre équipe vous accompagne de la stratégie à la mise en œuvre. Demandez votre consultation gratuite.',
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Décrivez-nous votre projet',
      submit: 'Envoyer le message',
      note: 'Réponse sous 24h ouvrées. Ou écrivez-nous directement à infos@fintechconsultingsa.com',
    },
  },
  en: {
    seoTitle: 'FinTech Consulting SA — Digital transformation & FinTech in Côte d’Ivoire',
    seoDescription:
      'Consulting firm in Abidjan: Finance & FinTech, IT infrastructure & cloud, cybersecurity, telecoms and training. FinTech Consulting SA accelerates the digital transformation of Ivorian enterprises.',
    hero: {
      eyebrow: 'FinTech · Consulting · Côte d’Ivoire',
      title: 'The future of finance',
      titleAccent: 'is digital',
      subtitle:
        'In Abidjan, FinTech Consulting SA supports banks, financial institutions and enterprises in their digital transformation. Our mission goes beyond technology: we forge the digital sovereignty of African finance.',
      ctaPrimary: 'Free consultation',
      ctaSecondary: 'Explore our services',
      badges: ['BCEAO & WAEMU compliance', 'Based in Abidjan', '24/7 support'],
    },
    services: {
      eyebrow: 'Our expertise',
      heading: 'Four pillars, one mastered transformation',
      subheading:
        'From digital finance to critical infrastructure, we cover the entire chain of your digital transformation, with strong local roots.',
      linkLabel: 'See our services in detail',
      groups: [
        {
          id: 'finance',
          name: 'Finance & FinTech',
          tagline: 'Digital finance, compliant and high-performing.',
          items: [
            { title: 'Financial engineering', desc: 'Optimization, structuring and tailored financial management solutions.', slug: 'finance-fintech' },
            { title: 'Payment digitalization', desc: 'Mobile money, monetics and merchant payment integrated into your systems.', slug: 'finance-fintech' },
            { title: 'Card switching', desc: 'Secure, real-time interconnection of payment networks (GIM-WAEMU).', slug: 'finance-fintech' },
            { title: 'Business Intelligence', desc: 'Automated reporting and dashboards to decide by data.', slug: 'finance-fintech' },
          ],
        },
        {
          id: 'tech',
          name: 'Technology, Cloud & Security',
          tagline: 'Solid, protected IT foundations.',
          items: [
            { title: 'Infrastructure & data center', desc: 'Reliable, scalable LAN/WAN networks, servers and server rooms.', slug: 'infrastructure-cloud' },
            { title: 'Cloud & continuity', desc: 'Migration, cloud architecture, backup and continuity plans.', slug: 'infrastructure-cloud' },
            { title: 'Cybersecurity', desc: 'Audit, data protection and ARTCI compliance for your systems.', slug: 'cybersecurite' },
            { title: 'Telecoms & connectivity', desc: 'VSAT satellite, fiber optic and interconnection of your sites.', slug: 'telecoms' },
          ],
        },
        {
          id: 'conseil',
          name: 'Consulting & Support',
          tagline: 'From strategy to adoption.',
          items: [
            { title: 'Digital audit & strategy', desc: 'Maturity diagnosis and a prioritized transformation roadmap.', slug: 'conseil-formation' },
            { title: 'Change management', desc: 'Human support to durably anchor new ways of working.', slug: 'conseil-formation' },
            { title: 'Tailored training', desc: 'Programs adapted to your business, in person in Abidjan or remote.', slug: 'conseil-formation' },
            { title: 'Governance & steering', desc: 'Indicators, governance and ongoing support for your projects.', slug: 'conseil-formation' },
          ],
        },
      ],
    },
    solutions: {
      eyebrow: 'Our solutions',
      heading: 'Digital solutions built for Africa',
      subheading:
        'Beyond consulting, we design and deploy sovereign, secure products adapted to African realities — from finance to retail and logistics.',
      items: [
        {
          name: 'Digital Core Banking',
          tag: 'Banking · Microfinance · Real time',
          desc: 'Account and transaction management platform with a modern, user-centric interface, for banks and microfinance institutions.',
          features: [
            'Real-time account and transaction management',
            'Intuitive interface for your agents and customers',
            'Mobile money and merchant payment integration',
            'Designed for BCEAO / WAEMU compliance',
          ],
        },
        {
          name: 'Card Switch',
          tag: 'Payment · Cards · Interconnection',
          desc: 'Secure real-time interconnection of payment networks: cards, mobile money and interbank systems, to streamline your transactions.',
          features: [
            'Real-time interconnection of payment networks',
            'End-to-end transaction security',
            'Card and GIM-WAEMU compatibility',
            'Monitoring and high availability',
          ],
        },
        {
          name: 'digabloPos',
          tag: 'Point of sale · Mobile money · Offline',
          desc: 'Modern POS software for retail, restaurants and cafés. Free plan available, built-in mobile money payments, and it works even offline.',
          features: [
            'Fast checkout on mobile, tablet or computer',
            'Built-in mobile money payments',
            'Offline mode with automatic sync',
            'Real-time inventory and reports',
          ],
          href: 'https://digablopos.fr/',
          cta: 'Visit the site',
        },
        {
          name: 'Surestaria',
          tag: 'Freight & customs · Billing · Africa',
          desc: 'Demurrage management software for freight forwarders and customs brokers: container tracking, case management and multi-currency billing.',
          features: [
            'Automated demurrage calculation',
            'Container and case tracking',
            'Multi-currency billing (USD, EUR, FCFA…)',
            'Built for sub-Saharan Africa',
          ],
          href: 'https://surestaria.com/',
          cta: 'Visit the site',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      heading: 'Your partner for digital sovereignty',
      paragraphs: [
        'FinTech Consulting SA is an Ivorian consulting firm specializing in digital transformation. We combine financial expertise, cutting-edge technology and innovation to guide organizations toward modern, agile and secure models.',
        'Our ambition: to become a major player in digital transformation across Africa, recognized for its expertise, agility and the value it creates. We believe in an African finance that is mastered, sovereign and serves everyone.',
        'Three principles guide us — Innovation, Excellence, Transparency — and one conviction: technology only matters when it delivers measurable results for our clients.',
      ],
      stats: [
        { value: '4', label: 'Areas of expertise' },
        { value: '6', label: 'Major references' },
        { value: '24/7', label: 'Monitoring & support' },
        { value: 'Abidjan', label: 'Local roots, pan-African ambition' },
      ],
    },
    process: {
      eyebrow: 'How we work',
      heading: 'From audit to adoption, friction-free',
      subheading: 'A clear four-step approach, for a mastered transformation and measurable results.',
      steps: [
        { title: '1 · Audit & diagnosis', desc: 'We analyze your processes, digital maturity and compliance challenges.' },
        { title: '2 · Strategy & scoping', desc: 'We define a prioritized roadmap aligned with your business goals.' },
        { title: '3 · Deployment', desc: 'We roll out solutions in stages, with security and quality at every milestone.' },
        { title: '4 · Support', desc: 'We train your teams, monitor and evolve your systems 24/7.' },
      ],
    },
    references: {
      eyebrow: 'They trust us',
      heading: 'References that speak for themselves',
      subheading:
        'Banks, public bodies and large groups trust us with their digital transformation and critical infrastructure.',
      clients: [
        { name: 'SIB', logo: '/clients/sib.png' },
        { name: 'CNAM', logo: '/clients/cnam.jpeg' },
        { name: 'SNEDAI', logo: '/clients/snedai.jpeg' },
        { name: 'Addoha', logo: '/clients/addoha.png' },
        { name: '2AT', logo: '/clients/2at.png' },
        { name: 'ICWP', logo: '/clients/icwp.png' },
        { name: 'digabloPos', logo: '/clients/digablopos.png', href: 'https://digablopos.fr/' },
        { name: 'DIGABLO', logo: '/clients/digablo.png', href: 'https://digablo.fr/' },
        { name: 'Surestaria', logo: '/clients/surestaria.png', href: 'https://surestaria.com/' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's talk about your project",
      intro:
        'Whether you are starting your digital transformation or ready for the next step, our team supports you from strategy to delivery. Request your free consultation.',
      name: 'Your name',
      email: 'Your email',
      message: 'Tell us about your project',
      submit: 'Send message',
      note: 'We reply within 1 business day. Or email us directly at infos@fintechconsultingsa.com',
    },
  },
};
