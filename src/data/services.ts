import type { Lang } from '../i18n/ui';

export interface ServiceOffering {
  title: string;
  desc: string;
}
export interface ServiceFaq {
  q: string;
  a: string;
}
export interface Service {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string[];
  offerings: ServiceOffering[];
  deliverables: string[];
  faq: ServiceFaq[];
  ctaLine: string;
}

export const servicesContent: Record<Lang, Service[]> = {
  fr: [
    {
      slug: 'finance-fintech',
      name: 'Finance & FinTech',
      metaTitle: 'Finance & FinTech en Côte d’Ivoire — Ingénierie financière | FinTech Consulting SA',
      metaDescription:
        'Ingénierie financière, digitalisation des paiements, monétique et Business Intelligence pour banques, microfinances et entreprises en Côte d’Ivoire. FinTech Consulting SA, Abidjan.',
      tagline: 'La finance digitale, conçue pour le marché ivoirien et l’espace UEMOA.',
      intro: [
        'Banques, institutions de microfinance, assurances et grandes entreprises : la digitalisation financière n’est plus une option en Côte d’Ivoire. FinTech Consulting SA conçoit et déploie des solutions financières modernes, sécurisées et conformes aux exigences de la BCEAO et de l’UEMOA.',
        'De l’ingénierie financière à la monétique, en passant par la digitalisation des paiements et la Business Intelligence, nous transformons vos processus en leviers de performance et de souveraineté numérique.',
      ],
      offerings: [
        { title: 'Ingénierie financière', desc: 'Optimisation, structuration et modélisation financière au service de votre rentabilité.' },
        { title: 'Digitalisation des paiements', desc: 'Mobile money, paiement marchand, agrégation : intégrez tous les canaux de paiement ivoiriens.' },
        { title: 'Monétique & switch', desc: 'Interconnexion sécurisée temps réel des réseaux de paiement (cartes, GIM-UEMOA).' },
        { title: 'Business Intelligence', desc: 'Reporting automatisé et tableaux de bord décisionnels pour piloter par la donnée.' },
        { title: 'Audit, conformité & sécurité', desc: 'Audit financier, conformité réglementaire BCEAO et sécurisation des flux.' },
      ],
      deliverables: [
        'Audit de maturité financière et digitale',
        'Architecture de la solution et feuille de route',
        'Intégration des moyens de paiement et de la monétique',
        'Tableaux de bord et reporting automatisé',
        'Formation des équipes et accompagnement au changement',
      ],
      faq: [
        { q: 'Vos solutions sont-elles conformes à la réglementation BCEAO/UEMOA ?', a: 'Oui. Nous concevons chaque solution dans le respect du cadre réglementaire de la BCEAO et des standards de l’UEMOA, en intégrant la conformité dès la phase de conception.' },
        { q: 'Intégrez-vous le mobile money (Orange Money, MTN, Moov, Wave) ?', a: 'Oui, nous intégrons l’ensemble des moyens de paiement utilisés en Côte d’Ivoire, dont le mobile money et les agrégateurs de paiement, à vos systèmes existants.' },
        { q: 'Travaillez-vous avec les institutions de microfinance ?', a: 'Absolument. Nous accompagnons banques, IMF, assurances et entreprises de toutes tailles dans leur digitalisation financière.' },
      ],
      ctaLine: 'Digitalisons votre activité financière. Parlons-en.',
    },
    {
      slug: 'infrastructure-cloud',
      name: 'Infrastructure IT & Cloud',
      metaTitle: 'Infrastructure IT, Data Center & Cloud en Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Réseaux LAN/WAN, data center, migration cloud, sauvegarde et continuité d’activité pour les entreprises à Abidjan et en Côte d’Ivoire. FinTech Consulting SA.',
      tagline: 'Des fondations IT solides, disponibles et prêtes pour la croissance.',
      intro: [
        'Une infrastructure fiable est le socle de toute transformation digitale. FinTech Consulting SA conçoit, déploie et maintient des infrastructures IT robustes pour les entreprises et institutions financières ivoiriennes.',
        'Réseaux, data center, cloud et plans de continuité : nous bâtissons des systèmes performants, sécurisés et pensés pour la disponibilité, même dans des environnements exigeants.',
      ],
      offerings: [
        { title: 'Réseaux LAN/WAN', desc: 'Conception et mise en place de réseaux d’entreprise performants et sécurisés.' },
        { title: 'Data center & serveurs', desc: 'Installation et exploitation de salles serveurs et d’infrastructures critiques.' },
        { title: 'Migration & architecture cloud', desc: 'Migration, maintenance et architecture cloud adaptées à votre activité.' },
        { title: 'Sauvegarde & continuité', desc: 'Solutions de sauvegarde et plans de continuité d’activité (PCA/PRA).' },
        { title: 'Virtualisation', desc: 'Optimisation et consolidation de vos ressources informatiques.' },
        { title: 'Supervision & maintenance', desc: 'Monitoring 24/7 et maintenance proactive de votre parc informatique.' },
      ],
      deliverables: [
        'Audit de l’infrastructure existante',
        'Schéma d’architecture cible et dimensionnement',
        'Déploiement réseau, serveurs et cloud',
        'Plan de sauvegarde et de continuité d’activité',
        'Supervision, maintenance et support',
      ],
      faq: [
        { q: 'Gérez-vous l’hébergement local et le cloud ?', a: 'Oui, nous concevons des architectures hybrides combinant hébergement local (data center) et cloud selon vos contraintes de souveraineté, de coût et de performance.' },
        { q: 'Assurez-vous la maintenance après déploiement ?', a: 'Oui, nous proposons des contrats de supervision 24/7 et de maintenance proactive pour garantir la disponibilité de vos systèmes.' },
        { q: 'Intervenez-vous en dehors d’Abidjan ?', a: 'Oui, nous intervenons sur l’ensemble du territoire ivoirien et dans la sous-région.' },
      ],
      ctaLine: 'Construisons une infrastructure à la hauteur de vos ambitions.',
    },
    {
      slug: 'cybersecurite',
      name: 'Cybersécurité',
      metaTitle: 'Cybersécurité & protection des données en Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Audit de sécurité, protection des données, conformité ARTCI et défense contre les cybermenaces pour les entreprises et banques en Côte d’Ivoire. FinTech Consulting SA.',
      tagline: 'Protégez vos données, vos transactions et la confiance de vos clients.',
      intro: [
        'Les cyberattaques visent de plus en plus les entreprises et institutions financières africaines. FinTech Consulting SA met la sécurité au cœur de chaque projet pour protéger vos systèmes, vos données et vos flux financiers.',
        'Audit, protection, conformité et sensibilisation : nous renforçons votre posture de sécurité et vous mettons en conformité avec la réglementation ivoirienne sur la protection des données (ARTCI).',
      ],
      offerings: [
        { title: 'Audit & test d’intrusion', desc: 'Évaluation de vos vulnérabilités et plan de remédiation priorisé.' },
        { title: 'Protection des données', desc: 'Chiffrement, contrôle d’accès et protection des informations sensibles.' },
        { title: 'Sécurité des paiements', desc: 'Sécurisation des transactions et des flux monétiques de bout en bout.' },
        { title: 'Conformité ARTCI & RGPD', desc: 'Mise en conformité avec la loi ivoirienne et les standards internationaux.' },
        { title: 'Détection & réponse', desc: 'Supervision, détection des incidents et réponse aux cybermenaces.' },
        { title: 'Sensibilisation des équipes', desc: 'Formation et culture de la sécurité pour réduire le risque humain.' },
      ],
      deliverables: [
        'Audit de sécurité et cartographie des risques',
        'Plan de remédiation priorisé',
        'Déploiement des mesures techniques et organisationnelles',
        'Mise en conformité réglementaire',
        'Programme de sensibilisation et support continu',
      ],
      faq: [
        { q: 'Êtes-vous en phase avec la réglementation ivoirienne sur les données ?', a: 'Oui, nous accompagnons votre mise en conformité avec la loi ivoirienne sur la protection des données personnelles (ARTCI) et les bonnes pratiques internationales.' },
        { q: 'Réalisez-vous des tests d’intrusion ?', a: 'Oui, nous réalisons des audits techniques et des tests d’intrusion pour identifier vos vulnérabilités avant qu’un attaquant ne le fasse.' },
        { q: 'Proposez-vous de la sécurité managée ?', a: 'Oui, nous offrons des services de supervision et de réponse aux incidents en continu.' },
      ],
      ctaLine: 'Mettons votre entreprise à l’abri des cybermenaces.',
    },
    {
      slug: 'telecoms',
      name: 'Télécoms & Connectivité',
      metaTitle: 'Télécoms, VSAT & Fibre optique en Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Solutions VSAT satellite, fibre optique, réseaux haut débit, installations radio et supervision pour entreprises en Côte d’Ivoire. FinTech Consulting SA, Abidjan.',
      tagline: 'Une connectivité fiable partout, jusque dans les zones les plus reculées.',
      intro: [
        'La connectivité est vitale pour les agences bancaires, les sites industriels et les entreprises multi-sites. FinTech Consulting SA déploie des solutions télécoms robustes pour vous garder connecté, où que vous soyez en Côte d’Ivoire.',
        'Du VSAT satellite à la fibre optique, nous concevons des liaisons performantes et supervisées, adaptées aux réalités du terrain ivoirien.',
      ],
      offerings: [
        { title: 'Solutions VSAT (satellite)', desc: 'Connectivité haut débit par satellite pour les zones non couvertes.' },
        { title: 'Fibre optique & haut débit', desc: 'Liaisons fibre et réseaux haut débit pour vos sites et agences.' },
        { title: 'Installations radio', desc: 'Liaisons radio (faisceaux hertziens) pour interconnecter vos sites.' },
        { title: 'Interconnexion de sites', desc: 'Réseaux multi-sites unifiés et sécurisés (VPN, MPLS).' },
        { title: 'Communications unifiées', desc: 'Voix, visio et collaboration sur une infrastructure unique.' },
        { title: 'Monitoring & supervision', desc: 'Supervision proactive de vos liaisons pour une disponibilité maximale.' },
      ],
      deliverables: [
        'Étude de couverture et de besoins',
        'Conception de l’architecture télécom',
        'Installation VSAT, fibre ou radio',
        'Interconnexion sécurisée des sites',
        'Supervision et maintenance des liaisons',
      ],
      faq: [
        { q: 'Le VSAT fonctionne-t-il dans les zones rurales ?', a: 'Oui, le VSAT satellite est idéal pour connecter les sites situés hors des zones couvertes par la fibre ou la 4G, partout en Côte d’Ivoire.' },
        { q: 'Pouvez-vous interconnecter plusieurs agences ?', a: 'Oui, nous concevons des réseaux multi-sites sécurisés interconnectant vos agences, sièges et sites industriels.' },
        { q: 'Assurez-vous la supervision des liaisons ?', a: 'Oui, nous supervisons vos liaisons en continu pour anticiper les incidents et garantir la disponibilité.' },
      ],
      ctaLine: 'Connectons durablement tous vos sites.',
    },
    {
      slug: 'conseil-formation',
      name: 'Conseil stratégique & Formation',
      metaTitle: 'Conseil en transformation digitale & Formation en Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Audit digital, stratégie de transformation, conduite du changement et formations sur mesure pour les entreprises ivoiriennes. FinTech Consulting SA, Abidjan.',
      tagline: 'De la stratégie à l’adoption : nous accompagnons toute votre transformation.',
      intro: [
        'La technologie ne crée de la valeur que si elle est bien pensée et bien adoptée. FinTech Consulting SA vous accompagne de l’audit stratégique jusqu’à la montée en compétences de vos équipes.',
        'Audit digital, feuille de route, conduite du changement et formation : nous faisons de votre transformation un succès durable et mesurable.',
      ],
      offerings: [
        { title: 'Audit & stratégie digitale', desc: 'Diagnostic de maturité et feuille de route de transformation priorisée.' },
        { title: 'Conduite du changement', desc: 'Accompagnement humain pour ancrer durablement les nouveaux usages.' },
        { title: 'Formations sur mesure', desc: 'Programmes adaptés à vos métiers : finance digitale, cybersécurité, data.' },
        { title: 'Ateliers pratiques', desc: 'Sessions opérationnelles pour mettre les équipes en situation réelle.' },
        { title: 'Gouvernance & pilotage', desc: 'Mise en place des indicateurs et de la gouvernance de vos projets.' },
        { title: 'Support continu', desc: 'Un accompagnement durable, au-delà du simple transfert de compétences.' },
      ],
      deliverables: [
        'Diagnostic de maturité digitale',
        'Feuille de route stratégique priorisée',
        'Plan de conduite du changement',
        'Programmes de formation et supports',
        'Indicateurs de suivi et accompagnement continu',
      ],
      faq: [
        { q: 'Proposez-vous des formations en présentiel à Abidjan ?', a: 'Oui, nous animons des formations en présentiel à Abidjan et sur vos sites, ainsi qu’en distanciel selon vos besoins.' },
        { q: 'Vos formations sont-elles certifiantes ?', a: 'Nous proposons des programmes sur mesure avec attestation, conçus autour de vos métiers et de vos objectifs concrets.' },
        { q: 'Accompagnez-vous le changement après le projet ?', a: 'Oui, la conduite du changement et le support continu font partie intégrante de notre approche pour garantir l’adoption.' },
      ],
      ctaLine: 'Faisons de votre transformation un vrai succès.',
    },
  ],
  en: [
    {
      slug: 'finance-fintech',
      name: 'Finance & FinTech',
      metaTitle: 'Finance & FinTech in Côte d’Ivoire — Financial engineering | FinTech Consulting SA',
      metaDescription:
        'Financial engineering, payment digitalization, card switching and Business Intelligence for banks, microfinance and enterprises in Côte d’Ivoire. FinTech Consulting SA, Abidjan.',
      tagline: 'Digital finance, built for the Ivorian market and the WAEMU zone.',
      intro: [
        'For banks, microfinance institutions, insurers and large enterprises, financial digitalization is no longer optional in Côte d’Ivoire. FinTech Consulting SA designs and deploys modern, secure financial solutions compliant with BCEAO and WAEMU requirements.',
        'From financial engineering to card switching, payment digitalization and Business Intelligence, we turn your processes into engines of performance and digital sovereignty.',
      ],
      offerings: [
        { title: 'Financial engineering', desc: 'Optimization, structuring and financial modeling to serve your profitability.' },
        { title: 'Payment digitalization', desc: 'Mobile money, merchant payment and aggregation: integrate every Ivorian payment channel.' },
        { title: 'Card switching & monetics', desc: 'Secure, real-time interconnection of payment networks (cards, GIM-WAEMU).' },
        { title: 'Digital Core Banking', desc: 'Account and transaction management with a user-centric interface.' },
        { title: 'Business Intelligence', desc: 'Automated reporting and decision dashboards to steer by data.' },
        { title: 'Audit, compliance & security', desc: 'Financial audit, BCEAO regulatory compliance and flow security.' },
      ],
      deliverables: [
        'Financial and digital maturity audit',
        'Solution architecture and roadmap',
        'Payment and monetics integration',
        'Dashboards and automated reporting',
        'Team training and change management',
      ],
      faq: [
        { q: 'Are your solutions compliant with BCEAO/WAEMU regulation?', a: 'Yes. We design every solution within the BCEAO regulatory framework and WAEMU standards, building compliance in from the design phase.' },
        { q: 'Do you integrate mobile money (Orange Money, MTN, Moov, Wave)?', a: 'Yes, we integrate all payment methods used in Côte d’Ivoire, including mobile money and payment aggregators, into your existing systems.' },
        { q: 'Do you work with microfinance institutions?', a: 'Absolutely. We support banks, MFIs, insurers and enterprises of all sizes in their financial digitalization.' },
      ],
      ctaLine: 'Let’s digitalize your financial activity. Let’s talk.',
    },
    {
      slug: 'infrastructure-cloud',
      name: 'IT Infrastructure & Cloud',
      metaTitle: 'IT Infrastructure, Data Center & Cloud in Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'LAN/WAN networks, data center, cloud migration, backup and business continuity for enterprises in Abidjan and Côte d’Ivoire. FinTech Consulting SA.',
      tagline: 'Solid, available IT foundations ready for growth.',
      intro: [
        'Reliable infrastructure is the foundation of any digital transformation. FinTech Consulting SA designs, deploys and maintains robust IT infrastructure for Ivorian enterprises and financial institutions.',
        'Networks, data center, cloud and continuity plans: we build high-performance, secure systems designed for availability, even in demanding environments.',
      ],
      offerings: [
        { title: 'LAN/WAN networks', desc: 'Design and deployment of high-performance, secure enterprise networks.' },
        { title: 'Data center & servers', desc: 'Installation and operation of server rooms and critical infrastructure.' },
        { title: 'Cloud migration & architecture', desc: 'Migration, maintenance and cloud architecture tailored to your business.' },
        { title: 'Backup & continuity', desc: 'Backup solutions and business continuity plans (BCP/DRP).' },
        { title: 'Virtualization', desc: 'Optimization and consolidation of your IT resources.' },
        { title: 'Monitoring & maintenance', desc: '24/7 monitoring and proactive maintenance of your IT estate.' },
      ],
      deliverables: [
        'Audit of existing infrastructure',
        'Target architecture and sizing',
        'Network, server and cloud deployment',
        'Backup and business continuity plan',
        'Monitoring, maintenance and support',
      ],
      faq: [
        { q: 'Do you handle both local hosting and cloud?', a: 'Yes, we design hybrid architectures combining local hosting (data center) and cloud based on your sovereignty, cost and performance constraints.' },
        { q: 'Do you provide maintenance after deployment?', a: 'Yes, we offer 24/7 monitoring and proactive maintenance contracts to guarantee system availability.' },
        { q: 'Do you operate outside Abidjan?', a: 'Yes, we operate across Côte d’Ivoire and the sub-region.' },
      ],
      ctaLine: 'Let’s build infrastructure worthy of your ambitions.',
    },
    {
      slug: 'cybersecurite',
      name: 'Cybersecurity',
      metaTitle: 'Cybersecurity & data protection in Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Security audit, data protection, ARTCI compliance and defense against cyber threats for enterprises and banks in Côte d’Ivoire. FinTech Consulting SA.',
      tagline: 'Protect your data, your transactions and your customers’ trust.',
      intro: [
        'Cyberattacks increasingly target African enterprises and financial institutions. FinTech Consulting SA puts security at the heart of every project to protect your systems, data and financial flows.',
        'Audit, protection, compliance and awareness: we strengthen your security posture and bring you in line with Ivorian data protection regulation (ARTCI).',
      ],
      offerings: [
        { title: 'Audit & penetration testing', desc: 'Assessment of your vulnerabilities and a prioritized remediation plan.' },
        { title: 'Data protection', desc: 'Encryption, access control and protection of sensitive information.' },
        { title: 'Payment security', desc: 'End-to-end security of transactions and monetics flows.' },
        { title: 'ARTCI & GDPR compliance', desc: 'Compliance with Ivorian law and international standards.' },
        { title: 'Detection & response', desc: 'Monitoring, incident detection and response to cyber threats.' },
        { title: 'Team awareness', desc: 'Training and a security culture to reduce human risk.' },
      ],
      deliverables: [
        'Security audit and risk mapping',
        'Prioritized remediation plan',
        'Deployment of technical and organizational measures',
        'Regulatory compliance',
        'Awareness program and ongoing support',
      ],
      faq: [
        { q: 'Are you aligned with Ivorian data regulation?', a: 'Yes, we support your compliance with the Ivorian personal data protection law (ARTCI) and international best practices.' },
        { q: 'Do you perform penetration tests?', a: 'Yes, we carry out technical audits and penetration tests to find your vulnerabilities before an attacker does.' },
        { q: 'Do you offer managed security?', a: 'Yes, we provide continuous monitoring and incident response services.' },
      ],
      ctaLine: 'Let’s shield your business from cyber threats.',
    },
    {
      slug: 'telecoms',
      name: 'Telecoms & Connectivity',
      metaTitle: 'Telecoms, VSAT & Fiber optic in Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'VSAT satellite solutions, fiber optic, broadband networks, radio installations and monitoring for enterprises in Côte d’Ivoire. FinTech Consulting SA, Abidjan.',
      tagline: 'Reliable connectivity everywhere, even in the most remote areas.',
      intro: [
        'Connectivity is vital for bank branches, industrial sites and multi-site enterprises. FinTech Consulting SA deploys robust telecom solutions to keep you connected, wherever you are in Côte d’Ivoire.',
        'From VSAT satellite to fiber optic, we design high-performance, monitored links adapted to Ivorian field realities.',
      ],
      offerings: [
        { title: 'VSAT (satellite) solutions', desc: 'Satellite broadband connectivity for uncovered areas.' },
        { title: 'Fiber optic & broadband', desc: 'Fiber links and broadband networks for your sites and branches.' },
        { title: 'Radio installations', desc: 'Radio links (microwave) to interconnect your sites.' },
        { title: 'Site interconnection', desc: 'Unified, secure multi-site networks (VPN, MPLS).' },
        { title: 'Unified communications', desc: 'Voice, video and collaboration on a single infrastructure.' },
        { title: 'Monitoring & supervision', desc: 'Proactive monitoring of your links for maximum availability.' },
      ],
      deliverables: [
        'Coverage and needs assessment',
        'Telecom architecture design',
        'VSAT, fiber or radio installation',
        'Secure site interconnection',
        'Link monitoring and maintenance',
      ],
      faq: [
        { q: 'Does VSAT work in rural areas?', a: 'Yes, VSAT satellite is ideal for connecting sites outside fiber or 4G coverage, anywhere in Côte d’Ivoire.' },
        { q: 'Can you interconnect several branches?', a: 'Yes, we design secure multi-site networks interconnecting your branches, headquarters and industrial sites.' },
        { q: 'Do you monitor the links?', a: 'Yes, we monitor your links continuously to anticipate incidents and guarantee availability.' },
      ],
      ctaLine: 'Let’s connect all your sites for the long run.',
    },
    {
      slug: 'conseil-formation',
      name: 'Strategic Consulting & Training',
      metaTitle: 'Digital transformation consulting & Training in Côte d’Ivoire | FinTech Consulting SA',
      metaDescription:
        'Digital audit, transformation strategy, change management and tailored training for Ivorian enterprises. FinTech Consulting SA, Abidjan.',
      tagline: 'From strategy to adoption: we support your entire transformation.',
      intro: [
        'Technology only creates value when it is well designed and well adopted. FinTech Consulting SA supports you from strategic audit all the way to upskilling your teams.',
        'Digital audit, roadmap, change management and training: we make your transformation a lasting, measurable success.',
      ],
      offerings: [
        { title: 'Digital audit & strategy', desc: 'Maturity diagnosis and a prioritized transformation roadmap.' },
        { title: 'Change management', desc: 'Human support to durably anchor new ways of working.' },
        { title: 'Tailored training', desc: 'Programs adapted to your business: digital finance, cybersecurity, data.' },
        { title: 'Hands-on workshops', desc: 'Operational sessions to put teams in real situations.' },
        { title: 'Governance & steering', desc: 'Setting up the indicators and governance of your projects.' },
        { title: 'Ongoing support', desc: 'Lasting support, well beyond a simple skills transfer.' },
      ],
      deliverables: [
        'Digital maturity diagnosis',
        'Prioritized strategic roadmap',
        'Change management plan',
        'Training programs and materials',
        'Tracking indicators and ongoing support',
      ],
      faq: [
        { q: 'Do you offer in-person training in Abidjan?', a: 'Yes, we deliver in-person training in Abidjan and on your sites, as well as remotely depending on your needs.' },
        { q: 'Are your trainings certifying?', a: 'We offer tailored programs with certificates, designed around your business and concrete objectives.' },
        { q: 'Do you support change after the project?', a: 'Yes, change management and ongoing support are integral to our approach to ensure adoption.' },
      ],
      ctaLine: 'Let’s make your transformation a real success.',
    },
  ],
};

export function getServices(lang: Lang): Service[] {
  return servicesContent[lang];
}
export function getService(lang: Lang, slug: string): Service | undefined {
  return servicesContent[lang].find((s) => s.slug === slug);
}
