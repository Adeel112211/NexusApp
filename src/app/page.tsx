'use client';
import { useState } from 'react';
import Navbar    from '@/components/layout/Navbar';
import Hero      from '@/components/home/Hero';
import AppCard   from '@/components/ui/AppCard';
import StatsRow  from '@/components/home/StatsRow';
import CategoryCard from '@/components/ui/CategoryCard';
import ListRow   from '@/components/ui/ListRow';
import Footer    from '@/components/layout/Footer';
import AppsCarousel from '@/components/ui/AppsCarousel';
import SectionHead from '@/components/ui/SectionHead';
import ViewAllCard from '@/components/ui/ViewAllCard';
import { TRENDING_APPS, AI_TOOLS, GAMES, MUSIC, VPN, ANIME_AND_MANGA, MOVIE_AND_TV_APPS, SPORTS, VIDEO_PLAYERS, FILE_MANAGERS } from '@/data/apps';

/* ─── Shared max-width wrapper ─────────────────────────── */
const wrap: React.CSSProperties = { maxWidth: 1280, margin: '0 auto', padding: '0 2rem' };

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const ALL_APPS = [...TRENDING_APPS, ...AI_TOOLS, ...GAMES, ...MUSIC, ...VPN, ...ANIME_AND_MANGA, ...MOVIE_AND_TV_APPS, ...SPORTS];
  
  const filteredApps = ALL_APPS.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Navbar />
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {searchQuery ? (
        <div className="container" style={{ minHeight: '50vh', marginTop: '2rem', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '2rem' }}>
            Search Results for "{searchQuery}"
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
            {filteredApps.length > 0 ? (
              filteredApps.map((app, index) => (
                <div key={app.title} className={`animate-fade-up delay-${(index % 5) * 100}`}>
                  <AppCard {...app} />
                </div>
              ))
            ) : (
              <div style={{ color: '#9CA3AF', padding: '2rem 0', fontSize: '1.1rem', gridColumn: '1 / -1', textAlign: 'center' }}>
                No applications or games found matching your search.
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* ── Video & Photo Editors ─────────────────────── */}
          <section className="container animate-fade-up" style={{ marginTop: '3.5rem', marginBottom: '4rem' }}>
            <SectionHead title="VIDEO & PHOTO EDITORS" />
            <AppsCarousel>
              {TRENDING_APPS.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {TRENDING_APPS.length > 15 && <ViewAllCard href="/apps" title="View All Apps" />}
            </AppsCarousel>
          </section>

          {/* ── Stats ─────────────────────────────────────── */}
          <div className="container animate-fade-up delay-100">
            <StatsRow />
          </div>

          {/* ── AI Tools ──────────────────────────────────── */}
          <section className="container animate-fade-up delay-200" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="AI TOOLS" />
            <AppsCarousel>
              {AI_TOOLS.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {AI_TOOLS.length > 15 && <ViewAllCard href="/apps" title="View All AI Tools" />}
            </AppsCarousel>
          </section>

          {/* ── Games ───────────────────────────────────────── */}
          <section className="container animate-fade-up delay-300" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="GAMES" />
            <AppsCarousel>
              {GAMES.slice(0, 15).map(game => <AppCard key={game.title} {...game} zoomIcon />)}
              {GAMES.length > 15 && <ViewAllCard href="/games" title="View All Games" />}
            </AppsCarousel>
          </section>

          {/* ── Music ───────────────────────────────────────── */}
          <section className="container animate-fade-up delay-400" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="MUSIC & AUDIO" />
            <AppsCarousel>
              {MUSIC.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {MUSIC.length > 15 && <ViewAllCard href="/apps" title="View All Music" />}
            </AppsCarousel>
          </section>

          {/* ── VPN ─────────────────────────────────────────── */}
          <section className="container animate-fade-up delay-500" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="VPN's" />
            <AppsCarousel>
              {VPN.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {VPN.length > 15 && <ViewAllCard href="/apps" title="View All VPNs" />}
            </AppsCarousel>
          </section>

          {/* ── Anime & Manga ───────────────────────────────── */}
          <section className="container animate-fade-up delay-600" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="ANIME & MANGA" />
            <AppsCarousel>
              {ANIME_AND_MANGA.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {ANIME_AND_MANGA.length > 15 && <ViewAllCard href="/apps" title="View All Anime" />}
            </AppsCarousel>
          </section>

          {/* ── Movie & TV Apps ─────────────────────────────── */}
          <section className="container animate-fade-up delay-700" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="MOVIE & TV APPS" />
            <AppsCarousel>
              {MOVIE_AND_TV_APPS.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {MOVIE_AND_TV_APPS.length > 15 && <ViewAllCard href="/apps" title="View All Movies" />}
            </AppsCarousel>
          </section>

          {/* ── Sports ──────────────────────────────────────── */}
          <section className="container animate-fade-up delay-800" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="SPORTS" />
            <AppsCarousel>
              {SPORTS.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {SPORTS.length > 15 && <ViewAllCard href="/apps" title="View All Sports" />}
            </AppsCarousel>
          </section>

          {/* ── Video Players ───────────────────────────────── */}
          <section className="container animate-fade-up delay-400" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="VIDEO PLAYERS" />
            <AppsCarousel>
              {VIDEO_PLAYERS.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {VIDEO_PLAYERS.length > 15 && <ViewAllCard href="/apps" title="View All Video Players" />}
            </AppsCarousel>
          </section>

          {/* ── File Managers ───────────────────────────────── */}
          <section className="container animate-fade-up delay-500" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <SectionHead title="FILE MANAGERS" />
            <AppsCarousel>
              {FILE_MANAGERS.slice(0, 15).map(app => <AppCard key={app.title} {...app} />)}
              {FILE_MANAGERS.length > 15 && <ViewAllCard href="/apps" title="View All File Managers" />}
            </AppsCarousel>
          </section>

          {/* ── Promo Banner ───────────────────────────────── */}
          <section className="container animate-fade-up delay-600" style={{ marginBottom: '4rem' }}>
            <div style={{
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              minHeight: 220,
              background: 'linear-gradient(135deg,#0d1117 0%,#1a1f2e 100%)',
              position: 'relative',
            }}>
              {/* Text side */}
              <div style={{ padding: '2.5rem 3rem', zIndex: 1, flex: 1 }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 8 }}>
                  NEO-DYSTOPIA:<br />CHRONICLES
                </h3>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: '#06B6D4', marginBottom: 24 }}>FIGHT FOR THE FUTURE</p>
                <button style={{
                  padding: '10px 28px',
                  borderRadius: 8,
                  background: '#4F46E5',
                  border: 'none',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                }}>
                  PLAY NOW
                </button>
              </div>

              {/* Image/gradient side */}
              <div style={{
                position: 'absolute', top: 0, right: 0, bottom: 0, width: '55%',
                background: 'linear-gradient(90deg,#0d1117 0%,transparent 30%),linear-gradient(135deg,rgba(79,70,229,0.3),rgba(6,182,212,0.2))',
                borderRadius: '0 14px 14px 0',
              }} />
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}