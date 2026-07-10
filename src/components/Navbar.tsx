'use client';
import Link from 'next/link';

export default function Navbar() {
  const S = {
    nav: {
      position: 'sticky' as const,
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(11,12,16,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    },
    inner: {
      height: 88,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: { display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' },
    hex: {
      width: 46,
      height: 46,
      background: 'linear-gradient(135deg,#06B6D4,#4F46E5)',
      clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
      flexShrink: 0,
    },
    logoText: { fontSize: '1.45rem', fontWeight: 800, letterSpacing: '0.12em', color: '#fff' },
  };

  return (
    <nav style={S.nav}>
      <div className="container" style={S.inner}>
        <Link href="/" style={S.logo}>
          <div style={S.hex} />
          <span style={S.logoText}>APPNEXUS</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <Link 
            href="/" 
            onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
            onMouseLeave={e => e.currentTarget.style.color = '#06B6D4'}
            style={{ position: 'relative', padding: '8px 18px', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', color: '#06B6D4', textDecoration: 'none', transition: 'color 0.2s ease' }}
          >
            HOME
            <span style={{ position: 'absolute', bottom: 0, left: 18, right: 18, height: 2, background: '#06B6D4', borderRadius: 2 }} />
          </Link>
          {(['APPS', 'GAMES', 'FORUM'] as const).map(label => (
            <Link 
              key={label} 
              href={`/${label.toLowerCase()}`} 
              onMouseEnter={e => e.currentTarget.style.color = '#F3F4F6'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
              style={{ padding: '8px 18px', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em', color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s ease' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}