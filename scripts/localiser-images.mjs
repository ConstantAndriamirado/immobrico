// Télécharge en local toutes les images hot-linkées depuis le CDN d'immobrico.eu,
// puis réécrit les URLs vers /assets/<fichier>. Idempotent.
// Usage : npm run localiser-images
import { readFile, writeFile, mkdir, readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOTS = ['lib', 'app', 'components'];
const OUT = join('public', 'assets');
const CDN = /https:\/\/(?:images|files)\.cdn-files-a\.com\/uploads\/8174732\/[^\s"'`)<>]+/g;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir)) {
    const p = join(dir, e);
    const s = await stat(p);
    if (s.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(ts|tsx|js|jsx)$/.test(e)) out.push(p);
  }
  return out;
}

function fileNameFor(url) {
  const clean = url.split('?')[0];
  let name = clean.split('/').pop() || 'img';
  if (!extname(name)) name += '.jpg';
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

const run = async () => {
  await mkdir(OUT, { recursive: true });
  const files = (await Promise.all(ROOTS.map((r) => walk(r).catch(() => [])))).flat();
  const urls = new Set();
  const contents = new Map();
  for (const f of files) {
    const c = await readFile(f, 'utf8');
    contents.set(f, c);
    (c.match(CDN) || []).forEach((u) => urls.add(u.split('?')[0]));
  }
  console.log(`${urls.size} image(s) à récupérer…`);

  const map = new Map();
  for (const u of urls) {
    const name = fileNameFor(u);
    const dest = join(OUT, name);
    try {
      await stat(dest);
    } catch {
      const res = await fetch(u);
      if (!res.ok) { console.warn('  ✗', u, res.status); continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(dest, buf);
      console.log('  ✓', name);
    }
    map.set(u, `/assets/${name}`);
  }

  let changed = 0;
  for (const [f, c] of contents) {
    const next = c.replace(CDN, (m) => {
      const base = m.split('?')[0];
      return map.get(base) || m;
    });
    if (next !== c) { await writeFile(f, next); changed++; }
  }
  console.log(`Terminé. ${map.size} image(s) en local, ${changed} fichier(s) réécrit(s).`);
  console.log('Pensez à relancer `npm run build`.');
};

run().catch((e) => { console.error(e); process.exit(1); });
