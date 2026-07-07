const https = require('https');

async function testDownloadWithoutCookie() {
  const id = '1EgtZZA5JFYjFDsEeWSq21GNjjvTBtxe8';
  const url = `https://drive.google.com/uc?export=download&id=${id}`;

  try {
    const res = await fetch(url);
    const text = await res.text();
    const uuidMatch = text.match(/name="uuid" value="([^"]+)"/);
    
    if (uuidMatch) {
      const uuid = uuidMatch[1];
      const finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t&uuid=${uuid}`;
      
      // Fetch WITHOUT cookies
      const finalRes = await fetch(finalUrl);
      console.log('Without Cookies - Status:', finalRes.status);
      console.log('Without Cookies - Content-Type:', finalRes.headers.get('content-type'));
      console.log('Without Cookies - Content-Length:', finalRes.headers.get('content-length'));
    }
  } catch (err) {
    console.error(err);
  }
}

testDownloadWithoutCookie();
