const https = require('https');

async function testDownload() {
  const id = '1EgtZZA5JFYjFDsEeWSq21GNjjvTBtxe8';
  const url = `https://drive.google.com/uc?export=download&id=${id}`;

  try {
    const res = await fetch(url);
    const contentType = res.headers.get('content-type');
    
    console.log('Initial Content-Type:', contentType);
    
    if (contentType && contentType.includes('text/html')) {
      const text = await res.text();
      // Search for confirm token
      const fs = require('fs');
      fs.writeFileSync('gdrive_response.html', text);
      const uuidMatch = text.match(/name="uuid" value="([^"]+)"/);
      if (uuidMatch) {
        const uuid = uuidMatch[1];
        console.log('Found uuid:', uuid);
        
        const setCookie = res.headers.get('set-cookie');
        
        const finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t&uuid=${uuid}`;
        console.log('Final URL:', finalUrl);
        
        const finalRes = await fetch(finalUrl, {
          headers: {
            Cookie: setCookie || ''
          }
        });
        
        console.log('Final Content-Type:', finalRes.headers.get('content-type'));
        console.log('Final Content-Length:', finalRes.headers.get('content-length'));
        console.log('Final Disposition:', finalRes.headers.get('content-disposition'));
      } else {
        console.log('No uuid found.');
      }
    } else {
      console.log('Not HTML. Direct download?', contentType);
      console.log('Final Content-Length:', res.headers.get('content-length'));
    }
  } catch (err) {
    console.error(err);
  }
}

testDownload();
