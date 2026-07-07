'use client';

import styles from './AppCard.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AppCardProps {
  title: string;
  rating: number;
  iconUrl?: string;
  isFree?: boolean;
}

export default function AppCard({ title, rating, iconUrl, isFree = true }: AppCardProps) {
  const router = useRouter();
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div 
      onClick={() => router.push(`/app/${slug}`)} 
      className={`glass-panel hover-scale ${styles.card}`}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.iconContainer}>
        {iconUrl ? (
          <Image src={iconUrl} alt={title} fill className={`${styles.icon} ${title === 'Capcut' ? styles.iconScaled : ''}`} />
        ) : (
          <div className={styles.iconPlaceholder}></div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.rating}>
          <svg className={styles.star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>{rating}</span>
        </div>
      </div>
      <button className={styles.downloadBtn} onClick={(e) => {
        e.stopPropagation(); // prevent card click from firing twice
        router.push(`/app/${slug}`);
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        DOWNLOAD
      </button>
    </div>
  );
}
