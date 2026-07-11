'use client';
import { useState } from 'react';
import Navbar    from '@/components/layout/Navbar';
import AppCard   from '@/components/ui/AppCard';
import Footer    from '@/components/layout/Footer';
import Pagination from '@/components/ui/Pagination';
import { GAMES } from '@/data/apps';

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredGames = GAMES.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentGames = filteredGames.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main>
      <Navbar />

      <div style={{ paddingTop: '80px', paddingBottom: '40px' }} className="container animate-fade-up">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Top Games
        </h1>
        <p style={{ color: '#9CA3AF', fontSize: '1.1rem', maxWidth: 600, marginBottom: '2.5rem' }}>
          Discover the most popular, highest-rated mobile games. From fast-paced shooters to relaxing puzzles, we have it all.
        </p>

        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: 400, marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Search games..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
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

        {/* ── Games Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6" style={{ marginBottom: '6rem' }}>
          {currentGames.length > 0 ? (
            currentGames.map((game, index) => (
              <div key={game.title} className={`animate-fade-up delay-${(index % 5) * 100}`}>
                <AppCard {...game} priority={index < 5} />
              </div>
            ))
          ) : (
            <div style={{ color: '#9CA3AF', padding: '2rem 0', fontSize: '1.1rem', gridColumn: '1 / -1' }}>
              No games found matching "{searchQuery}"
            </div>
          )}
        </div>
        
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        )}
      </div>

      <Footer />
    </main>
  );
}
