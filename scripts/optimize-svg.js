import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { optimize } from 'svgo';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ICONS_DIR = join(__dirname, '../src/icons');

const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'removeDimensions',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ width: '1em', height: '1em' }],
      },
    },
  ],
};

async function optimizeSVG(filePath) {
  const content = await readFile(filePath, 'utf-8');
  const result = optimize(content, {
    path: filePath,
    ...svgoConfig,
  });

  if (result.error) {
    console.error(`Erreur lors de l'optimisation de ${filePath}:`, result.error);
    return null;
  }

  return result.data;
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
      files.push(fullPath);
    }
  }

  return files;
}

async function processIcons() {
  try {
    const svgFiles = await findSVGFiles(ICONS_DIR);

    if (svgFiles.length === 0) {
      console.log('⚠️  Aucun fichier SVG trouvé dans src/icons/');
      return;
    }

    console.log(`📦 Optimisation de ${svgFiles.length} fichier(s) SVG...`);

    let optimizedCount = 0;
    for (const filePath of svgFiles) {
      const optimized = await optimizeSVG(filePath);

      if (optimized) {
        await writeFile(filePath, optimized, 'utf-8');
        const relativePath = filePath.replace(ICONS_DIR + '\\', '').replace(ICONS_DIR + '/', '');
        console.log(`✅ ${relativePath}`);
        optimizedCount++;
      }
    }

    console.log(`✨ Optimisation terminée ! ${optimizedCount}/${svgFiles.length} fichier(s) optimisé(s).`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('ℹ️  Le dossier src/icons/ n\'existe pas encore. Créez-le et ajoutez vos SVG.');
    } else {
      console.error('Erreur:', error);
    }
  }
}

processIcons();



