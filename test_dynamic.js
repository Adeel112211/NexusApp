const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'Images');
const slug = '8-ball-pool'; // test slug

let foundCategory = null;
let foundApp = null;

try {
  const categories = fs.readdirSync(baseDir);
  for (const cat of categories) {
    if (!fs.statSync(path.join(baseDir, cat)).isDirectory()) continue;
    const apps = fs.readdirSync(path.join(baseDir, cat));
    for (const a of apps) {
      if (a.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug) {
        foundCategory = cat;
        foundApp = a;
        break;
      }
    }
    if (foundApp) break;
  }
} catch(e) { console.error(e) }

let iconUrl = '';
let screenshots = [];

if (foundApp && foundCategory) {
  const appDir = path.join(baseDir, foundCategory, foundApp);
  const files = fs.readdirSync(appDir);
  
  let icon = files.find(f => f.toLowerCase() === `${foundApp.toLowerCase()}.png` || f.toLowerCase() === `${foundApp.toLowerCase()}.webp` || f.toLowerCase() === `${foundApp.toLowerCase()}.jpg`);
  if (!icon) icon = files.find(f => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg'));
  if (icon) {
    iconUrl = `/Images/${encodeURIComponent(foundCategory)}/${encodeURIComponent(foundApp)}/${encodeURIComponent(icon)}`;
  }

  const screenshotFiles = files.filter(f => f !== icon && (f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg')));
  screenshotFiles.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/) || [0]);
    const numB = parseInt(b.match(/\d+/) || [0]);
    return numA - numB;
  });
  
  screenshots = screenshotFiles.map(f => `/Images/${encodeURIComponent(foundCategory)}/${encodeURIComponent(foundApp)}/${encodeURIComponent(f)}`);
}

console.log({ iconUrl, screenshots });
