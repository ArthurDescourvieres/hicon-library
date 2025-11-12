import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, extname, basename, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ICONS_DIR = join(__dirname, '../src/icons');
const COMPONENTS_DIR = join(__dirname, '../src/components');
const INDEX_FILE = join(__dirname, '../src/index.ts');

function toPascalCase(str) {
  // Supprimer l'extension .svg si présente
  let cleaned = str.replace(/\.svg$/, '');
  
  // Remplacer tous les séparateurs (-, _, espaces multiples) par un espace unique
  cleaned = cleaned.replace(/[-_]+/g, ' ');
  
  // Diviser par les espaces, mettre en majuscule la première lettre de chaque mot, puis joindre
  return cleaned
    .split(/\s+/)
    .filter(word => word.length > 0) // Supprimer les chaînes vides
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function generateComponentName(filename, relativePath) {
  // Extraire le style (Bold ou Linear) du chemin
  const pathParts = relativePath.split(/[/\\]/);
  const style = pathParts[0]; // Bold ou Linear
  
  // Nom du fichier sans extension
  const name = basename(filename, '.svg');
  
  // Convertir en PascalCase et ajouter le préfixe de style
  const iconName = toPascalCase(name);
  const stylePrefix = toPascalCase(style);
  
  return `Icon${stylePrefix}${iconName}`;
}

async function generateComponent(svgContent, componentName) {
  // Extraire le contenu SVG (sans les balises <svg>)
  const svgMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
  if (!svgMatch) {
    throw new Error(`Format SVG invalide pour ${componentName}`);
  }

  const innerContent = svgMatch[1].trim();
  const svgAttrs = svgMatch[0].match(/<svg([^>]*)>/)?.[1] || '';

  // Extraire les attributs pertinents
  const widthMatch = svgAttrs.match(/width=["']([^"']+)["']/);
  const heightMatch = svgAttrs.match(/height=["']([^"']+)["']/);
  const viewBoxMatch = svgAttrs.match(/viewBox=["']([^"']+)["']/);

  const width = widthMatch ? widthMatch[1] : '1em';
  const height = heightMatch ? heightMatch[1] : '1em';
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  return `import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  size = '1em',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${innerContent}
    </svg>
  );
};
`;
}

async function findSVGFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Parcourir récursivement les sous-dossiers
      const subFiles = await findSVGFiles(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile() && extname(entry.name) === '.svg') {
      // Calculer le chemin relatif depuis ICONS_DIR
      const relativePath = relative(ICONS_DIR, fullPath);
      files.push({
        path: fullPath,
        name: entry.name,
        relativePath: relativePath,
      });
    }
  }

  return files;
}

async function generateIcons() {
  try {
    await mkdir(COMPONENTS_DIR, { recursive: true });

    const svgFiles = await findSVGFiles(ICONS_DIR);

    if (svgFiles.length === 0) {
      console.log('⚠️  Aucun fichier SVG trouvé dans src/icons/');
      return;
    }

    console.log(`🔨 Génération de ${svgFiles.length} composant(s)...`);

    const exports = [];
    const componentNames = new Set(); // Pour détecter les doublons

    for (const fileInfo of svgFiles) {
      const svgContent = await readFile(fileInfo.path, 'utf-8');
      const componentName = generateComponentName(fileInfo.name, fileInfo.relativePath);

      // Vérifier les doublons
      if (componentNames.has(componentName)) {
        console.warn(`⚠️  Nom de composant dupliqué ignoré: ${componentName} (${fileInfo.relativePath})`);
        continue;
      }
      componentNames.add(componentName);

      const componentCode = await generateComponent(svgContent, componentName);
      const componentFile = join(COMPONENTS_DIR, `${componentName}.tsx`);
      await writeFile(componentFile, componentCode, 'utf-8');

      exports.push({
        name: componentName,
        file: `./components/${componentName}`,
      });

      console.log(`✅ ${componentName} (${fileInfo.relativePath})`);
    }

    // Générer le fichier index.ts
    const indexContent = exports
      .map(exp => `export { ${exp.name}, type ${exp.name}Props } from '${exp.file}';`)
      .join('\n');

    await writeFile(INDEX_FILE, indexContent, 'utf-8');
    console.log(`✨ Génération terminée ! ${exports.length} composant(s) créé(s).`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('ℹ️  Le dossier src/icons/ n\'existe pas encore. Créez-le et ajoutez vos SVG.');
    } else {
      console.error('Erreur:', error);
      throw error;
    }
  }
}

generateIcons();



