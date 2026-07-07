import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export default async function AppDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  
  // App details mapping
  const appDataMap: Record<string, any> = {
    'capcut': {
      title: 'CapCut: Photo & Video Editor',
      developer: 'Bytedance Pte. Ltd.',
      description: 'Capture your precious moments, edit videos with stunning music and effects.',
      rating: '4.3',
      reviews: '12.8M reviews',
      downloads: '1B+',
      iconUrl: '/Capcut.png'
    },
    'kinemaster': {
      title: 'KineMaster - Video Editor',
      developer: 'KineMaster, Video Editor Experts',
      description: 'Professional video editing with multi-layer, transitions, and effects.',
      rating: '4.7',
      reviews: '5M reviews',
      downloads: '100M+',
      iconUrl: '/Kine Master.png'
    },
    'alight-motion': {
      title: 'Alight Motion',
      developer: 'Alight Creative, Inc.',
      description: 'Be part of the movement! First pro motion graphics app for your smartphone.',
      rating: '4.9',
      reviews: '8M reviews',
      downloads: '50M+',
      iconUrl: '/Alight Motion.png'
    },
    'vn-video-editor': {
      title: 'VN Video Editor Maker VlogNow',
      developer: 'Ubiquiti Labs, LLC',
      description: 'Best free HD video editor and video maker with all pro features.',
      rating: '4.6',
      reviews: '3M reviews',
      downloads: '100M+',
      iconUrl: '/Vn Editor.png'
    }
  };

  const app = appDataMap[slug] || {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    developer: 'Unknown Developer',
    description: 'Download the latest version for free. Get the best features, premium tools, and unrestricted access immediately.',
    rating: '4.5',
    reviews: '10K reviews',
    downloads: '1M+',
    iconUrl: ''
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <div className="container animate-fade-up" style={{ flex: 1, padding: '3rem 0', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        
        {/* Left Side: App Info */}
        <div style={{ flex: '1 1 400px', maxWidth: '600px', display: 'flex', flexDirection: 'column', paddingTop: '1rem' }}>
          
          <h1 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem', lineHeight: 1.2 }}>
            {app.title}
          </h1>
          
          <div style={{ color: '#10B981', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.25rem' }}>
            {app.developer}
          </div>
          
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            In-app purchases
          </div>
          
          <p style={{ color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.5 }}>
            {app.description}
          </p>
          
          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            {/* Logo */}
            {app.iconUrl ? (
              <div style={{ width: '56px', height: '56px', position: 'relative', borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
                <Image src={app.iconUrl} alt="icon" fill style={{ objectFit: 'cover' }} />
              </div>
            ) : (
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)' }}></div>
            )}
            
            {/* Rating */}
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold', fontSize: '1.1rem', color: '#fff' }}>
                {app.rating}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{app.reviews}</div>
            </div>
            
            {/* Downloads */}
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fff' }}>{app.downloads}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Downloads</div>
            </div>
          </div>
          
          {/* Interactive Install Button */}
          <DownloadButton slug={slug} />
        </div>
        
        {/* Right Side: Screenshots Gallery */}
        <div style={{ flex: '1 1 500px', display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem', WebkitOverflowScrolling: 'touch' }}>
          {[
            { title: 'Video & Photo Magic', color: '#0ea5e9' },
            { title: 'AutoCut', color: '#8b5cf6' },
            { title: 'AI Translator', color: '#ec4899' }
          ].map((feature, i) => (
            <div key={i} style={{ 
              minWidth: '240px', 
              height: '480px', 
              background: 'rgba(15, 23, 42, 0.6)', 
              borderRadius: '16px', 
              border: '1px solid rgba(255,255,255,0.05)', 
              display: 'flex', 
              flexDirection: 'column', 
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <div style={{ padding: '1.5rem 1rem 0.5rem', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold', color: '#fff', zIndex: 1 }}>
                {feature.title}
              </div>
              <div style={{ flex: 1, position: 'relative', margin: '0.5rem 1rem 1rem', borderRadius: '12px', background: `linear-gradient(180deg, ${feature.color} 0%, rgba(0,0,0,0.5) 100%)`, overflow: 'hidden' }}>
                 {/* Placeholder for future images */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
