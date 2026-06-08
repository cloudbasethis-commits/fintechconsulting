export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr';

export type Lang = keyof typeof languages;

/**
 * Chaînes partagées de l'interface (header, footer, CTA récurrents).
 * Le contenu long des pages est écrit directement dans chaque page localisée.
 */
export const ui = {
  fr: {
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Consultation gratuite',
    'footer.tagline':
      "Cabinet de conseil en transformation digitale, FinTech et infrastructures à Abidjan. Nous forgeons la souveraineté numérique de la finance africaine.",
    'footer.services': 'Expertises',
    'footer.company': 'Entreprise',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.solutions': 'Nos solutions',
    'footer.finance': 'Finance & FinTech',
    'footer.infra': 'Infrastructure & Cloud',
    'footer.cyber': 'Cybersécurité',
    'footer.telecom': 'Télécoms & Connectivité',
    'footer.conseil': 'Conseil & Formation',
    'footer.legal': 'Mentions légales',
    'common.talk': 'Parlons de votre projet',
    'common.readMore': 'Lire la suite',
    'common.allPosts': 'Tous les articles',
    'common.backToBlog': '← Retour au blog',
    'common.published': 'Publié le',
    'common.minRead': 'min de lecture',
  },
  en: {
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Free consultation',
    'footer.tagline':
      'Digital transformation, FinTech and infrastructure consulting firm based in Abidjan. We forge the digital sovereignty of African finance.',
    'footer.services': 'Expertise',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.solutions': 'Our solutions',
    'footer.finance': 'Finance & FinTech',
    'footer.infra': 'Infrastructure & Cloud',
    'footer.cyber': 'Cybersecurity',
    'footer.telecom': 'Telecoms & Connectivity',
    'footer.conseil': 'Consulting & Training',
    'footer.legal': 'Legal notice',
    'common.talk': "Let's talk about your project",
    'common.readMore': 'Read more',
    'common.allPosts': 'All articles',
    'common.backToBlog': '← Back to blog',
    'common.published': 'Published on',
    'common.minRead': 'min read',
  },
} as const;
