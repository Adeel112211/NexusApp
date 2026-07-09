import styles from './StatsRow.module.css';

export default function StatsRow() {
  return (
    <section className={styles.statsRow}>
      <div className={`container ${styles.statsContainer}`}>
        {/* Card 1 */}
        <div className={styles.statItem} style={{ '--accent-color': '#818cf8', '--accent-glow': 'rgba(129, 140, 248, 0.15)' } as React.CSSProperties}>
          <div className={styles.iconWrapper}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#818cf8' }}>
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
              <path d="M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" strokeWidth="3"></path>
            </svg>
          </div>
          <div className={styles.textStack}>
            <div className={styles.value}>10k+</div>
            <div className={styles.label}>APPS SAVED</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.statItem} style={{ '--accent-color': '#fbbf24', '--accent-glow': 'rgba(251, 191, 36, 0.15)' } as React.CSSProperties}>
          <div className={styles.iconWrapper}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fbbf24' }}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <div className={styles.textStack}>
            <div className={styles.value}>FAST</div>
            <div className={styles.label}>DOWNLOADS</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.statItem} style={{ '--accent-color': '#34d399', '--accent-glow': 'rgba(52, 211, 153, 0.15)' } as React.CSSProperties}>
          <div className={styles.iconWrapper}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#34d399' }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 11 2 2 4-4"></path>
            </svg>
          </div>
          <div className={styles.textStack}>
            <div className={styles.value}>SAFE</div>
            <div className={styles.label}>FILE VERIFIED</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.statItem} style={{ '--accent-color': '#38bdf8', '--accent-glow': 'rgba(56, 189, 248, 0.15)' } as React.CSSProperties}>
          <div className={styles.iconWrapper}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#38bdf8' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div className={styles.textStack}>
            <div className={styles.value}>GLOBAL</div>
            <div className={styles.label}>DOWNLOADS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

