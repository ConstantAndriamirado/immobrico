# ImmoBrico — Site vitrine

Site vitrine multi-pages pour ImmoBrico (montage de meubles & aménagement, Orléans / Loiret).
Next.js 14 (App Router) + TypeScript.

## Lancer en local
```bash
npm install
npm run dev
```
→ http://localhost:3000

## Build de production
```bash
npm run build && npm run start
```

## Structure
- `app/` — pages (App Router) : accueil, services (+ détail par prestation), réalisations,
  professionnels, tarifs, à propos, contact, zones d'intervention, FAQ, actualités (+ articles).
- `components/` — Header, Footer, formulaire de devis, etc.
- `lib/` — contenu structuré (services, réalisations, FAQ, articles).
- `app/api/devis` — réception du formulaire (e-mail Resend à activer via variables d'env).

## SEO
`sitemap.xml`, `robots.txt`, métadonnées par page et JSON-LD (HomeAndConstructionBusiness).

## Images reprises du site actuel
Les photos sont reprises d'immobrico.eu et hot-linkées depuis son CDN. Pour les héberger en local :
```bash
npm run localiser-images
```
# immobrico
