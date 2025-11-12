# 🔑 Configuration du Token GitHub

## ⚠️ IMPORTANT : Sécurité

**NE COMMITEZ JAMAIS CE TOKEN DANS GIT !**

Le token a été configuré temporairement pour cette session. Pour une configuration permanente, suivez les instructions ci-dessous.

---

## Configuration temporaire (session actuelle)

Le token est déjà configuré pour cette session de terminal.

Vous pouvez maintenant publier avec :
```bash
npm run publish:github
```

---

## Configuration permanente

### Option 1 : Variable d'environnement système (Windows)

1. Ouvrez **Paramètres système** → **Variables d'environnement**
2. Cliquez sur **Nouveau** dans "Variables utilisateur"
3. Nom : `GITHUB_TOKEN`
4. Valeur : `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`
5. Cliquez sur **OK**
6. **Redémarrez votre terminal**

### Option 2 : Fichier .env (recommandé pour développement)

Créez un fichier `.env` à la racine du projet :

```bash
GITHUB_TOKEN=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
```

Puis chargez-le avant de publier :
```bash
source .env  # Linux/Mac
# ou
set -a && source .env && set +a  # Bash
```

**⚠️ Assurez-vous que `.env` est dans `.gitignore` !**

### Option 3 : PowerShell (Windows)

Pour une session PowerShell :
```powershell
$env:GITHUB_TOKEN="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"
```

Pour permanent, ajoutez dans votre profil PowerShell :
```powershell
[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', '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', 'User')
```

---

## Vérification

Vérifiez que le token est bien configuré :

```bash
echo $GITHUB_TOKEN  # Linux/Mac/Bash
# ou
echo $env:GITHUB_TOKEN  # PowerShell
```

---

## Prochaine étape

Avant de publier, assurez-vous d'avoir :

1. ✅ Modifié `package.json` avec votre username GitHub
2. ✅ Modifié l'URL du repository dans `package.json`
3. ✅ Créé le repository sur GitHub
4. ✅ Token configuré (fait ✅)

Puis publiez :
```bash
npm run publish:github
```

