'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AppCardProps {
  title: string;
  rating: number;
  iconUrl?: string;
  isFree?: boolean;
  priority?: boolean;
  zoomIcon?: boolean;
}

export default function AppCard({ title, rating, iconUrl, priority = false, zoomIcon = false }: AppCardProps) {
  const router = useRouter();
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <div
      onClick={() => router.push(`/app/${slug}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        padding: '0.75rem',
        borderRadius: 14,
        backgroundColor: isHovered ? '#111116' : '#08080a',
        border: `1px solid ${isHovered ? 'rgba(34, 197, 94, 0.5)' : 'rgba(255, 255, 255, 0.05)'}`,
        transition: 'all 0.3s ease-out',
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        willChange: 'transform, box-shadow, border-color',
        boxShadow: isHovered ? '0 15px 40px -10px rgba(34, 197, 94, 0.2)' : '0 8px 30px rgba(0,0,0,0.5)',
        transform: isHovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        zIndex: isHovered ? 10 : 1,
      }}
    >
      {/* App icon */}
      <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden', position: 'relative', backgroundColor: 'transparent' }}>
        <div style={{ width: '100%', height: '100%', transform: isHovered ? (zoomIcon ? 'scale(1.2)' : 'scale(1.08)') : (zoomIcon ? 'scale(1.15)' : 'scale(1)'), transition: 'transform 0.4s cubic-bezier(.175, .885, .32, 1.275)' }}>
          {iconUrl ? (
            <Image src={iconUrl} alt={title} fill style={{ objectFit: 'cover' }} sizes="170px" priority={priority} quality={90} />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#1a1f2e,#0b0c10)' }} />
          )}
        </div>
      </div>

      {/* Title + Rating */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#F3F4F6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg style={{ width: 14, height: 14, color: '#F59E0B' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{rating}</span>
        </div>
      </div>

      {/* Download button */}
      <button
        onClick={e => { e.stopPropagation(); router.push(`/app/${slug}`); }}
        style={{
          width: '100%',
          padding: '10px 0',
          borderRadius: 8,
          backgroundColor: '#22C55E',
          border: 'none',
          color: '#ffffff',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#16a34a')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#22C55E')}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        DOWNLOAD
      </button>
    </div>
  );
}