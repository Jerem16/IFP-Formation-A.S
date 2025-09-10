# IFP-Formation-A.S
# 📚 Plateforme Cours · Exercices · Quiz · Tests · Fiches Mémo

Plateforme web pour publier des **cours**, proposer des **exercices corrigés**, organiser des **quiz/tests notés**, et fournir des **fiches mémo** imprimables. Pensée pour l’accessibilité, l’évaluation continue, et l’analytics pédagogique.

---

## ✨ Fonctionnalités clés

- **Cours** : chapitrés, médias, pièces jointes, prérequis, tags.
- **Exercices** : énoncé, ressources, correction (texte/vidéo), barème.
- **Quiz/Tests** : QCM, vrai/faux, réponses courtes, appariement, tirage aléatoire, limite de temps, anti-triche basique.
- **Tentatives & Notes** : multiples tentatives, meilleure/dernière note, feedback immédiat ou différé.
- **Fiches mémo** : synthèses A4, thèmes, export PDF.
- **Parcours** : progression, pourcentage d’avancement, badges.
- **Rôles** : Admin, Formateur, Apprenant.
- **I18n & a11y** : FR/EN, navigation clavier, contrastes, ARIA.
- **SEO & Perf** : métadonnées, sitemap, images optimisées.
- **Analytics** : taux de réussite, difficulté, heatmaps de questions.

---

## 🧱 Stack technique (suggestion)

- **Front** : Next.js 15 (App Router) + React + TypeScript.
- **UI** : votre Design System (SCSS modules) ou Tailwind (au choix).
- **Auth** : Cognito (AWS Amplify) **ou** NextAuth (e-mail/Google).
- **Données** : 
  - Option A (Serverless) : **AWS Amplify GraphQL (AppSync)**.
  - Option B (classique) : **PostgreSQL + Prisma**.
- **Tests** : Vitest + Testing Library, Playwright (E2E).
- **CI/CD** : GitHub Actions.
- **Gestion paquets** : Yarn 4.x (Corepack).

> Vous pouvez démarrer en **Option B** (Prisma + Postgres local) puis migrer vers **Option A** (Amplify) sans changer le modèle fonctionnel.

---

## ⚡ Démarrage rapide

```bash
# Prérequis : Node 22+, Corepack ON, Yarn 4.x
corepack enable
corepack prepare yarn@4.9.2 --activate

# 1) Créer l'app
npx create-next-app@latest cours-platform --ts --eslint --app --src-dir --import-alias "@/*"

cd cours-platform

# 2) Dépendances de base
yarn add zod react-hook-form date-fns
yarn add @tanstack/react-query axios
# UI au choix
yarn add classnames
# Tests
yarn add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
# E2E
yarn add -D playwright @playwright/test
