'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DownloadButton({ slug }: { slug: string }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    let googleDriveId = '';
    if (slug === 'capcut') {
      googleDriveId = '1EgtZZA5JFYjFDsEeWSq21GNjjvTBtxe8';
    } else if (slug === 'kinemaster') {
      googleDriveId = '1iMSl7I4jbS2ylW117UPEbJ4FMJ9NderH';
    } else if (slug === 'vn-video-editor') {
      // Direct link to the spreadsheet download
      window.location.href = 'https://docs.google.com/spreadsheets/d/1uUr8pqrblr1YKJd48tqeQpiCFhMTBN7SifxQv4q6pDQ/export?format=xlsx';
      setIsDownloading(false);
      return;
    } else {
      alert('Download link not available for this app yet.');
      setIsDownloading(false);
      return;
    }
    
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
          setIsDownloading(false);
          // Cleanup iframe after download has safely started
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
          }, 10000);
        }, 1500);
        
      } else {
        alert('Could not secure download link.');
        setIsDownloading(false);
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to download server.');
      setIsDownloading(false);
    }
  };

  const popupContent = (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      backdropFilter: 'blur(8px)'
    }}>
      <div style={{
        background: 'var(--surface)',
        padding: '2.5rem 3rem',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
      }}>
        <div className="spinner"></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Preparing Download...</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Connecting to secure server</div>
        </div>
      </div>
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
        DOWNLOAD
      </button>

      {/* Render popup at root level so parent animations don't trap it */}
      {isDownloading && mounted && createPortal(popupContent, document.body)}
    </>
  );
}
