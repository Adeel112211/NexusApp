import Navbar    from '@/components/Navbar';
import Hero      from '@/components/Hero';
import AppCard   from '@/components/AppCard';
import StatsRow  from '@/components/StatsRow';
import CategoryCard from '@/components/CategoryCard';
import ListRow   from '@/components/ListRow';
import Footer    from '@/components/Footer';
import AppsCarousel from '@/components/AppsCarousel';

/* ─── Consistent section heading ──────────────────────── */
function SectionHead({ title }: { title: string }) {
  return (
    <h2 
      style={{ 
        fontSize: '1.75rem', 
        fontWeight: 800, 
        letterSpacing: '0.05em', 
        background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0px 2px 10px rgba(255,255,255,0.05)',
        marginBottom: 0
      }}
    >
      {title}
    </h2>
  );
}

/* ─── Shared max-width wrapper ─────────────────────────── */
const wrap: React.CSSProperties = { maxWidth: 1280, margin: '0 auto', padding: '0 2rem' };

/* ─── Data Arrays for DRY Code ─────────────────────────── */
const TRENDING_APPS = [
  { title: "Capcut",        rating: 4.8, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Capcut/Capcut.png",               priority: true, zoomIcon: true },
  { title: "Kinemaster",    rating: 4.7, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Kinemaster/Kine%20Master.png",      priority: true },
  { title: "Alight Motion", rating: 4.9, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Alightmotion/Alight%20Motion.png",  priority: true },
  { title: "VN Editor",     rating: 4.6, iconUrl: "/Images/Video%20%26%20Photo%20Editing/VN%20Editor/Vn%20Editor.png",       priority: true, zoomIcon: true },
  { title: "Canva",         rating: 4.8, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Canva/Canva.png" },
  { title: "InShot",        rating: 4.8, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Inshot/Inshot.png" },
  { title: "Lightroom",     rating: 4.7, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Lightroom/Lightroom.png" },
  { title: "Picsart",       rating: 4.5, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Picsart/Picsart.png" },
  { title: "Remini",        rating: 4.6, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Remini/Remini.png" },
  { title: "Snapseed",      rating: 4.4, iconUrl: "/Images/Video%20%26%20Photo%20Editing/Snapseed/Snapseed.png" },
];

const AI_TOOLS = [
  { title: "ChatGPT",           rating: 4.8, iconUrl: "/Images/Ai/ChatGPT/ChatGPT.png" },
  { title: "Grok AI",           rating: 4.6, iconUrl: "/Images/Ai/Grok%20AI/Grok%20AI.png" },
  { title: "Microsoft Copilot", rating: 4.7, iconUrl: "/Images/Ai/Microsoft%20Copilot/Microsoft%20Copilot.png" },
  { title: "Perplexity AI",     rating: 4.8, iconUrl: "/Images/Ai/Perplexity%20AI/Perplexity%20AI.png" },
];

const GAMES = [
  { title: "8 Ball Pool", rating: 4.3, iconUrl: "/Images/Games/8%20Ball%20Pool/8%20Ball%20Pool.webp" },
  { title: "Car Parking Multiplayer", rating: 4.4, iconUrl: "/Images/Games/Car%20Parking%20Multiplayer/Car%20Parking%20Multiplayer.webp" },
  { title: "Clash of Clans", rating: 4.9, iconUrl: "/Images/Games/Clash%20of%20Clans/Clash%20of%20Clans.webp" },
  { title: "Clash Royale", rating: 4.3, iconUrl: "/Images/Games/Clash%20Royale/Clash%20Royale.webp" },
  { title: "Dream League Soccer", rating: 4.9, iconUrl: "/Images/Games/Dream%20League%20Soccer/Dream%20League%20Soccer.webp" },
  { title: "Free Fire", rating: 4.4, iconUrl: "/Images/Games/Free%20Fire/Free%20Fire.webp" },
  { title: "GTA San Andreas", rating: 4.5, iconUrl: "/Images/Games/GTA%20San%20Andreas/GTA%20San%20Andreas.webp" },
  { title: "Hill Climb Racing", rating: 4.8, iconUrl: "/Images/Games/Hill%20Climb%20Racing/Hill%20Climb%20Racing.webp" },
  { title: "Hill Climb Racing 2", rating: 4.7, iconUrl: "/Images/Games/Hill%20Climb%20Racing%202/Hill%20Climb%20Racing%202.webp" },
  { title: "Minecraft", rating: 4.5, iconUrl: "/Images/Games/Minecraft/Minecraft.webp" },
  { title: "PUBG MOBILE", rating: 4.4, iconUrl: "/Images/Games/PUBG%20MOBILE/PUBG%20MOBILE.webp" },
  { title: "Roblox", rating: 4.7, iconUrl: "/Images/Games/Roblox/Roblox.webp" },
  { title: "Shadow Fight 2", rating: 4.6, iconUrl: "/Images/Games/Shadow%20Fight%202/Shadow%20Fight%202.webp" },
  { title: "Stumble Guys", rating: 4.3, iconUrl: "/Images/Games/Stumble%20Guys/Stumble%20Guys.webp" },
  { title: "Subway Surfers", rating: 4.6, iconUrl: "/Images/Games/Subway%20Surfers/Subway%20Surfers.webp" }
];

const MUSIC = [
  { title: "Amazon Music", rating: 4.6, iconUrl: "/Images/Music/Amazon%20Music/Amazon%20Music.webp" },
  { title: "Anghami", rating: 4.4, iconUrl: "/Images/Music/Anghami/Anghami.webp" },
  { title: "Audiomack", rating: 4.7, iconUrl: "/Images/Music/Audiomack/Audiomack.webp" },
  { title: "Boomplay", rating: 4.4, iconUrl: "/Images/Music/Boomplay/Boomplay.webp" },
  { title: "Deezer", rating: 4.5, iconUrl: "/Images/Music/Deezer/Deezer.webp" },
  { title: "Gaana", rating: 4.8, iconUrl: "/Images/Music/Gaana/Gaana.webp" },
  { title: "Napster", rating: 4.8, iconUrl: "/Images/Music/Napster/Napster.webp" },
  { title: "SoundCloud", rating: 4.8, iconUrl: "/Images/Music/SoundCloud/SoundCloud.webp" },
  { title: "Spotify", rating: 4.6, iconUrl: "/Images/Music/Spotify/Spotify.png" },
  { title: "YouTube Music", rating: 4.2, iconUrl: "/Images/Music/YouTube%20Music/YouTube%20Music.webp" }
];

const VPN = [
  { title: "ExpressVPN", rating: 4.6, iconUrl: "/Images/VPN/ExpressVPN/ExpressVPN.png" },
  { title: "hide.me VPN", rating: 4.4, iconUrl: "/Images/VPN/hide.me%20VPN/hide.me%20VPN.png" },
  { title: "NordVPN", rating: 4.8, iconUrl: "/Images/VPN/NordVPN/NordVPN.png" },
  { title: "Proton VPN", rating: 4.5, iconUrl: "/Images/VPN/Proton%20VPN/Proton%20VPN.png" },
  { title: "Psiphon VPN", rating: 4.8, iconUrl: "/Images/VPN/Psiphon%20VPN/Psiphon%20VPN.png" },
  { title: "SuperVPN", rating: 4.9, iconUrl: "/Images/VPN/SuperVPN/SuperVPN.png" },
  { title: "Thunder VPN", rating: 4.7, iconUrl: "/Images/VPN/Thunder%20VPN/Thunder%20VPN.webp" },
  { title: "Turbo VPN", rating: 4.4, iconUrl: "/Images/VPN/Turbo%20VPN/Turbo%20VPN.png" },
  { title: "VPN Windscribe", rating: 4.8, iconUrl: "/Images/VPN/VPN%20Windscribe/VPN%20Windscribe.png" }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* ── Video & Photo Editors ─────────────────────── */}
      <section className="container animate-fade-up" style={{ marginTop: '3.5rem', marginBottom: '4rem' }}>
        <SectionHead title="VIDEO & PHOTO EDITORS" />
        <AppsCarousel>
          {TRENDING_APPS.map(app => <AppCard key={app.title} {...app} />)}
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
          {AI_TOOLS.map(app => <AppCard key={app.title} {...app} />)}
        </AppsCarousel>
      </section>

      {/* ── Games ───────────────────────────────────────── */}
      <section className="container animate-fade-up delay-300" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
        <SectionHead title="GAMES" />
        <AppsCarousel>
          {GAMES.map(app => <AppCard key={app.title} {...app} />)}
        </AppsCarousel>
      </section>

      {/* ── Music ───────────────────────────────────────── */}
      <section className="container animate-fade-up delay-400" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
        <SectionHead title="MUSIC & AUDIO" />
        <AppsCarousel>
          {MUSIC.map(app => <AppCard key={app.title} {...app} />)}
        </AppsCarousel>
      </section>

      {/* ── VPN ─────────────────────────────────────────── */}
      <section className="container animate-fade-up delay-500" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
        <SectionHead title="VPN's" />
        <AppsCarousel>
          {VPN.map(app => <AppCard key={app.title} {...app} />)}
        </AppsCarousel>
      </section>



      {/* ── Promo Banner ───────────────────────────────── */}
      <section className="container animate-fade-up delay-300" style={{ marginBottom: '4rem' }}>
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

      <Footer />
    </main>
  );
}