// Builds optimized portrait assets + the social share image into public/assets.
//
// With your own photo:
//   pic1.jpeg = high-resolution photo, pic.png = background-removed cutout (same framing, transparent background)
//   then run:  npm run images
// Without them, a neutral silhouette placeholder is generated so the site still looks complete.
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

let cutout;
if (existsSync('pic1.jpeg') && existsSync('pic.png')) {
  const hi = sharp('pic1.jpeg');
  const { width, height } = await hi.metadata();
  const alpha = await sharp('pic.png').ensureAlpha().extractChannel('alpha').resize(width, height, { kernel: 'lanczos3' }).blur(0.8).raw().toBuffer();
  const rgb = await sharp('pic1.jpeg').removeAlpha().raw().toBuffer();
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = rgb[i * 3];
    rgba[i * 4 + 1] = rgb[i * 3 + 1];
    rgba[i * 4 + 2] = rgb[i * 3 + 2];
    rgba[i * 4 + 3] = alpha[i];
  }
  cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();
  console.log('using your photo');
} else {
  // Placeholder: head-and-shoulders silhouette on a transparent background (4:5 frame like a real cutout).
  const svg = `<svg width="1100" height="1375" viewBox="0 0 1100 1375" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3a44"/><stop offset="1" stop-color="#16161c"/></linearGradient>
    </defs>
    <ellipse cx="550" cy="520" rx="215" ry="250" fill="url(#b)"/>
    <path d="M70 1375 C 70 1010 270 880 550 880 C 830 880 1030 1010 1030 1375 Z" fill="url(#b)"/>
    <text x="550" y="1200" text-anchor="middle" font-family="Impact, 'Arial Narrow', sans-serif" font-size="180" fill="#e5132b" opacity="0.9" letter-spacing="8">AJ</text>
  </svg>`;
  cutout = await sharp(Buffer.from(svg)).png().toBuffer();
  console.log('no photo found — generated placeholder portrait');
}

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">JIGNAN</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">PORTFOLIO</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">WEB DEVELOPER • DATA ANALYST • PROBLEM SOLVER</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
