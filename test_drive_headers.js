const id = '1EgtZZA5JFYjFDsEeWSq21GNjjvTBtxe8'; // Capcut
async function run() {
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  const res = await fetch(url);
  const text = await res.text();
  const uuidMatch = text.match(/name="uuid" value="([^"]+)"/);
  const confirmMatch = text.match(/confirm=([a-zA-Z0-9-_]+)/);
  
  let finalUrl = '';
  if (uuidMatch) {
    finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
  } else if (confirmMatch) {
    finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${confirmMatch[1]}`;
  }
  
  const setCookie = res.headers.get('set-cookie');
  const sizeRes = await fetch(finalUrl, {
    method: 'HEAD',
    headers: { Cookie: setCookie || '' }
  });
  console.log('HEADERS:');
  sizeRes.headers.forEach((val, key) => console.log(key, val));
}
run();
