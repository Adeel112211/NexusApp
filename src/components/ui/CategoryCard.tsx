'use client';

import React from 'react';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function CategoryCard({ title, subtitle, icon }: CategoryCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '18px 20px',
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(6,182,212,0.08)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,182,212,0.3)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        backgroundColor: 'rgba(6,182,212,0.12)',
        border: '1px solid rgba(6,182,212,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, color: '#06B6D4',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#F3F4F6' }}>{title}</div>
        <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: 2 }}>{subtitle}</div>
      </div>
    </div>
  );
}