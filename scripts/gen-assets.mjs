// Génère les assets de marque : image OpenGraph (1200x630) + apple-touch-icon (180x180).
// Lancer avec : node scripts/gen-assets.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, '..', 'public');
const brand = resolve(pub, 'brand');

// ---------- 1. Favicons depuis le logo de marque (public/brand/fintech-favicon.png) ----------
const faviconSrc = resolve(brand, 'fintech-favicon.png');
const iconSizes = [
  { size: 32, out: resolve(pub, 'favicon-32.png') },
  { size: 192, out: resolve(pub, 'favicon-192.png') },
  { size: 180, out: resolve(pub, 'apple-touch-icon.png') },
];
for (const { size, out } of iconSizes) {
  await sharp(faviconSrc).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(out);
}
console.log('✓ favicon-32.png, favicon-192.png, apple-touch-icon.png');

// ---------- 2. Image OpenGraph (1200x630) ----------
const W = 1200;
const H = 630;

const bg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="16%" r="60%">
      <stop offset="0%" stop-color="#36c89e" stop-opacity="0.30" />
      <stop offset="70%" stop-color="#0a1428" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#5a8dfb" />
      <stop offset="1" stop-color="#1f4fe0" />
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0a1428" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />
  <circle cx="${W - 120}" cy="120" r="220" fill="#1f4fe0" opacity="0.14" />
  <rect x="0" y="0" width="${W}" height="10" fill="url(#accent)" />
  <text x="${W / 2}" y="430" text-anchor="middle"
    font-family="'Segoe UI', Arial, sans-serif" font-size="42" font-weight="700" fill="#eaf0fb">
    L'avenir de la finance est digital
  </text>
  <text x="${W / 2}" y="488" text-anchor="middle"
    font-family="'Segoe UI', Arial, sans-serif" font-size="26" font-weight="400" fill="#8eb6ff">
    Finance · Cloud · Cybersécurité · Télécoms · Abidjan
  </text>
</svg>`);

// Logo clair (blanc) redimensionné — visible sur fond navy
const logo = await sharp(resolve(__dirname, '..', 'src', 'assets', 'brand', 'fintech-logo-light.png'))
  .resize({ width: 300 })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp(bg)
  .composite([
    {
      input: logo,
      top: Math.round(250 - logoMeta.height / 2),
      left: Math.round((W - logoMeta.width) / 2),
    },
  ])
  .png()
  .toFile(resolve(brand, 'og-default.png'));
console.log('✓ brand/og-default.png');
