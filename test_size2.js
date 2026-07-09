const id = '1EgtZZA5JFYjFDsEeWSq21GNjjvTBtxe8';
const url = `https://drive.google.com/uc?export=download&id=${id}`;

async function getSize() {
  console.log('Fetching', url);
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
  console.log('Final URL', finalUrl);
  
  // Try a HEAD request first
  let sizeRes = await fetch(finalUrl, {
    method: 'HEAD',
    headers: { Cookie: setCookie || '' }
  });
  
  if (!sizeRes.ok || !sizeRes.headers.get('content-length')) {
    console.log('HEAD failed or no content-length, trying GET with abort');
    const controller = new AbortController();
    sizeRes = await fetch(finalUrl, {
      headers: { Cookie: setCookie || '' },
      signal: controller.signal
    });
    console.log('GET size:', sizeRes.headers.get('content-length'));
    controller.abort();
  } else {
    console.log('HEAD size:', sizeRes.headers.get('content-length'));
  }
}
getSize();
