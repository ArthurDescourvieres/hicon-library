import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, extname, basename, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ICONS_DIR = join(__dirname, '../src/icons');
const COMPONENTS_DIR = join(__dirname, '../src/components');
const INDEX_FILE = join(__dirname, '../src/index.ts');
const ICON_NAMES_FILE = join(__dirname, '../src/icon-names.ts');
const EXPORTS_DIR = join(__dirname, '../src/exports');

const EXPORT_CHUNK_SIZE = 250; // <= 300 lignes par fichier (confortable)

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

/**
 * Remplace les couleurs codées en dur par currentColor pour permettre la personnalisation
 * @param {string} svgContent - Contenu SVG à traiter
 * @returns {string} - Contenu SVG avec les couleurs remplacées
 */
function replaceHardcodedColors(svgContent) {
  // Couleurs par défaut des icônes à remplacer
  // On couvre ici l'ensemble des gris/violets utilisés comme couleurs \"de base\"
  // dans les sets Bold/Linear, pour s'assurer qu'ils suivent toujours currentColor.
  const colorsToReplace = [
    '#414141', // Gris foncé (Linear)
    '#2D264B', // Violet foncé (Bold, ancien set)
    '#323232', // Gris foncé (Bold - variantes)
    '#6D6D6D', // Gris moyen (Bold - variantes)
    '#2c2c2c', // Gris foncé (Bold - variantes, casse différente)
  ];

  let processed = svgContent;

  // Attributs SVG à traiter (fill et stroke)
  const attributes = ['fill', 'stroke'];

  // Remplacer chaque couleur dans chaque attribut
  for (const color of colorsToReplace) {
    const escapedColor = color.replace('#', '\\#');
    for (const attr of attributes) {
      // Regex pour capturer fill="#COULEUR" ou fill='#COULEUR' (guillemets simples ou doubles)
      const regex = new RegExp(`${attr}=["']${escapedColor}["']`, 'gi');
      processed = processed.replace(regex, `${attr}="currentColor"`);
    }
  }

  return processed;
}

/**
 * Convertit les noms d'attributs SVG kebab-case en camelCase pour JSX (React).
 * Évite les warnings "Invalid DOM property `stroke-linecap`" etc.
 */
function convertSvgAttributesForReact(svgContent) {
  let result = svgContent;
  const attrRenames = [
    ['stroke-linecap', 'strokeLinecap'],
    ['stroke-width', 'strokeWidth'],
    ['clip-path', 'clipPath'],
    ['fill-rule', 'fillRule'],
    ['clip-rule', 'clipRule'],
    ['stroke-linejoin', 'strokeLinejoin'],
    ['stroke-dasharray', 'strokeDasharray'],
    ['stroke-dashoffset', 'strokeDashoffset'],
    ['stroke-miterlimit', 'strokeMiterlimit'],
    ['fill-opacity', 'fillOpacity'],
    ['stroke-opacity', 'strokeOpacity'],
  ];
  for (const [from, to] of attrRenames) {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\b${escaped}\\s*=`, 'g');
    result = result.replace(re, `${to}=`);
  }
  return result;
}

async function generateComponent(svgContent, componentName) {
  // Remplacer les couleurs codées en dur par currentColor, puis attributs JSX
  const processedSvgContent = convertSvgAttributesForReact(replaceHardcodedColors(svgContent));

  // Extraire le contenu SVG (sans les balises <svg>)
  const svgMatch = processedSvgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
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
    await mkdir(EXPORTS_DIR, { recursive: true });

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
        file: `./components/${componentName}`, // depuis src/index.ts
      });

      console.log(`✅ ${componentName} (${fileInfo.relativePath})`);
    }

    // Nettoyer l'ancien contenu de src/exports (évite des fichiers obsolètes)
    const existingExportFiles = await readdir(EXPORTS_DIR).catch(() => []);
    for (const filename of existingExportFiles) {
      if (/^exports-\d+\.ts$/.test(filename)) {
        await writeFile(join(EXPORTS_DIR, filename), '', 'utf-8');
      }
    }

    // Générer des fichiers d'exports chunkés (< 300 lignes), puis un index.ts minimal.
    const exportLines = exports.map(
      (exp) => `export { ${exp.name}, type ${exp.name}Props } from '../components/${exp.name}';`
    );

    const chunkFiles = [];
    for (let i = 0; i < exportLines.length; i += EXPORT_CHUNK_SIZE) {
      const chunk = exportLines.slice(i, i + EXPORT_CHUNK_SIZE);
      const chunkIdx = Math.floor(i / EXPORT_CHUNK_SIZE) + 1;
      const chunkFilename = `exports-${chunkIdx}.ts`;
      const chunkPath = join(EXPORTS_DIR, chunkFilename);
      await writeFile(chunkPath, chunk.join('\n') + '\n', 'utf-8');
      chunkFiles.push(chunkFilename.replace(/\.ts$/, ''));
    }

    const indexContent = chunkFiles.map((base) => `export * from './exports/${base}';`).join('\n') + '\n';
    await writeFile(INDEX_FILE, indexContent, 'utf-8');

    // Générer le fichier icon-names.ts avec la liste de tous les noms d'icônes
    const iconNames = exports.map(exp => exp.name).sort();
    const iconNamesContent = `// Liste de tous les noms d'icônes disponibles
// Total: ${iconNames.length} icônes
// Généré automatiquement par scripts/generate-icons.js

export const ICON_NAMES = ${JSON.stringify(iconNames)} as const;

export type IconName = typeof ICON_NAMES[number];
`;

    await writeFile(ICON_NAMES_FILE, iconNamesContent, 'utf-8');
    console.log(`✨ Génération terminée ! ${exports.length} composant(s) créé(s).`);
    console.log(`📋 Liste des noms d'icônes générée dans src/icon-names.ts`);
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



