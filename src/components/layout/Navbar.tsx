'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'APPS', href: '/apps' },
    { label: 'GAMES', href: '/games' },
    { label: 'FORUM', href: '/forum' }
  ];

  return (
    <>
      <nav style={S.nav}>
        <div className="container" style={S.inner}>
          <Link href="/" style={S.logo} onClick={() => setIsMobileMenuOpen(false)}>
            <div style={S.hex} />
            <span style={S.logoText}>APPNEXUS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link 
                  key={label}
                  href={href} 
                  onMouseEnter={e => e.currentTarget.style.color = isActive ? '#22d3ee' : '#F3F4F6'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive ? '#06B6D4' : '#9CA3AF'}
                  style={{ 
                    position: 'relative', 
                    padding: '8px 18px', 
                    fontSize: '1rem', 
                    fontWeight: isActive ? 700 : 600, 
                    letterSpacing: '0.1em', 
                    color: isActive ? '#06B6D4' : '#9CA3AF', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s ease' 
                  }}
                >
                  {label}
                  {isActive && (
                    <span style={{ position: 'absolute', bottom: 0, left: 18, right: 18, height: 2, background: '#06B6D4', borderRadius: 2 }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{
          background: 'radial-gradient(circle at top right, rgba(79,70,229,0.15) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(6,182,212,0.15) 0%, transparent 40%), rgba(9,10,15,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          animation: 'fade-in 0.3s ease-out',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={S.logo}>
              <div style={S.hex} className="w-8 h-8" />
              <span style={{...S.logoText, fontSize: '1.2rem'}}>APPNEXUS</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}
              className="hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Close Mobile Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '32px', overflowY: 'auto' }}>
            {navLinks.map(({ label, href }, i) => {
              const isActive = pathname === href;
              return (
                <Link 
                  key={label}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                    padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    animation: `fade-up 0.5s ease-out ${(i + 1) * 0.1}s both`,
                    textDecoration: 'none'
                  }}
                  className={`group relative text-2xl sm:text-3xl font-extrabold tracking-[0.15em] transition-all duration-500 ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span 
                      style={{ 
                        width: 8, height: 8, borderRadius: '50%', 
                        backgroundColor: isActive ? '#22d3ee' : 'transparent',
                        boxShadow: isActive ? '0 0 12px rgba(34,211,238,0.8)' : 'none',
                        transition: 'all 0.3s'
                      }} 
                    />
                    {label}
                  </span>
                  
                  <span className={`text-cyan-500 transition-all duration-300 transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer Area */}
          <div style={{ padding: '32px 28px', borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(0,0,0,0.3)', animation: 'fade-up 0.5s ease-out 0.6s both' }}>
            <p style={{ fontSize: '0.7rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '16px' }}>
              Connect With Us
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {[
                { name: 'Twitter', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/> },
                { name: 'Discord', icon: <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></> }
              ].map(({ name, icon }) => (
                <Link key={name} href="#" style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }} className="hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}