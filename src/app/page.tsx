import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppCard from '@/components/AppCard';
import StatsRow from '@/components/StatsRow';
import CategoryCard from '@/components/CategoryCard';
import ListRow from '@/components/ListRow';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <Hero />

      {/* Trending Now */}
      <section className="container animate-fade-up" style={{ marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>TRENDING NOW</h2>
        <div className={styles.grid4}>
          <AppCard title="Capcut" rating={4.8} iconUrl="/Capcut.png" isFree={true} />
          <AppCard title="Kinemaster" rating={4.7} iconUrl="/Kine Master.png" isFree={true} />
          <AppCard title="Alight Motion" rating={4.9} iconUrl="/Alight Motion.png" isFree={true} />
          <AppCard title="VN Video Editor" rating={4.6} iconUrl="/Vn Editor.png" isFree={true} />
        </div>
      </section>

      <div className="animate-fade-up delay-100">
        <StatsRow />
      </div>

      {/* Explore Categories */}
      <section className="container animate-fade-up delay-200" style={{ marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>Explore Categories</h2>
        <div className={styles.grid4}>
          <CategoryCard 
            title="Social" 
            subtitle="Connect & Chat"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>}
          />
          <CategoryCard 
            title="AI Tools" 
            subtitle="Smart Efficiency"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>}
          />
          <CategoryCard 
            title="Games" 
            subtitle="Action & RPG"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><circle cx="16" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line></svg>}
          />
          <CategoryCard 
            title="Utilities" 
            subtitle="System Tools"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>}
          />
        </div>
      </section>

      {/* Top Downloads */}
      <section className="container animate-fade-up delay-300" style={{ marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>Top Downloads</h2>
        <div className={styles.listContainer}>
          <ListRow rank={1} title="SkySocial" category="Social • 18+" size="45MB" downloads="1.2M" />
          <ListRow rank={2} title="Shadow Ops" category="Games • Action" size="1.2GB" downloads="850k" />
          <ListRow rank={3} title="WealthFlow" category="Finance" size="32MB" downloads="450k" />
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container animate-fade-up delay-300" style={{ marginBottom: '4rem' }}>
        <div className={styles.promoBanner}>
          <div className={styles.promoContent}>
            <h3>NEO-DYSTOPIA: CHRONICLES</h3>
            <p>FIGHT FOR THE FUTURE</p>
            <button className="btn btn-primary">PLAY NOW</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
