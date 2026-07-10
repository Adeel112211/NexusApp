export async function getDriveFileInfo(id: string): Promise<{ size: string | null, version: string | null }> {
  if (!id) return { size: null, version: null };
  try {
    const url = `https://drive.google.com/uc?export=download&id=${id}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const text = await res.text();
    
    const uuidMatch = text.match(/name="uuid" value="([^"]+)"/);
    const confirmMatch = text.match(/confirm=([a-zA-Z0-9-_]+)/);
    
    let finalUrl = '';
    if (uuidMatch) {
      finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
    } else if (confirmMatch) {
      finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${confirmMatch[1]}`;
    } else {
      return { size: null, version: null };
    }
    
    const setCookie = res.headers.get('set-cookie');
    
    const sizeRes = await fetch(finalUrl, {
      method: 'HEAD',
      headers: { Cookie: setCookie || '' },
      next: { revalidate: 3600 }
    });
    
    let size = null;
    const contentLength = sizeRes.headers.get('content-length');
    if (contentLength) {
      const bytes = parseInt(contentLength, 10);
      if (bytes > 1024 * 1024 * 1024) {
        size = (bytes / (1024 * 1024 * 1024)).toFixed(1) + ' GB';
      } else {
        size = (bytes / (1024 * 1024)).toFixed(1) + ' MB';
      }
    }

    let version = null;
    const contentDisposition = sizeRes.headers.get('content-disposition');
    if (contentDisposition) {
      // e.g. filename="capcut v18-5-0.apk"
      const vMatch = contentDisposition.match(/v[\d\.\-]+/i);
      if (vMatch) {
        version = vMatch[0].replace(/-/g, '.').replace(/^v/i, '');
      }
    }
    
    return { size, version };
  } catch (err) {
    console.error('Failed to get drive file info:', err);
    return { size: null, version: null };
  }
}
