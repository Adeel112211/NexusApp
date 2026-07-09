'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ScreenshotsGalleryProps {
  screenshots: string[];
  title: string;
}

export default function ScreenshotsGallery({ screenshots, title }: ScreenshotsGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeft(scrollLeft > 10);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      const timer = setTimeout(checkScroll, 300);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, [screenshots]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      // Scroll by one full page (container width)
      containerRef.current.scrollBy({
        left: direction === 'left' ? -containerWidth : containerWidth,
        behavior: 'smooth'
      });
    }
  };

  if (!screenshots || screenshots.length === 0) {
    const features = [
      { title: 'Video & Photo Magic', color: '#0ea5e9' },
      { title: 'AutoCut', color: '#8b5cf6' },
      { title: 'AI Translator', color: '#ec4899' }
    ];
    return (
      <div style={{ flex: '1 1 500px', display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }} className="no-scrollbar">
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        {features.map((feature, i) => (
          <div key={i} style={{ 
            minWidth: '240px', 
            height: '480px', 
            background: 'rgba(15, 23, 42, 0.6)', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,255,255,0.05)', 
            display: 'flex', 
            flexDirection: 'column', 
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ padding: '1.5rem 1rem 0.5rem', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold', color: '#fff', zIndex: 1 }}>
              {feature.title}
            </div>
            <div style={{ flex: 1, position: 'relative', margin: '0.5rem 1rem 1rem', borderRadius: '12px', background: `linear-gradient(180deg, ${feature.color} 0%, rgba(0,0,0,0.5) 100%)`, overflow: 'hidden' }}>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ flex: '1 1 500px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-btn:hover {
          background: rgba(16, 185, 129, 0.9) !important;
          color: #fff !important;
          border-color: #10B981 !important;
          transform: translateY(-50%) scale(1.1);
        }
        .scroll-btn:active {
          transform: translateY(-50%) scale(0.95);
        }
        .screenshot-item {
          min-width: calc((100% - 2rem) / 3);
          width: calc((100% - 2rem) / 3);
          height: 480px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        @media (max-width: 992px) {
          .screenshot-item {
            min-width: calc((100% - 1rem) / 2);
            width: calc((100% - 1rem) / 2);
            height: 420px;
          }
        }
        @media (max-width: 768px) {
          .scroll-btn {
            display: none !important;
          }
          .screenshot-item {
            min-width: 100%;
            width: 100%;
            height: 380px;
          }
        }
      `}</style>

      {/* Left Navigation Button */}
      {showLeft && (
        <button 
          onClick={() => scroll('left')}
          className="scroll-btn"
          style={{
            position: 'absolute',
            left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#e2e8f0',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            transition: 'all 0.2s ease-in-out'
          }}
          aria-label="Scroll Left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      {/* Right Navigation Button */}
      {showRight && (
        <button 
          onClick={() => scroll('right')}
          className="scroll-btn"
          style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#e2e8f0',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            transition: 'all 0.2s ease-in-out'
          }}
          aria-label="Scroll Right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}

      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="no-scrollbar"
        style={{ 
          width: '100%',
          display: 'flex', 
          gap: '1rem', 
          overflowX: 'auto', 
          paddingBottom: '1rem',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}
      >
        {screenshots.map((src: string, i: number) => (
          <div key={i} className="screenshot-item">
            <Image 
              src={src} 
              alt={`${title} screenshot ${i + 1}`} 
              fill 
              style={{ objectFit: 'cover' }} 
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
