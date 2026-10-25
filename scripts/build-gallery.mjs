// Builds optimized gallery images (3:4 crops) from ./photos into public/assets.
import sharp from 'sharp';
const shots = [
  { name: 'festival', pos: 'north' },
  { name: 'campus', pos: 'north' },
  { name: 'orchard', pos: 'north' },
];
for (const s of shots) {
  for (const w of [480, 900]) {
    await sharp(`photos/${s.name}.jpeg`)
      .rotate()
      .resize({ width: w, height: Math.round((w * 4) / 3), fit: 'cover', position: s.pos })
      .webp({ quality: 82 })
      .toFile(`public/assets/gallery-${s.name}-${w}.webp`);
  }
}
console.log('gallery built');
