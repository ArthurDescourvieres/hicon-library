import { readFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, '..', 'dist');
const DIST_INDEX = join(DIST_DIR, 'index.js');
const DIST_COMPONENTS_DIR = join(DIST_DIR, 'components');

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
  }

  if (missing.length > 0) {
    console.error('[verify-dist] Build invalide: exports cassés détectés.');
    for (const m of missing) {
      console.error(
        `- ${m.base}: js=${m.hasJs ? 'ok' : 'MISSING'} (${m.jsPath}), d.ts=${
          m.hasDts ? 'ok' : 'MISSING'
        } (${m.dtsPath})`
      );
    }
    process.exit(1);
  }

  console.log(`[verify-dist] OK (${basenames.size} composants vérifiés).`);
}

main().catch((err) => {
  console.error('[verify-dist] Erreur inattendue:', err);
  process.exit(1);
});
