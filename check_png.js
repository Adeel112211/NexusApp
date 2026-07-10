const fs = require('fs');

function readPNGDimensions(buffer) {
  if (buffer.toString('ascii', 1, 4) !== 'PNG') return null;
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

const dir = 'd:/Adeel/App/public/Images/Video & Photo Editing/Kinemaster';
for (let i = 1; i <= 3; i++) {
  const file = dir + '/' + i + '.png';
  const buf = fs.readFileSync(file);
  const dims = readPNGDimensions(buf);
  console.log(`${i}.png`, dims);
}
