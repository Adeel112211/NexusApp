import styles from './StatsRow.module.css';

export default function StatsRow() {
  return (
    <section className={styles.statsRow}>
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.statItem}>
          <div className={styles.icon}>📱</div>
          <div className={styles.value}>10k+</div>
          <div className={styles.label}>APPS SAVED</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.icon}>⚡</div>
          <div className={styles.value}>FAST</div>
          <div className={styles.label}>DOWNLOADS</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.icon}>🛡️</div>
          <div className={styles.value}>SAFE</div>
          <div className={styles.label}>FILE VERIFIED</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.icon}>🌐</div>
          <div className={styles.value}>GLO</div>
          <div className={styles.label}>DOWNLOADS</div>
        </div>
      </div>
    </section>
  );
}
