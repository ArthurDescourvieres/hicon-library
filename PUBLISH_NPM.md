# 🚀 Publier sur npm public

Guide pour publier `@arthur/icons` sur npm.

---

## ✅ Configuration terminée

Le `package.json` est déjà configuré pour npm public :
- ✅ Nom : `@arthur/icons`
- ✅ Registry : `https://registry.npmjs.org`
- ✅ Access : `public`
- ✅ License : `MIT`

---

## 📋 Étapes de publication

### 1. Créer un compte npm (si pas déjà fait)

1. Allez sur [npmjs.com](https://www.npmjs.com/signup)
2. Créez un compte (gratuit)
3. Vérifiez votre email

### 2. Se connecter à npm

```bash
npm login
```

**Informations demandées** :
- Username : votre nom d'utilisateur npm
- Password : votre mot de passe npm
- Email : votre email npm

### 3. Vérifier que vous êtes connecté

```bash
npm whoami
```

Vous devriez voir votre username npm.

### 4. Vérifier la disponibilité du nom

```bash
npm view @arthur/icons
```

Si ça retourne `404`, le nom est disponible ✅

### 5. Build et publication

```bash
# Build automatique + publication
npm publish
```

Le script `prepublishOnly` va automatiquement :
1. Optimiser les SVG
2. Générer les composants React
3. Compiler TypeScript
4. Publier sur npm

---

## ✅ Vérification

Après publication, vérifiez sur :
- [npmjs.com/package/@arthur/icons](https://www.npmjs.com/package/@arthur/icons)

---

## 📦 Utilisation dans vos projets

Une fois publié, dans n'importe quel projet :

```bash
pnpm install @arthur/icons
```

**Aucune configuration requise !** 🎉

```tsx
import { IconBoldDownload, IconLinearUser } from "@arthur/icons";

function MyComponent() {
  return (
    <div>
      <IconBoldDownload />
      <IconLinearUser size={32} />
    </div>
  );
}
```

---

## 🔄 Mettre à jour le package

Quand vous modifiez les icônes :

```bash
# 1. Modifier la version dans package.json
# "version": "0.1.1" (patch)
# "version": "0.2.0" (minor)
# "version": "1.0.0" (major)

# 2. Rebuild et republier
npm publish
```

Ou avec version automatique :
```bash
npm version patch  # 0.1.0 → 0.1.1
npm publish
```

---

## ⚠️ Notes importantes

1. **Scope `@arthur`** : Si le scope n'existe pas, npm le créera automatiquement lors de la première publication
2. **Nom disponible** : Vérifiez avant de publier que le nom est disponible
3. **Version** : Ne publiez pas deux fois la même version

---

## 🎯 Résumé

```bash
# 1. Se connecter (une seule fois)
npm login

# 2. Publier
npm publish

# 3. Utiliser dans vos projets
pnpm install @arthur/icons
```

C'est tout ! 🎉

