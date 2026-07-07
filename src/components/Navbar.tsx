import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>APPNEXUS</span>
        </Link>
        


        <div className={styles.navLinks}>
          <Link href="/" className={styles.active}>HOME</Link>
          <Link href="/apps">APPS</Link>
          <Link href="/games">GAMES</Link>
          <Link href="/forum">FORUM</Link>
        </div>
      </div>
    </nav>
  );
}
