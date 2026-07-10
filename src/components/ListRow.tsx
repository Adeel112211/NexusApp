'use client';

interface ListRowProps {
  rank: number;
  title: string;
  category: string;
  size: string;
  downloads: string;
}

export default function ListRow({ rank, title, category, size, downloads }: ListRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '16px 24px',
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12,
        marginBottom: 8,
        transition: 'all 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.08)')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)')}
    >
      {/* Rank */}
      <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'rgba(79,70,229,0.6)', fontStyle: 'italic', width: 28, flexShrink: 0 }}>
        {rank}
      </span>

      {/* Icon placeholder */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: 'linear-gradient(135deg,rgba(79,70,229,0.4),rgba(6,182,212,0.4))',
      }} />

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F3F4F6' }}>{title}</span>
          <span style={{
            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em',
            padding: '2px 6px', borderRadius: 4,
            backgroundColor: 'rgba(6,182,212,0.15)', color: '#06B6D4',
          }}>#{rank}</span>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>
          {size} · {downloads} Downloads · <span style={{ color: '#06B6D4' }}>{category.split('•')[0].trim()}</span>
        </p>
      </div>

      {/* Download icon */}
      <button style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: 6 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </button>
    </div>
  );
}