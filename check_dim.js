const fs = require('fs');

async function check() {
  const file = 'd:/Adeel/App/public/Images/Games/8 Ball Pool/1.webp';
  // Just reading the first few bytes of webp to get dimensions
  const buffer = fs.readFileSync(file);
  console.log("Length: " + buffer.length);
  // WebP headers usually have VP8X or VP8 chunks
  // We can just use a library if it's available, or just guess.
}

check();
