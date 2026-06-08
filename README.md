# Site FinTech Consulting SA

Site de **FinTech Consulting SA**, cabinet de conseil en transformation digitale, FinTech
et infrastructures basé à **Abidjan (Côte d'Ivoire)**.
Construit avec **Astro + Tailwind CSS v4**, bilingue (FR / EN), optimisé SEO (ciblage
Côte d'Ivoire), scores Lighthouse visés 100/100/100/100.

## 🚀 Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production -> dossier dist/
npm run preview    # prévisualiser le build de production
```

## 🌍 Déploiement

Le site est **statique** : il se déploie tel quel sur Vercel ou Netlify.

### Vercel
1. Pousser le projet sur GitHub (`cloudbasethis-commits/fintechconsulting`).
2. Sur vercel.com : *New Project* → importer le repo.
3. Vercel détecte Astro automatiquement. Cliquer *Deploy*.
4. Brancher le domaine `fintechconsulting-sa.net` dans *Settings → Domains*.

### Netlify
Le fichier `netlify.toml` est déjà configuré (build `npm run build`, publish `dist`).

## ✉️ Formulaire de contact (À FAIRE)

Le formulaire utilise [Web3Forms](https://web3forms.com) (gratuit, sans backend).

1. Créer une clé d'accès gratuite sur web3forms.com avec l'email de réception
   (ex. `infos@fintechconsultingsa.com`).
2. Dans `src/components/Home.astro`, remplacer `VOTRE_CLE_WEB3FORMS` par la vraie clé.

## ✍️ Ajouter un article de blog

Créer un fichier Markdown dans :
- `src/content/blog/fr/` pour le français
- `src/content/blog/en/` pour l'anglais

Pour lier un article FR et son équivalent EN (hreflang), **utiliser le même nom de fichier**
dans les deux dossiers.

En-tête (frontmatter) à copier :

```markdown
---
title: "Titre de l'article"
description: "Résumé pour Google et les réseaux (150-160 caractères)."
pubDate: 2026-06-10
lang: "fr"            # ou "en"
author: "FinTech Consulting SA"
tags: ["Finance digitale", "Côte d'Ivoire"]
draft: false          # mettre true pour ne pas publier
---

Le contenu de l'article en **Markdown**.
```

## 🧩 Ajouter / modifier un service

Tout le contenu des pages services est dans `src/data/services.ts` (FR + EN).
Pour ajouter un service : ajoute un objet dans le tableau `fr` **et** dans `en`
avec le **même `slug`**. La page `/services/<slug>` est générée automatiquement.

## 🖼️ Régénérer le favicon / l'image de partage (OpenGraph)

```bash
node scripts/gen-assets.mjs
```

Régénère les favicons et `public/brand/og-default.png` à partir des logos de marque
(`src/assets/brand/`). Le favicon source est `public/brand/fintech-favicon.png`.

## 📈 Stratégie SEO

Le plan de mots-clés ciblé Côte d'Ivoire est dans `docs/seo-plan.md` et
`docs/keyword-research.md` (par thème, langue, intention, calendrier éditorial 12 mois).

## 🗂️ Structure

```
src/
  components/   Header, Footer, Home (sections), About, Services, BlogIndex
  layouts/      BaseLayout (SEO global), ArticleLayout
  data/         home.ts, about.ts, services.ts (tout le contenu FR + EN)
  i18n/         Dictionnaire et helpers de traduction
  content/blog/ Articles (fr/ et en/)
  pages/        Routes (/, /en/, /services/, /blog/, rss.xml...)
  styles/       global.css (design system + couleurs de marque)
public/brand/   Logos, favicons, image OG
```

## 🎨 Couleurs de marque

Définies dans `src/styles/global.css` (bloc `@theme`), dérivées du logo :
`brand` (bleu fintech), `teal` (cyan/vert), `ink` (navy profond).

## ☎️ Coordonnées

- **Adresse** : Angré Djorogobité 2, 286 — Abidjan, Côte d'Ivoire
- **Téléphone** : +225 27 21 57 08 65
- **Email** : infos@fintechconsultingsa.com *(à confirmer)*
