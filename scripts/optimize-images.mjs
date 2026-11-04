// One-off: converts legacy/assets/* and every Unsplash photo the site uses into
// WebP files under public/images, and writes lib/image-map.json (old ref -> new path).
// Run: bun scripts/optimize-images.mjs
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'legacy/assets');
const OUT = path.join(ROOT, 'public/images');
const MAX_W = 1600;
const QUALITY = 75;

const toWebp = (input) => sharp(input).rotate().resize({ width: MAX_W, withoutEnlargement: true }).webp({ quality: QUALITY }).toBuffer();

await mkdir(path.join(OUT, 'u'), { recursive: true });
const map = {};
const byHash = {};
let before = 0, after = 0;

for (const f of (await readdir(SRC)).sort()) {
  const buf = await readFile(path.join(SRC, f));
  before += buf.length;
  const hash = createHash('sha1').update(buf).digest('hex');
  if (byHash[hash]) { map['assets/' + f] = byHash[hash]; continue; }
  const out = await toWebp(buf);
  const rel = '/images/' + f.replace(/\.(png|jpe?g)$/i, '.webp');
  await writeFile(path.join(ROOT, 'public', rel), out);
  after += out.length;
  map['assets/' + f] = byHash[hash] = rel;
}

const src = await readFile(path.join(ROOT, 'legacy/js/components.js'), 'utf8');
const ids = [...new Set([...src.matchAll(/(?:photo-|')(\d{10,13}-[0-9a-f]{12})/g)].map((m) => m[1]))].sort();
for (const id of ids) {
  const res = await fetch(`https://images.unsplash.com/photo-${id}?auto=format&fit=max&w=${MAX_W}&q=90`);
  if (!res.ok) throw new Error(`unsplash ${id}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  before += buf.length;
  const out = await toWebp(buf);
  await writeFile(path.join(OUT, 'u', id + '.webp'), out);
  after += out.length;
  map['unsplash:' + id] = '/images/u/' + id + '.webp';
}

await writeFile(path.join(ROOT, 'lib/image-map.json'), JSON.stringify(map, null, 2) + '\n');
const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
console.log(`${Object.keys(map).length} refs, ${ids.length} unsplash; ${mb(before)} -> ${mb(after)}`);
