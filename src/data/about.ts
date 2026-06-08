import type { Lang } from '../i18n/ui';

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}
export interface AboutContent {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  story: { heading: string; paragraphs: string[] };
  stats: { value: string; label: string }[];
  values: { heading: string; intro: string; items: { title: string; desc: string }[] };
  team: { heading: string; intro: string; members: TeamMember[] };
  expertise: { heading: string; paragraphs: string[] };
  ctaHeading: string;
  ctaText: string;
}

export const aboutContent: Record<Lang, AboutContent> = {
  fr: {
    metaTitle: 'À propos de FinTech Consulting SA — Cabinet de conseil digital à Abidjan',
    metaDescription:
      'FinTech Consulting SA est un cabinet ivoirien spécialisé dans la transformation digitale, la finance et les infrastructures. Découvrez notre mission, nos valeurs et notre équipe à Abidjan.',
    heroEyebrow: 'À propos',
    heroTitle: 'Nous forgeons la souveraineté numérique de la finance africaine',
    heroSubtitle:
      'Basé à Abidjan, FinTech Consulting SA accompagne les organisations vers des modèles modernes, agiles et sécurisés, en combinant expertise financière, technologie et innovation.',
    story: {
      heading: 'Notre histoire',
      paragraphs: [
        'FinTech Consulting SA est née d’une conviction : l’Afrique doit maîtriser sa propre transformation financière et numérique. Plutôt que de subir la technologie, nous aidons les organisations ivoiriennes à se l’approprier.',
        'Implantés à Abidjan, nous réunissons des expertises complémentaires — finance, infrastructure, cybersécurité, télécoms et conseil — pour couvrir l’ensemble de la chaîne de valeur digitale, du diagnostic stratégique au déploiement opérationnel.',
        'Aujourd’hui, banques, organismes publics et grands groupes nous confient leurs projets les plus stratégiques, de la digitalisation financière aux infrastructures critiques.',
      ],
    },
    stats: [
      { value: '4', label: 'Pôles d’expertise' },
      { value: '6', label: 'Grandes références' },
      { value: '24/7', label: 'Supervision & support' },
      { value: 'Abidjan', label: 'Ancrage local' },
    ],
    values: {
      heading: 'Nos valeurs : Innovation, Excellence, Transparence',
      intro: 'Trois principes qui guident chacune de nos missions.',
      items: [
        { title: 'Innovation', desc: 'Nous anticipons les ruptures technologiques pour proposer des solutions à la pointe.' },
        { title: 'Excellence', desc: 'Une recherche permanente de la performance, au service de résultats mesurables.' },
        { title: 'Transparence', desc: 'Une éthique rigoureuse et une communication claire à chaque étape.' },
        { title: 'Ancrage africain', desc: 'Un engagement fort pour développer les talents et la souveraineté numérique locale.' },
      ],
    },
    team: {
      heading: 'Une équipe de direction expérimentée',
      intro: 'Des expertises complémentaires au service de votre transformation.',
      members: [
        { name: 'Miriame Ariane Fernandez', role: 'Directrice Générale', focus: 'Direction stratégique, pilotage opérationnel et coordination des équipes.' },
        { name: 'Adonis Dinga', role: 'Directeur Commercial & Marketing', focus: 'Stratégie marketing, acquisition clients et développement des partenariats.' },
        { name: 'Samba Sidibe', role: 'Directeur Informatique', focus: 'Architecture technique, déploiement des infrastructures et cybersécurité.' },
        { name: 'Anne Nguessan', role: 'Directrice Juridique', focus: 'Conformité réglementaire, protection des données et gestion des contrats.' },
      ],
    },
    expertise: {
      heading: 'Notre expertise',
      paragraphs: [
        'Notre équipe réunit des spécialistes de la finance, de l’infrastructure IT, de la cybersécurité, des télécoms et du conseil — capables de couvrir toute la chaîne de valeur digitale, du Core Banking à la connectivité VSAT.',
        'Nous concevons chaque mission dans le respect du cadre réglementaire de la BCEAO, de l’UEMOA et de la réglementation ivoirienne sur les données (ARTCI), pour des solutions à la fois performantes et conformes.',
      ],
    },
    ctaHeading: 'Envie de travailler avec nous ?',
    ctaText: 'Parlons de votre projet et construisons ensemble la finance digitale de demain.',
  },
  en: {
    metaTitle: 'About FinTech Consulting SA — Digital consulting firm in Abidjan',
    metaDescription:
      'FinTech Consulting SA is an Ivorian firm specializing in digital transformation, finance and infrastructure. Discover our mission, values and team in Abidjan.',
    heroEyebrow: 'About',
    heroTitle: 'We forge the digital sovereignty of African finance',
    heroSubtitle:
      'Based in Abidjan, FinTech Consulting SA guides organizations toward modern, agile and secure models, combining financial expertise, technology and innovation.',
    story: {
      heading: 'Our story',
      paragraphs: [
        'FinTech Consulting SA was born from a conviction: Africa must master its own financial and digital transformation. Rather than enduring technology, we help Ivorian organizations make it their own.',
        'Based in Abidjan, we bring together complementary expertise — finance, infrastructure, cybersecurity, telecoms and consulting — to cover the entire digital value chain, from strategic diagnosis to operational deployment.',
        'Today, banks, public bodies and large groups trust us with their most strategic projects, from financial digitalization to critical infrastructure.',
      ],
    },
    stats: [
      { value: '4', label: 'Areas of expertise' },
      { value: '6', label: 'Major references' },
      { value: '24/7', label: 'Monitoring & support' },
      { value: 'Abidjan', label: 'Local roots' },
    ],
    values: {
      heading: 'Our values: Innovation, Excellence, Transparency',
      intro: 'Three principles that guide every engagement.',
      items: [
        { title: 'Innovation', desc: 'We anticipate technological shifts to deliver cutting-edge solutions.' },
        { title: 'Excellence', desc: 'A permanent pursuit of performance, serving measurable results.' },
        { title: 'Transparency', desc: 'Rigorous ethics and clear communication at every step.' },
        { title: 'African roots', desc: 'A strong commitment to developing local talent and digital sovereignty.' },
      ],
    },
    team: {
      heading: 'An experienced leadership team',
      intro: 'Complementary expertise serving your transformation.',
      members: [
        { name: 'Miriame Ariane Fernandez', role: 'General Manager', focus: 'Strategic direction, operational oversight and team coordination.' },
        { name: 'Adonis Dinga', role: 'Commercial & Marketing Director', focus: 'Marketing strategy, client acquisition and partnership development.' },
        { name: 'Samba Sidibe', role: 'IT Director', focus: 'Technical architecture, infrastructure deployment and cybersecurity.' },
        { name: 'Anne Nguessan', role: 'Legal Director', focus: 'Regulatory compliance, data protection and contract management.' },
      ],
    },
    expertise: {
      heading: 'Our expertise',
      paragraphs: [
        'Our team brings together specialists in finance, IT infrastructure, cybersecurity, telecoms and consulting — able to cover the entire digital value chain, from Core Banking to VSAT connectivity.',
        'We design every engagement within the BCEAO and WAEMU regulatory framework and Ivorian data regulation (ARTCI), for solutions that are both high-performing and compliant.',
      ],
    },
    ctaHeading: 'Want to work with us?',
    ctaText: 'Let’s talk about your project and build tomorrow’s digital finance together.',
  },
};
