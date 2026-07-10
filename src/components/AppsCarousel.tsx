'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function AppsCarousel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [showRight, setShowRight] = useState(false);
  const [showLeft,  setShowLeft]  = useState(false);

  const check = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setShowLeft(scrollLeft > 8);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 8);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, [children]);

  const scroll = (dir: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth;
      ref.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const btnStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    bottom: 'auto',
    [side]: -64,    // Pushed out even further
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: '#22C55E', // Changed to green
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)', // Added a subtle green glow
  });

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {showLeft && (
        <button onClick={() => scroll('left')} style={btnStyle('left')} aria-label="Scroll Left">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      )}

      <div
        ref={ref}
        style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollbarWidth: 'none', scrollSnapType: 'x mandatory', padding: '24px 16px', margin: '-24px -16px' }}
        className="scrollbar-hide"
      >
        {React.Children.map(children, child => (
          <div className="shrink-0 scroll-snap-align-start w-[calc((100%-48px)/2)] md:w-[calc((100%-80px)/4)] lg:w-[calc((100%-112px)/6)]">
            {child}
          </div>
        ))}
      </div>

      {showRight && (
        <button onClick={() => scroll('right')} style={btnStyle('right')} aria-label="Scroll Right">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      )}
    </div>
  );
}