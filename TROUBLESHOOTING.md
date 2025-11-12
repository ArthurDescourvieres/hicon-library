# 🔧 Dépannage - Erreur 401 Unauthorized

## Problème
```
npm ERR! 401 Unauthorized - PUT https://npm.pkg.github.com/@arthurdescourvieres%2fhicons
```

## Solutions à vérifier

### 1. ✅ Vérifier les permissions du token

Le token GitHub doit avoir ces permissions :
- ✅ `write:packages` (obligatoire)
- ✅ `read:packages` (recommandé)
- ✅ `delete:packages` (optionnel)

**Comment vérifier** :
1. GitHub → Settings → Developer settings → Personal access tokens
2. Vérifiez que votre token a bien `write:packages`

### 2. ✅ Vérifier que le repository existe

Le repository doit exister sur GitHub :
- URL : `https://github.com/ArthurDescourvieres/hicon-library`
- Peut être privé ou public

**Si le repository n'existe pas** :
1. Créez-le sur GitHub
2. Assurez-vous que le nom correspond exactement

### 3. ✅ Vérifier le scope dans .npmrc

Le scope doit correspondre au nom du package :

**package.json** :
```json
"name": "@arthurdescourvieres/hicons"
```

**.npmrc** :
```
@arthurdescourvieres:registry=https://npm.pkg.github.com
```

⚠️ Le scope doit être en **minuscules** et correspondre exactement !

### 4. ✅ Vérifier que le token est bien passé

Testez l'authentification :
```bash
npm whoami --registry=https://npm.pkg.github.com
```

Si ça retourne votre username GitHub, le token fonctionne.

### 5. ✅ Vérifier la variable d'environnement

Dans PowerShell :
```powershell
$env:GITHUB_TOKEN
```

Dans Bash :
```bash
echo $GITHUB_TOKEN
```

### 6. ✅ Alternative : Token directement dans .npmrc (temporaire)

**⚠️ NE COMMITEZ PAS CE FICHIER !**

Modifiez temporairement `.npmrc` :
```
@arthurdescourvieres:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=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
```

Puis publiez :
```bash
npm run publish:github
```

**N'oubliez pas de remettre `${GITHUB_TOKEN}` après !**

### 7. ✅ Vérifier le nom d'utilisateur GitHub

Le scope doit correspondre à votre username GitHub en **minuscules** :
- Username GitHub : `ArthurDescourvieres`
- Scope : `@arthurdescourvieres` (minuscules)

## Test complet

```bash
# 1. Vérifier le token
echo $GITHUB_TOKEN

# 2. Tester l'authentification
npm whoami --registry=https://npm.pkg.github.com

# 3. Vérifier la configuration
cat .npmrc
cat package.json | grep "name"

# 4. Publier
npm run publish:github
```

## Solution rapide

Si rien ne fonctionne, utilisez le token directement dans `.npmrc` (temporairement) :

```bash
# Modifier .npmrc
echo "@arthurdescourvieres:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=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" >> .npmrc

# Publier
npm run publish:github

# Remettre la variable d'environnement après
echo "@arthurdescourvieres:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}" >> .npmrc
```

