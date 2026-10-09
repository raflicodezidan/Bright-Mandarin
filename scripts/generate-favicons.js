const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + entrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // image type (1 = icon)
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0); // width
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const sourceImage = path.join(rootDir, 'public', 'logo-official.png');

  console.log('Generating favicons from:', sourceImage);

  // 1. Generate PNGs at required resolutions
  const sizes = [
    { name: 'icon-48x48.png', size: 48 },
    { name: 'icon-96x96.png', size: 96 },
    { name: 'icon-192x192.png', size: 192 },
    { name: 'icon-512x512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    const outPath = path.join(rootDir, 'public', name);
    await sharp(sourceImage)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outPath);
    console.log(`Generated: public/${name} (${size}x${size})`);
  }

  // 2. Also generate app/apple-icon.png
  await sharp(sourceImage)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(rootDir, 'app', 'apple-icon.png'));
  console.log('Generated: app/apple-icon.png (180x180)');

  // 3. Generate app/icon.png at 192x192 (Google recommended kelipatan 48)
  await sharp(sourceImage)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(rootDir, 'app', 'icon.png'));
  console.log('Generated: app/icon.png (192x192)');

  // 4. Generate multi-resolution genuine ICO (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const icoBuffers = [];
  for (const size of icoSizes) {
    const buf = await sharp(sourceImage)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    icoBuffers.push({ width: size, height: size, buffer: buf });
  }

  const icoFileBuffer = createIco(icoBuffers);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), icoFileBuffer);
  fs.writeFileSync(path.join(rootDir, 'app', 'favicon.ico'), icoFileBuffer);
  console.log(`Generated genuine multi-size favicon.ico: ${icoFileBuffer.length} bytes (16x16, 32x32, 48x48 layers)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
