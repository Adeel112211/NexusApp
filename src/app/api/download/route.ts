import { NextRequest, NextResponse } from 'next/server';

// In-memory store for Hostinger Node.js environment
const downloadSessions = new Map<string, { finalUrl: string; cookie: string; id: string }>();

// Step 1: Prepare the download bypass
export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) return new NextResponse('Missing ID', { status: 400 });

    const url = `https://drive.google.com/uc?export=download&id=${id}`;
    // Force no-cache to ensure we always get a fresh token/uuid from Google
    const res = await fetch(url, { cache: 'no-store' });
    const contentType = res.headers.get('content-type');
    
    let finalUrl = '';
    let cookie = '';

    if (contentType && contentType.includes('text/html')) {
      const text = await res.text();
      // Google Drive sometimes uses uuid, sometimes uses confirm token directly
      const uuidMatch = text.match(/name="uuid" value="([^"]+)"/);
      const confirmMatch = text.match(/confirm=([a-zA-Z0-9-_]+)/);
      
      if (uuidMatch) {
        finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
        cookie = res.headers.get('set-cookie') || '';
      } else if (confirmMatch) {
        finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${confirmMatch[1]}`;
        cookie = res.headers.get('set-cookie') || '';
      } else {
        console.error('Failed to extract token. HTML Snippet:', text.substring(0, 500));
        return new NextResponse('Could not extract token.', { status: 500 });
      }
    } else {
      finalUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
    }

    const sessionId = Math.random().toString(36).substring(7);
    downloadSessions.set(sessionId, { finalUrl, cookie, id });
    
    // Cleanup memory after 1 minute if user aborts
    setTimeout(() => downloadSessions.delete(sessionId), 60000);

    return NextResponse.json({ sessionId });
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Step 2: Stream the actual file using the prepared bypass data
export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('session');
  if (!sessionId || !downloadSessions.has(sessionId)) {
    return new NextResponse('Invalid or expired session', { status: 400 });
  }

  const { finalUrl, cookie, id } = downloadSessions.get(sessionId)!;
  downloadSessions.delete(sessionId); // Clean up immediately

  try {
    const finalRes = await fetch(finalUrl, {
      headers: { Cookie: cookie }
    });

    const headers = new Headers();
    if (finalRes.headers.get('content-type')) headers.set('Content-Type', finalRes.headers.get('content-type') as string);
    if (finalRes.headers.get('content-length')) headers.set('Content-Length', finalRes.headers.get('content-length') as string);
    if (finalRes.headers.get('content-disposition')) headers.set('Content-Disposition', finalRes.headers.get('content-disposition') as string);
    else headers.set('Content-Disposition', `attachment; filename="download-${id}.apk"`);

    return new NextResponse(finalRes.body, {
      status: finalRes.status,
      headers
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('Stream Error', { status: 500 });
  }
}
