'use client';

export default function Hero() {
  return (
    <section style={{ paddingTop: '5rem', paddingBottom: '4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', letterSpacing: '-0.01em', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
          Find &amp; Download the&nbsp;
          <span
            className="font-dancing"
            style={{
              backgroundImage: 'linear-gradient(90deg, #06B6D4 0%, #4F46E5 50%, #06B6D4 100%)',
              backgroundSize: '200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shine 4s linear infinite',
              fontSize: '105%',
              fontWeight: 700,
              fontStyle: 'normal',
            }}
          >
            Best Mods Apps
          </span>
        </h1>

        {/* Search pill */}
        <div style={{
          width: '100%',
          maxWidth: 650,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(255,255,255,0.03)', /* #ffffff08 */
          border: '1px solid rgba(255,255,255,0.08)', /* #ffffff14 */
          borderRadius: 20,
          padding: '0.75rem 0.75rem 0.75rem 1.5rem',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          transition: 'all .3s',
          position: 'relative',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)', /* #0006 */
        }}>
          <svg style={{ width: 18, height: 18, color: '#9CA3AF', flexShrink: 0 }} fill="currentColor" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
          <input
            type="text"
            placeholder="Search for Mods Apps, Games, AI Tools..."
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#F3F4F6', fontSize: '0.95rem' }}
          />
          <button
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#4F46E5';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(79, 70, 229, 0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#2b2b36';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            style={{
              flexShrink: 0,
              backgroundColor: '#2b2b36',
              border: '1px solid rgba(255,255,255,0.05)',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              padding: '10px 24px',
              borderRadius: 10,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            SEARCH
          </button>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 4 }}>
          {['Apps', 'Games', 'Kids'].map((label) => {
            const isActive = label === 'Apps';
            return (
              <button 
                key={label}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  if (isActive) {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(6,182,212,0.4)';
                  } else {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (isActive) {
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(6,182,212,0.2)';
                  } else {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }
                }}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: 30,
                  border: isActive ? '1px solid #06B6D4' : '1px solid rgba(255,255,255,0.1)',
                  background: isActive ? 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(79,70,229,0.15) 100%)' : 'rgba(255,255,255,0.03)',
                  color: isActive ? '#fff' : '#F3F4F6',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 0 15px rgba(6,182,212,0.2)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}