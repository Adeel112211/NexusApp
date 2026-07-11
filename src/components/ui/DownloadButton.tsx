'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DownloadButton({ slug, fileSize, googleDriveId }: { slug: string, fileSize?: string | null, googleDriveId?: string }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = async () => {
    if (!googleDriveId) {
      setShowComingSoon(true);
      return;
    }

    setIsDownloading(true);
    setDownloadStarted(false);
    
    try {
      // Step 1: Ask the server to prepare the Google Drive bypass
      const res = await fetch(`/api/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: googleDriveId })
      });
      
      if (res.ok) {
        const data = await res.json();
        
        // Trigger the download via a hidden iframe so the main page doesn't show a "loading" spinner
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = `/api/download?session=${data.sessionId}`;
        document.body.appendChild(iframe);
        
        // Wait 1.5 seconds for the browser to process the stream and show the download dialog
        setTimeout(() => {
          setDownloadStarted(true); // Stop loading, update text, but keep popup open
          
          // Cleanup iframe after download has safely started
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
          }, 15000);
        }, 1500);
        
      } else {
        setShowComingSoon(true);
        setIsDownloading(false);
      }
    } catch (err) {
      console.error(err);
      setShowComingSoon(true);
      setIsDownloading(false);
    }
  };

  const preparingPopupContent = (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      backdropFilter: 'blur(4px)',
      animation: 'fadeIn 0.2s ease-out forwards'
    }}>
      <div style={{
        position: 'relative',
        background: 'rgba(20, 20, 25, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '3rem 3rem',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        animation: 'scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        width: '90%',
        maxWidth: '380px'
      }}>
        {/* Cross button */}
        <button 
          onClick={() => {
            setIsDownloading(false);
            setDownloadStarted(false);
          }}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            color: '#9CA3AF',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9CA3AF';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* State Indicator */}
        {downloadStarted ? (
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22C55E'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        ) : (
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '4px solid rgba(34, 197, 94, 0.2)',
            borderTopColor: '#22C55E',
            animation: 'spin 1s linear infinite'
          }} />
        )}

        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            {downloadStarted ? 'Download Started!' : 'Preparing Download...'}
          </div>
          <div style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>
            {downloadStarted ? 'Your file is downloading' : 'Connecting to secure server'}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: translateY(20px) scale(0.95); } to { transform: translateY(0) scale(1); } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );

  const comingSoonPopupContent = (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      backdropFilter: 'blur(8px)',
      animation: 'fadeIn 0.2s ease-out forwards'
    }}>
      <div style={{
        position: 'relative',
        background: '#141416',
        padding: '3rem 3rem',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 1)',
        animation: 'scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        width: '90%',
        maxWidth: '380px'
      }}>
        <button 
          onClick={() => setShowComingSoon(false)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: '#9CA3AF',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.color = '#9CA3AF';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(234, 179, 8, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#eab308'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>Working on it!</div>
          <div style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.5 }}>
            This download link is coming soon.<br/>Please check back later!
          </div>
        </div>
        <button 
          onClick={() => setShowComingSoon(false)}
          style={{
            marginTop: '0.5rem',
            padding: '12px 32px',
            borderRadius: '12px',
            border: 'none',
            background: '#22C55E',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontSize: '1rem'
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#16a34a'}
          onMouseLeave={e => e.currentTarget.style.background = '#22C55E'}
        >
          Got it
        </button>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: translateY(20px) scale(0.95); } to { transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );

  return (
    <>
      <button 
        onClick={handleDownload} 
        style={{ 
          width: '100%',
          padding: '14px 24px', 
          borderRadius: 8,
          backgroundColor: '#22C55E',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '1rem',
          letterSpacing: '0.05em',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          boxShadow: '0 10px 40px -10px rgba(34,197,94,0.6)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#16a34a';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 15px 40px -5px rgba(34,197,94,0.8)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#22C55E';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(34,197,94,0.6)';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download {fileSize && <span style={{ fontWeight: 400, opacity: 0.9 }}>({fileSize})</span>}
      </button>

      {/* Render popups at root level so parent animations don't trap it */}
      {isDownloading && mounted && createPortal(preparingPopupContent, document.body)}
      {showComingSoon && mounted && createPortal(comingSoonPopupContent, document.body)}
    </>
  );
}
