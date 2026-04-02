import { readFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, '..', 'dist');
const DIST_INDEX = join(DIST_DIR, 'index.js');
const DIST_COMPONENTS_DIR = join(DIST_DIR, 'components');
const FORBIDDEN_COLORS = ['#323232', '#6D6D6D', '#2c2c2c'];

/** Attributs SVG kebab-case interdits dans le JS émis (doivent être en camelCase pour React). */
const FORBIDDEN_SVG_KEBAB_ATTRS = [
  'stroke-linecap',
  'stroke-width',
  'clip-path',
  'fill-rule',
  'clip-rule',
];

function parseReexports(jsContent) {
  const componentBasenames = new Set();
  const starModules = new Set();

  // export * from './exports/exports-1';
  const starRe = /export\s+\*\s+from\s+'(\.\/[^']+|..\/[^']+)';/g;
  // export { IconBoldFaqCircle } from './components/IconBoldFaqCircle';
  // export { IconBoldFaqCircle } from '../components/IconBoldFaqCircle';
  const namedRe = /export\s+\{\s*([A-Za-z0-9_$]+)(?:\s+as\s+[A-Za-z0-9_$]+)?\s*\}\s+from\s+'(\.\/[^']+|..\/[^']+)';/g;

  let match;
  // eslint-disable-next-line no-cond-assign
  while ((match = starRe.exec(jsContent)) !== null) {
    starModules.add(match[1]);
  }

  // eslint-disable-next-line no-cond-assign
  while ((match = namedRe.exec(jsContent)) !== null) {
    const _exportedName = match[1];
    const fromPath = match[2];

    const idx = fromPath.lastIndexOf('/components/');
    if (idx !== -1) {
      const base = fromPath.slice(idx + '/components/'.length);
      if (base) componentBasenames.add(base);
    }
  }

  return {
    componentBasenames: [...componentBasenames],
    starModules: [...starModules],
  };
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const toAbsoluteModuleJsPath = (fromFilePath, modulePath) => {
    // modulePath est relatif au fichier source, sans extension (.js)
    // Ex: './exports/exports-1' depuis dist/index.js
    const baseDir = dirname(fromFilePath);
    return join(baseDir, `${modulePath}.js`);
  };

  const visited = new Set();
  const queue = [DIST_INDEX];
  const basenames = new Set();

  while (queue.length > 0) {
    const filePath = queue.shift();
    if (!filePath || visited.has(filePath)) continue;
    visited.add(filePath);

    const content = await readFile(filePath, 'utf-8');
    const { componentBasenames, starModules } = parseReexports(content);

    for (const base of componentBasenames) basenames.add(base);
    for (const mod of starModules) {
      const abs = toAbsoluteModuleJsPath(filePath, mod);
      queue.push(abs);
    }
  }

  if (basenames.size === 0) {
    console.error(`[verify-dist] Aucun export de composant détecté à partir de ${DIST_INDEX}.`);
    process.exit(1);
  }

  // Vérification supplémentaire : s'assurer qu'aucune couleur hex interdite
  // n'est présente dans les composants Bold (hors masks/clipPath).
  const forbiddenMatches = [];
  const kebabAttrMatches = [];

  const missing = [];
  for (const base of basenames) {
    const jsPath = join(DIST_COMPONENTS_DIR, `${base}.js`);
    const dtsPath = join(DIST_COMPONENTS_DIR, `${base}.d.ts`);

    const hasJs = await fileExists(jsPath);
    const hasDts = await fileExists(dtsPath);

    if (!hasJs || !hasDts) {
      missing.push({
        base,
        jsPath,
        dtsPath,
        hasJs,
        hasDts,
      });
    }

    if (hasJs) {
      const jsContent = await readFile(jsPath, 'utf-8');

      for (const attr of FORBIDDEN_SVG_KEBAB_ATTRS) {
        if (jsContent.includes(attr)) {
          kebabAttrMatches.push({ base, jsPath, attr });
        }
      }

      // Si le composant est un Bold, on scanne le JS pour détecter des couleurs interdites
      if (base.startsWith('IconBold')) {
        for (const color of FORBIDDEN_COLORS) {
          if (jsContent.includes(color)) {
            forbiddenMatches.push({ base, jsPath, color });
          }
        }
      }
    }
  }

  if (missing.length > 0 || forbiddenMatches.length > 0 || kebabAttrMatches.length > 0) {
    console.error('[verify-dist] Build invalide: exports cassés détectés.');
    for (const m of missing) {
      console.error(
        `- ${m.base}: js=${m.hasJs ? 'ok' : 'MISSING'} (${m.jsPath}), d.ts=${
          m.hasDts ? 'ok' : 'MISSING'
        } (${m.dtsPath})`
      );
    }
    if (kebabAttrMatches.length > 0) {
      console.error(
        '[verify-dist] Build invalide: attributs SVG kebab-case détectés (utiliser camelCase pour React).'
      );
      for (const k of kebabAttrMatches) {
        console.error(`- ${k.base}: "${k.attr}" dans ${k.jsPath}`);
      }
    }
    if (forbiddenMatches.length > 0) {
      console.error('[verify-dist] Build invalide: couleurs hex interdites trouvées dans les icônes Bold.');
      for (const f of forbiddenMatches) {
        console.error(`- ${f.base}: couleur interdite ${f.color} dans ${f.jsPath}`);
      }
    }
    process.exit(1);
  }

  console.log(`[verify-dist] OK (${basenames.size} composants vérifiés).`);
}

main().catch((err) => {
  console.error('[verify-dist] Erreur inattendue:', err);
  process.exit(1);
});
