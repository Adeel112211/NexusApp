'use client';

import React, { useRef, useState, useEffect } from 'react';

interface AppsCarouselProps {
  children: React.ReactNode;
}

export default function AppsCarousel({ children }: AppsCarouselProps) {
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
  }, [children]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -containerWidth * 0.75 : containerWidth * 0.75;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .carousel-no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .carousel-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .carousel-btn:hover {
          background: rgba(16, 185, 129, 0.9) !important;
          color: #fff !important;
          border-color: #10B981 !important;
          transform: translateY(-50%) scale(1.1);
        }
        .carousel-btn:active {
          transform: translateY(-50%) scale(0.95);
        }
        .carousel-item-wrapper {
          min-width: 170px;
          width: 170px;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .carousel-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .carousel-item-wrapper {
            min-width: 145px;
            width: 145px;
          }
        }
      `}</style>

      {/* Left Navigation Button */}
      {showLeft && (
        <button 
          onClick={() => scroll('left')}
          className="carousel-btn"
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
            width: '40px',
            height: '40px',
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      {/* Right Navigation Button */}
      {showRight && (
        <button 
          onClick={() => scroll('right')}
          className="carousel-btn"
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
            width: '40px',
            height: '40px',
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}

      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="carousel-no-scrollbar"
        style={{ 
          width: '100%',
          display: 'flex', 
          gap: '1.5rem', 
          overflowX: 'auto', 
          padding: '0.75rem 0.25rem 1.5rem 0.25rem',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="carousel-item-wrapper">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
