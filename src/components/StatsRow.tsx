'use client';
import React, { useState } from 'react';

// Matches reference: 4 left-bordered stat cards with icon + value + label
const stats = [
  {
    value: '10k+', label: 'APPS SAVED', color: '#4F46E5',
    icon: <svg width="22" height="22" fill="none" stroke="#4F46E5" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>,
  },
  {
    value: 'FAST', label: 'DOWNLOADS', color: '#F59E0B',
    icon: <svg width="22" height="22" fill="none" stroke="#F59E0B" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    value: 'SAFE', label: 'FILE VERIFIED', color: '#22C55E',
    icon: <svg width="22" height="22" fill="none" stroke="#22C55E" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    value: 'GLOBAL', label: 'DOWNLOADS', color: '#06B6D4',
    icon: <svg width="22" height="22" fill="none" stroke="#06B6D4" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
];

function StatCard({ value, label, color, icon }: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '20px 20px',
        borderRadius: 12,
        backgroundColor: isHovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderLeft: `3px solid ${color}`,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 12px 30px -10px ${color}50` : '0 4px 15px rgba(0,0,0,0.3)',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        backgroundColor: isHovered ? `${color}25` : `${color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.4s ease',
        transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F3F4F6', lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#9CA3AF', marginTop: 6 }}>{label}</div>
      </div>
    </div>
  );
}

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-12">
      {stats.map((stat) => (
        <StatCard key={stat.label + stat.value} {...stat} />
      ))}
    </div>
  );
}