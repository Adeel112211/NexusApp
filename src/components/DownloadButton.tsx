'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DownloadButton({ slug, fileSize }: { slug: string, fileSize?: string | null }) {
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
      googleDriveId = '1YEOxe7nKgs7-Tj3U9iD05QJAHFmMDB0g';
    } else if (slug === 'alight-motion' || slug === 'alightmotion') {
      googleDriveId = '1v3XSDYiUADtSvASnsxJth8qBdsQWGwm1';
    } else if (slug === 'inshot') {
      googleDriveId = '1z0wZ69tSZ8qTDCeP2NgHbWfZJKeqQW4_';
    } else if (slug === 'lightroom') {
      googleDriveId = '13JpgO4s5rEEGPRlbk7FLAZ7aqBVBv2Ym';
    } else if (slug === 'vn-video-editor' || slug === 'vn-editor') {
      googleDriveId = '1Cbs9AmRjpbyg_3CBwNWGCGQbQlajZ9es';
    } else if (slug === 'remini') {
      googleDriveId = '1UrIqa7WYXCbVhCHaWx4k2eAaEli7zEhs';
    } else if (slug === 'picsart') {
      googleDriveId = '14Yohr3wgU9xJusuFUDLX5yrVjVo_kWF5';
    } else if (slug === 'perplexity-ai') {
      googleDriveId = '1Gi0l0HgYwNbZkSRljLfcaTu3jgxk43jf';
    } else if (slug === 'microsoft-copilot') {
      googleDriveId = '19QKfgW0E4_AQ6n3udi6HIRa-e1RBzSt1';
    } else if (slug === '8-ball-pool') {
      googleDriveId = '1-NfyjE93pZilJlB28lWqMUQlMMRXvLiJ';
    } else if (slug === 'clash-of-clans') {
      googleDriveId = '1pJkryS8mrSaZYNbcCHzHi5mr5FaZIkZV';
    } else if (slug === 'dream-league-soccer') {
      googleDriveId = '1oBJOTRtMLbzyfFqaBtsRgbes_TGvhja5';
    } else if (slug === 'gta-san-andreas') {
      googleDriveId = '1hRpPqsYEcuvtS486xoVMwouuUXD0rucx';
    } else if (slug === 'clash-royale') {
      googleDriveId = '13iHQ-MY8hA5m0iZD4B_JhCzKxFWSLNWm';
    } else if (slug === 'car-parking-multiplayer') {
      googleDriveId = '1mdfX9Y_0GueY95rbhdmdbe9xfvRx3DT4';
    } else if (slug === 'minecraft') {
      googleDriveId = '1sik4Sb97LPuRQ-TPnNZwI8T7NITJltH8';
    } else if (slug === 'hill-climb-racing') {
      googleDriveId = '1w1k7lOjgdHsVlMXiYueO59N2kNWIa5nF';
    } else if (slug === 'hill-climb-racing-2') {
      googleDriveId = '1U3qZ7NLbjUr3QaoS4-dU_hF3-Lpg7Zuv';
    } else if (slug === 'roblox') {
      googleDriveId = '1TFC4Zla1fvyoyNxNlKOJBdEY8zLrnCmn';
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
        Download {fileSize && <span style={{ fontWeight: 400, opacity: 0.9 }}>({fileSize})</span>}
      </button>

      {/* Render popup at root level so parent animations don't trap it */}
      {isDownloading && mounted && createPortal(popupContent, document.body)}
    </>
  );
}
