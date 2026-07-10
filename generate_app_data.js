const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'Images');
const categories = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

const result = {};

for (const cat of categories) {
  result[cat] = [];
  const catPath = path.join(baseDir, cat);
  const apps = fs.readdirSync(catPath).filter(f => fs.statSync(path.join(catPath, f)).isDirectory());
  
  for (const app of apps) {
    const appPath = path.join(catPath, app);
    const files = fs.readdirSync(appPath);
    // Find the icon (preferably named after the app, or 1.png/webp)
    let icon = files.find(f => f.toLowerCase() === `${app.toLowerCase()}.png` || f.toLowerCase() === `${app.toLowerCase()}.webp` || f.toLowerCase() === `${app.toLowerCase()}.jpg`);
    if (!icon) {
      icon = files.find(f => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    }
    
    if (icon) {
      result[cat].push({
        title: app,
        rating: Number((Math.random() * (4.9 - 4.2) + 4.2).toFixed(1)),
        iconUrl: `/Images/${encodeURIComponent(cat)}/${encodeURIComponent(app)}/${encodeURIComponent(icon)}`
      });
    }
  }
}

console.log(JSON.stringify(result, null, 2));
