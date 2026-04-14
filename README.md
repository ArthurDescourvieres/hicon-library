# @derroce/icons

Librairie d'icônes SVG optimisées pour React.

## Installation

```bash
pnpm install @derroce/icons
# ou
npm install @derroce/icons
# ou
yarn add @derroce/icons
```

**Aucune configuration requise !** Le package est public sur npm.

## Utilisation rapide

```tsx
import { IconBoldHome1, IconLinearSearch1 } from "@derroce/icons";

function Example() {
  return (
    <div>
      <IconBoldHome1 size={24} />
      <IconLinearSearch1 size={24} />
    </div>
  );
}
```

Voir [USAGE.md](./USAGE.md) pour plus de détails et d'exemples.

## Documentation complète

**Pour utiliser la librairie dans votre projet** : Consultez [USAGE.md](./USAGE.md) pour le guide complet d'utilisation.

**Pour contribuer ou développer la librairie** : Ce README contient les informations de développement.

### Convention de nommage

Les composants suivent la convention : `Icon{Style}{Nom}`

- **Style** : `Bold` ou `Linear` (selon le dossier source)
- **Nom** : Nom du fichier SVG converti en PascalCase

Exemples :
- `Bold/Arrows/Download.svg` → `IconBoldDownload`
- `Linear/Users/Profile Circle.svg` → `IconLinearProfileCircle`

## Structure

```
src/
  icons/
    Bold/          # Icônes en style Bold
      Arrows/
      Call/
      Essetional/
      ...
    Linear/        # Icônes en style Linear
      Arrows/
      Call/
      Essetional/
      ...
  components/      # Composants React générés (auto-généré)
  index.ts         # Exports (auto-généré)
dist/              # Build final (généré)
```

## Développement

```bash
# Optimiser les SVG
npm run optimize:svg

# Générer les composants React
npm run generate:icons

# Build complet
npm run build
```

