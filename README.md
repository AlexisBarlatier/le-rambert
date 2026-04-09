# Le Rambert — Site de location

Site vitrine pour la maison de vacances Le Rambert à Calviac-en-Périgord (Dordogne).

## Stack

- **Astro** — site statique avec rendu serveur pour l'authentification
- **Netlify/Vercel** — hébergement (HTTPS, déploiement auto sur push)

## Développement

```bash
npm install
npm run dev
```

## Structure

- `src/content/site.md` — contenu public (éditable par Brice)
- `src/content/private.md` — contenu privé (adresse, guide local)
- `public/photos/` — photos publiques (hero, extérieur, piscine)
- `public/photos/private/` — photos privées (chambres, salles de bain…)

## Section privée

Le site a une section accessible par email + mot de passe (transmis par Alexis).
Configurer le mot de passe dans `.env` :

```
RAMBERT_PASSWORD=votre_mot_de_passe
```
