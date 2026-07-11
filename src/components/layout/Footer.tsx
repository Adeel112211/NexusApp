'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ width: '100%', backgroundColor: '#0d1017', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '6rem' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Top Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', width: '100%' }}>
          
          {/* Brand & Description */}
          <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }} className="group">
              <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#06B6D4,#4F46E5)', clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', flexShrink: 0 }} className="transition-transform duration-500 group-hover:scale-110" />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.1em', color: '#fff' }}>APPNEXUS</span>
            </Link>
            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.6, maxWidth: 420 }}>
              High-Performance Mobile Ecosystem. Your trusted source for safe APK downloads and professional app reviews since 2024. Discover the best premium apps, games, and tools.
            </p>
          </div>

          {/* Categories */}
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Categories</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['All Apps', 'Top Games', 'Premium Utilities', 'Social Media'].map(l => (
                <Link key={l} href="#" style={{ fontSize: '0.9rem', color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-cyan-400 transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Terms of Service', 'Privacy Policy', 'DMCA Policy', 'Contact Support'].map(l => (
                <Link key={l} href="#" style={{ fontSize: '0.9rem', color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-cyan-400 transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ fontSize: '0.8rem', color: '#6B7280', letterSpacing: '0.025em' }}>
            © {new Date().getFullYear()} APPNEXUS High-Performance Mobile Ecosystem. All rights reserved.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {[
              { name: 'Twitter', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/> },
              { name: 'Discord', icon: <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></> },
              { name: 'YouTube', icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></> }
            ].map(({ name, icon }) => (
              <Link key={name} href="#" aria-label={name} style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }} className="hover:bg-white/10 hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {icon}
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}