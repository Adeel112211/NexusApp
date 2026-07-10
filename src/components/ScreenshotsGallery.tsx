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

  const [layout, setLayout] = useState<'single' | 'triple' | null>(null);

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
  }, [screenshots, layout]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
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
      <div className="flex-1 min-w-[500px] flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {features.map((feature, i) => (
          <div key={i} className="flex-shrink-0 w-[calc(33.333%-11px)] aspect-[9/19] bg-surface/60 rounded-2xl border border-white/5 flex flex-col overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <div className="px-6 pt-4 pb-2 text-center text-[0.95rem] md:text-base font-bold text-white z-10 leading-tight">
              {feature.title}
            </div>
            <div 
              className="flex-1 relative mx-4 mb-4 rounded-xl bg-gradient-to-b from-[{feature.color}] to-black/50 overflow-hidden" 
              style={{ backgroundImage: `linear-gradient(180deg, ${feature.color} 0%, rgba(0,0,0,0.5) 100%)` }}
            >
            </div>
          </div>
        ))}
      </div>
    );
  }

  const widthClass = layout === 'single' ? 'w-full' : 'w-[calc(33.333%-11px)]';

  return (
    <div className="flex-1 min-w-[500px] relative flex flex-col">
      {screenshots.length > 0 && (
        <div className="relative">
          {/* Left Navigation Button */}
          {showLeft && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-surface/85 border border-white/10 text-text-muted flex items-center justify-center cursor-pointer backdrop-blur-sm shadow-lg transition-all duration-200 hover:bg-success hover:text-white hover:border-success hover:scale-110 active:scale-95 hidden md:flex"
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
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-surface/85 border border-white/10 text-text-muted flex items-center justify-center cursor-pointer backdrop-blur-sm shadow-lg transition-all duration-200 hover:bg-success hover:text-white hover:border-success hover:scale-110 active:scale-95 hidden md:flex"
              aria-label="Scroll Right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

          <div 
            ref={containerRef}
            className="w-full flex gap-4 overflow-x-auto pb-4 touch-pan-x scroll-smooth scrollbar-hide snap-x items-center"
          >
            {screenshots.map((src: string, i: number) => (
              <div 
                key={i} 
                className={`flex-shrink-0 ${widthClass} rounded-2xl overflow-hidden shadow-screenshot relative snap-center transition-all duration-300`}
                style={{ aspectRatio: layout === 'single' ? '16/9' : '9/16', maxHeight: '500px' }}
              >
                <Image 
                  src={src} 
                  alt={`${title} screenshot ${i + 1}`} 
                  fill
                  className={layout === 'single' ? "object-contain" : "object-cover"} 
                  sizes={layout === 'single' ? "100vw" : "(max-width: 768px) 33vw, 240px"}
                  priority={i < 3}
                  quality={90}
                  onLoad={(e) => {
                    if (layout === null && i === 0) {
                      const target = e.target as HTMLImageElement;
                      if (target.naturalWidth > target.naturalHeight) {
                        setLayout('single');
                      } else {
                        setLayout('triple');
                      }
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}