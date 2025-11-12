# Guide d'utilisation - @library/hicons

Documentation pour utiliser la librairie d'icônes dans votre projet.

## Installation

### Dépendance locale (développement)

Ajoutez la librairie à votre `package.json` :

```json
{
  "dependencies": {
    "@library/hicons": "file:../hicon-library"
  }
}
```

Puis installez :

```bash
npm install
```

**Note** : Assurez-vous que le chemin relatif `../hicon-library` correspond bien à l'emplacement de la librairie par rapport à votre projet.

### Prérequis

- React 18.0.0 ou supérieur (19.0.0 supporté)
- TypeScript (recommandé pour l'autocomplétion)

## Utilisation de base

### Import

```tsx
import { IconBoldHome1, IconLinearSearch1 } from '@library/hicons';
```

### Rendu simple

```tsx
function MyComponent() {
  return (
    <div>
      <IconBoldHome1 />
      <IconLinearSearch1 />
    </div>
  );
}
```

## Personnalisation

### Taille

Utilisez la prop `size` pour contrôler la taille de l'icône :

```tsx
// Taille par défaut (1em)
<IconBoldHome1 />

// Taille personnalisée
<IconBoldHome1 size={24} />
<IconBoldHome1 size="2rem" />
<IconBoldHome1 size="48px" />
```

### Couleur

Les icônes utilisent `currentColor` par défaut. Contrôlez la couleur via CSS :

```tsx
// Via className
<IconBoldHome1 className="text-blue-500" />

// Via style inline
<IconBoldHome1 style={{ color: '#3b82f6' }} />
```

### Autres props SVG

Toutes les props SVG standard sont supportées :

```tsx
<IconBoldHome1
  size={32}
  className="my-icon"
  onClick={() => console.log('clicked')}
  aria-label="Accueil"
  role="img"
/>
```

## Convention de nommage

Les composants suivent le pattern : `Icon{Style}{Nom}`

- **Style** : `Bold` ou `Linear` (selon le dossier source)
- **Nom** : Nom du fichier SVG converti en PascalCase

### Exemples de conversion

| Fichier SVG | Composant |
|------------|-----------|
| `Bold/Arrows/Download.svg` | `IconBoldDownload` |
| `Bold/Essetional/Home 1.svg` | `IconBoldHome1` |
| `Linear/Users/Profile Circle.svg` | `IconLinearProfileCircle` |
| `Bold/Messages/Message 2.svg` | `IconBoldMessage2` |

## Types TypeScript

Chaque composant exporte son type de props :

```tsx
import type { IconBoldHome1Props } from '@library/hicons';

function CustomIcon(props: IconBoldHome1Props) {
  return <IconBoldHome1 {...props} />;
}
```

Les props étendent `React.SVGProps<SVGSVGElement>` et ajoutent :

```tsx
interface IconBoldHome1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string; // Taille de l'icône (défaut: '1em')
}
```

## Exemples complets

### Bouton avec icône

```tsx
import { IconBoldSearch1 } from '@library/hicons';

function SearchButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
      <IconBoldSearch1 size={20} />
      Rechercher
    </button>
  );
}
```

### Navigation avec icônes

```tsx
import { IconBoldHome1, IconLinearUser, IconBoldSetting } from '@library/hicons';

function Navigation() {
  return (
    <nav>
      <a href="/home">
        <IconBoldHome1 size={24} />
        Accueil
      </a>
      <a href="/profile">
        <IconLinearUser size={24} />
        Profil
      </a>
      <a href="/settings">
        <IconBoldSetting size={24} />
        Paramètres
      </a>
    </nav>
  );
}
```

### Icône conditionnelle

```tsx
import { IconBoldSun1, IconBoldMoon } from '@library/hicons';

function ThemeToggle({ isDark }: { isDark: boolean }) {
  return isDark ? (
    <IconBoldSun1 size={24} className="text-yellow-500" />
  ) : (
    <IconBoldMoon size={24} className="text-gray-700" />
  );
}
```

### Liste d'icônes avec mapping

```tsx
import { IconBoldHome1, IconBoldUser, IconBoldSetting } from '@library/hicons';

const menuItems = [
  { icon: IconBoldHome1, label: 'Accueil', path: '/' },
  { icon: IconBoldUser, label: 'Profil', path: '/profile' },
  { icon: IconBoldSetting, label: 'Paramètres', path: '/settings' },
];

function Menu() {
  return (
    <ul>
      {menuItems.map(({ icon: Icon, label, path }) => (
        <li key={path}>
          <a href={path}>
            <Icon size={20} />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
```

## Trouver une icône

### Par style

- **Bold** : Icônes avec remplissage (filled)
- **Linear** : Icônes avec contours (outline)

### Par catégorie

Les icônes sont organisées par catégories :
- `Arrows` - Flèches et navigation
- `Call` - Appels téléphoniques
- `Essetional` - Icônes essentielles (home, search, settings, etc.)
- `Files, Content` - Fichiers et contenu
- `Like, Support` - Likes, étoiles, cœurs
- `Location` - Localisation
- `Menu` - Menus et navigation
- `Messages` - Messages et communication
- `Money` - Finance et paiements
- `Multimedia` - Médias (images, vidéos, audio)
- `Security` - Sécurité
- `Shop` - E-commerce
- `Text Editor` - Édition de texte
- `Time` - Temps et calendrier
- `Users` - Utilisateurs et profils

### Autocomplétion

Avec TypeScript, votre IDE vous proposera toutes les icônes disponibles lors de l'import :

```tsx
import { IconBold... } // ← Autocomplétion ici
```

## Bonnes pratiques

1. **Import sélectif** : Importez uniquement les icônes nécessaires pour optimiser le bundle
2. **Accessibilité** : Ajoutez `aria-label` ou `aria-hidden` selon le contexte
3. **Cohérence** : Utilisez un style cohérent (Bold ou Linear) dans votre application
4. **Taille** : Utilisez des tailles relatives (`em`, `rem`) pour la cohérence avec la typographie

## Dépannage

### L'icône ne s'affiche pas

- Vérifiez que la librairie est bien installée : `npm list @library/hicons`
- Vérifiez que le build de la librairie est à jour : `cd ../hicon-library && npm run build`
- Vérifiez l'import : le nom doit correspondre exactement à la convention

### Erreur TypeScript

- Assurez-vous que `@types/react` est installé
- Vérifiez que React 18+ est installé
- Redémarrez le serveur TypeScript de votre IDE

### Icône introuvable

- Consultez `src/index.ts` dans la librairie pour voir tous les exports disponibles
- Vérifiez la convention de nommage (Style + Nom en PascalCase)

