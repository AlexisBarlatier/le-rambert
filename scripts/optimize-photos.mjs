import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const MAX_WIDTH = 1600;
const QUALITY = 80;
const PHOTOS_DIR = path.resolve('public/photos');

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) results.push(full);
  }
  return results;
}

const files = walk(PHOTOS_DIR);
console.log(`${files.length} images to optimize`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const before = fs.statSync(file).size;
  totalBefore += before;

  const webpPath = file.replace(/\.(jpe?g|png)$/i, '.webp');

  await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(webpPath);

  const after = fs.statSync(webpPath).size;
  totalAfter += after;

  // Remove original
  fs.unlinkSync(file);

  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`  ${path.relative(PHOTOS_DIR, webpPath)} — ${(before/1024).toFixed(0)}K → ${(after/1024).toFixed(0)}K (−${pct}%)`);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)} Mo → ${(totalAfter/1024/1024).toFixed(1)} Mo (−${((1-totalAfter/totalBefore)*100).toFixed(0)}%)`);
