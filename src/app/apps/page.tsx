'use client';
import { useState, useEffect } from 'react';
import Navbar    from '@/components/layout/Navbar';
import AppCard   from '@/components/ui/AppCard';
import Footer    from '@/components/layout/Footer';
import SectionHead from '@/components/ui/SectionHead';
import { TRENDING_APPS, AI_TOOLS, GAMES, MUSIC, VPN, ANIME_AND_MANGA, MOVIE_AND_TV_APPS, SPORTS } from '@/data/apps';

export default function AppsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Only run on the client after mount to avoid hydration mismatch
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, []);

  const ALL_APPS = [...TRENDING_APPS, ...AI_TOOLS, ...GAMES, ...MUSIC, ...VPN, ...ANIME_AND_MANGA, ...MOVIE_AND_TV_APPS, ...SPORTS];
  
  const filteredApps = ALL_APPS.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Navbar />

      <div style={{ paddingTop: '80px', paddingBottom: '40px' }} className="container">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          All Apps
        </h1>
        <p style={{ color: '#9CA3AF', fontSize: '1.1rem', maxWidth: 600, marginBottom: '2.5rem' }}>
          Explore our complete collection of premium applications, powerful AI tools, music players, and security utilities.
        </p>

        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: 400, marginBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Search apps..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '14px 24px', 
              borderRadius: '24px', 
              backgroundColor: '#08080a', 
              border: '1px solid rgba(255,255,255,0.1)', 
              color: '#fff', 
              outline: 'none',
              fontSize: '1.05rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }} 
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#06B6D4';
              e.currentTarget.style.boxShadow = '0 4px 25px rgba(6, 182, 212, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            }}
          />
        </div>
      </div>

      {/* ── All Apps Grid ───────────────────────────────────────── */}
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6" style={{ marginBottom: '6rem' }}>
        {filteredApps.length > 0 ? (
          filteredApps.map((app, index) => (
            <div key={app.title} className={`animate-fade-up delay-${(index % 5) * 100}`}>
              <AppCard {...app} />
            </div>
          ))
        ) : (
          <div style={{ color: '#9CA3AF', padding: '2rem 0', fontSize: '1.1rem', gridColumn: '1 / -1' }}>
            No apps found matching "{searchQuery}"
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
