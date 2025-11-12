# 📦 Tutoriel : Publier sur GitHub Packages

Guide complet pour publier et utiliser votre librairie d'icônes sur GitHub Packages.

---

## 📋 Prérequis

1. Compte GitHub
2. Repository GitHub créé (peut être privé)
3. Token d'accès GitHub avec permissions `write:packages` et `read:packages`

---

## 🔧 Étape 1 : Configuration du package.json

### 1.1 Modifier le nom du package

**Important** : Le nom doit suivre le format `@votre-username/package-name`

```json
{
  "name": "@VOTRE-USERNAME/hicons",
  "repository": {
    "type": "git",
    "url": "https://github.com/VOTRE-USERNAME/hicon-library.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

**Remplacez** :
- `VOTRE-USERNAME` par votre nom d'utilisateur GitHub (en minuscules)
- L'URL du repository par celle de votre repo

### 1.2 Vérifier la configuration

Le fichier `.npmrc` est déjà créé avec :
```
@library:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

**Si vous changez le scope** (ex: `@mon-username/hicons`), modifiez aussi `.npmrc` :
```
@mon-username:registry=https://npm.pkg.github.com
```

---

## 🔑 Étape 2 : Créer un token GitHub

1. Allez sur GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Cliquez sur **Generate new token (classic)**
3. Donnez un nom (ex: "hicons-package")
4. Sélectionnez les permissions :
   - ✅ `write:packages` (pour publier)
   - ✅ `read:packages` (pour lire)
   - ✅ `delete:packages` (optionnel, pour supprimer)
5. Cliquez sur **Generate token**
6. **Copiez le token** (vous ne pourrez plus le voir après !)

---

## 🚀 Étape 3 : Publier le package

### 3.1 Configurer le token (Windows)

**Option A : Variable d'environnement temporaire (PowerShell)**
```powershell
$env:GITHUB_TOKEN="votre-token-ici"
npm run publish:github
```

**Option B : Variable d'environnement permanente**
1. Ouvrez **Paramètres système** → **Variables d'environnement**
2. Ajoutez une nouvelle variable :
   - Nom : `GITHUB_TOKEN`
   - Valeur : votre token GitHub
3. Redémarrez votre terminal

**Option C : Fichier .npmrc local (non recommandé pour Git)**
```bash
# Dans .npmrc, remplacez ${GITHUB_TOKEN} par votre token
# ⚠️ NE COMMITEZ PAS ce fichier avec le token !
```

### 3.2 Publier

```bash
# Build automatique + publication
npm run publish:github

# Ou manuellement
npm publish --registry=https://npm.pkg.github.com
```

### 3.3 Vérifier la publication

1. Allez sur votre repository GitHub
2. Cliquez sur **Packages** (à droite)
3. Vous devriez voir `@votre-username/hicons`

---

## 📥 Étape 4 : Utiliser dans vos projets

### 4.1 Créer un fichier `.npmrc` dans votre projet

À la racine de votre projet (Next.js, React, etc.) :

```bash
# .npmrc
@VOTRE-USERNAME:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

**Remplacez** `VOTRE-USERNAME` par votre username GitHub.

### 4.2 Configurer le token dans votre projet

**Même méthode qu'à l'étape 3.1** : variable d'environnement `GITHUB_TOKEN`

### 4.3 Installer le package

```bash
pnpm install @VOTRE-USERNAME/hicons
# ou
npm install @VOTRE-USERNAME/hicons
# ou
yarn add @VOTRE-USERNAME/hicons
```

### 4.4 Utiliser dans votre code

```tsx
import { IconBoldDownload, IconLinearUser } from "@VOTRE-USERNAME/hicons";

function MyComponent() {
  return (
    <div>
      <IconBoldDownload size={24} />
      <IconLinearUser size="2em" className="text-blue-500" />
    </div>
  );
}
```

---

## 🔄 Étape 5 : Mettre à jour le package

Quand vous modifiez les icônes ou le code :

```bash
# 1. Modifier la version dans package.json
# "version": "0.1.1" (patch)
# "version": "0.2.0" (minor)
# "version": "1.0.0" (major)

# 2. Rebuild et republier
npm run publish:github
```

**Ou avec version automatique** :
```bash
npm version patch  # 0.1.0 → 0.1.1
npm run publish:github
```

---

## 🛠️ Dépannage

### Erreur : "401 Unauthorized"
- Vérifiez que `GITHUB_TOKEN` est bien défini
- Vérifiez que le token a les permissions `write:packages`

### Erreur : "403 Forbidden"
- Vérifiez que le nom du package correspond à votre username GitHub
- Vérifiez que le repository existe et que vous y avez accès

### Erreur : "404 Not Found"
- Vérifiez que le scope dans `.npmrc` correspond au nom du package
- Vérifiez que le package a bien été publié sur GitHub Packages

### Le package n'apparaît pas
- Attendez quelques minutes (propagation)
- Vérifiez dans GitHub → Repository → Packages

---

## 📝 Checklist de publication

- [ ] Repository GitHub créé
- [ ] `package.json` modifié avec votre username
- [ ] `.npmrc` configuré
- [ ] Token GitHub créé avec permissions
- [ ] Variable `GITHUB_TOKEN` configurée
- [ ] `npm run build` fonctionne
- [ ] `npm run publish:github` réussit
- [ ] Package visible sur GitHub Packages
- [ ] `.npmrc` créé dans votre projet
- [ ] Installation réussie dans votre projet
- [ ] Import fonctionne dans le code

---

## 🎯 Résumé rapide

**Pour publier** :
```bash
# 1. Modifier package.json avec votre username
# 2. Créer token GitHub
# 3. Configurer GITHUB_TOKEN
npm run publish:github
```

**Pour utiliser** :
```bash
# 1. Créer .npmrc dans votre projet
# 2. Configurer GITHUB_TOKEN
pnpm install @VOTRE-USERNAME/hicons
```

---

## 📚 Ressources

- [Documentation GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Créer un token GitHub](https://github.com/settings/tokens)

