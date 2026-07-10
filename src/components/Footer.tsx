'use client';
import Link from 'next/link';

export default function Footer() {
  const colStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 };
  const headStyle: React.CSSProperties = { fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F3F4F6', marginBottom: 4 };
  const linkStyle: React.CSSProperties = { fontSize: '0.85rem', color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' };

  return (
    <footer style={{ backgroundColor: '#0d1017', borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: '5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        {/* Top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}>
              <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg,#06B6D4,#4F46E5)', clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', flexShrink: 0 }} />
              <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.12em', color: '#fff' }}>APPNEXUS</span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.6 }}>
              High-Performance Mobile Ecosystem. Your trusted source for safe APK downloads and professional app reviews since 2024.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
            <div style={colStyle}>
              <div style={headStyle}>CATEGORIES</div>
              {['All Apps', 'Games', 'Utilities', 'Social'].map(l => (
                <a key={l} href="#" style={linkStyle}
                   onMouseEnter={e => (e.currentTarget.style.color = '#06B6D4')}
                   onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                >{l}</a>
              ))}
            </div>
            <div style={colStyle}>
              <div style={headStyle}>LEGAL</div>
              {['Terms of Service', 'Privacy Policy', 'DMCA Policy', 'Contact Us'].map(l => (
                <a key={l} href="#" style={linkStyle}
                   onMouseEnter={e => (e.currentTarget.style.color = '#06B6D4')}
                   onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                >{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>© 2024 APPNEXUS High-Performance Mobile Ecosystem.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Twitter', 'Discord', 'YouTube'].map(name => (
              <a key={name} href="#" aria-label={name}
                 style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', transition: 'all 0.2s' }}
                 onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#4F46E5'; (e.currentTarget as HTMLAnchorElement).style.color = '#818cf8'; }}
                 onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF'; }}
              >
                {name === 'Twitter' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>}
                {name === 'Discord' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>}
                {name === 'YouTube' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}