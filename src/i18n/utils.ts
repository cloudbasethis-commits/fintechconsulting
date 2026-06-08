import { ui, defaultLang, type Lang } from './ui';

/** Déduit la langue à partir de l'URL (/en/... => en, sinon fr). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

/** Retourne une fonction de traduction pour la langue donnée. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Préfixe un chemin avec la locale (fr => /path, en => /en/path). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** Chemin de la page « À propos » (slug localisé). */
export function aboutPath(lang: Lang): string {
  return lang === 'fr' ? '/a-propos' : '/en/about';
}

/**
 * Paires de chemins dont le slug diffère selon la langue.
 * Clé = chemin FR (sans /en), valeur = chemin EN (sans /en).
 */
const localizedSlugPairs: Record<string, string> = {
  '/a-propos': '/about',
  '/merci': '/thank-you',
};

/** Donne l'URL équivalente dans l'autre langue (pour le sélecteur de langue). */
export function alternatePath(pathname: string, target: Lang): string {
  // Normalise vers le chemin "FR" (sans préfixe /en)
  const stripped = pathname.replace(/^\/en(\/|$)/, '/').replace(/\/$/, '') || '/';

  // Gère les slugs localisés (ex: /a-propos <-> /en/about)
  const enToFr = Object.fromEntries(Object.entries(localizedSlugPairs).map(([fr, en]) => [en, fr]));
  let frPath = stripped;
  if (enToFr[stripped]) frPath = enToFr[stripped]; // on était sur la version EN

  if (target === defaultLang) {
    return frPath === '' ? '/' : frPath;
  }
  const enPath = localizedSlugPairs[frPath] ?? frPath;
  return enPath === '/' || enPath === '' ? '/en/' : `/en${enPath}`;
}
