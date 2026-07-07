import styles from './ListRow.module.css';

interface ListRowProps {
  rank: number;
  title: string;
  category: string;
  size: string;
  downloads: string;
}

export default function ListRow({ rank, title, category, size, downloads }: ListRowProps) {
  return (
    <div className={`hover-scale ${styles.listRow}`}>
      <div className={styles.rank}>{rank}</div>
      <div className={styles.iconPlaceholder}></div>
      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h4 className={styles.title}>{title}</h4>
          {rank === 1 && <span className={styles.badge}>#1</span>}
        </div>
        <p className={styles.details}>
          {size} • {downloads} Downloads • <span className={styles.category}>{category}</span>
        </p>
      </div>
      <button className={styles.downloadBtn}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </button>
    </div>
  );
}
