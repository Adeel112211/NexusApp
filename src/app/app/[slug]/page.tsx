import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { getDriveFileSize } from '@/lib/drive';
import ScreenshotsGallery from '@/components/ScreenshotsGallery';

export default async function AppDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  
  // Common details for VN Video Editor / VN Editor
  const vnEditorData = {
    title: 'VN Video Editor Maker VlogNow',
    developer: 'Ubiquiti Labs, LLC',
    description: 'Best free HD video editor and video maker with all pro features.',
    rating: '4.6',
    reviews: '3M reviews',
    downloads: '100M+',
    iconUrl: '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/Vn%20Editor.png',
    screenshots: [
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/1.png',
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/2.png',
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/3.png',
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/4.png',
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/5.png',
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/6.png',
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/7.png',
      '/Images/Video%20%26%20Photo%20Editing/VN%20Editor/8.png'
    ]
  };

  // App details mapping
  const appDataMap: Record<string, any> = {
    'capcut': {
      title: 'CapCut: Photo & Video Editor',
      developer: 'Bytedance Pte. Ltd.',
      description: 'Capture your precious moments, edit videos with stunning music and effects.',
      rating: '4.3',
      reviews: '12.8M reviews',
      downloads: '1B+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Capcut/Capcut.png',
      googleDriveId: '1EgtZZA5JFYjFDsEeWSq21GNjjvTBtxe8',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Capcut/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Capcut/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Capcut/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Capcut/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Capcut/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Capcut/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Capcut/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Capcut/8.png'
      ]
    },
    'kinemaster': {
      title: 'KineMaster - Video Editor',
      developer: 'KineMaster, Video Editor Experts',
      description: 'Professional video editing with multi-layer, transitions, and effects.',
      rating: '4.7',
      reviews: '5M reviews',
      downloads: '100M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Kinemaster/Kine%20Master.png',
      googleDriveId: '1iMSl7I4jbS2ylW117UPEbJ4FMJ9NderH',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Kinemaster/8.png'
      ]
    },
    'alight-motion': {
      title: 'Alight Motion',
      developer: 'Alight Creative, Inc.',
      description: 'Be part of the movement! First pro motion graphics app for your smartphone.',
      rating: '4.9',
      reviews: '8M reviews',
      downloads: '50M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Alightmotion/Alight%20Motion.png',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/8.png'
      ]
    },
    'alightmotion': {
      title: 'Alight Motion',
      developer: 'Alight Creative, Inc.',
      description: 'Be part of the movement! First pro motion graphics app for your smartphone.',
      rating: '4.9',
      reviews: '8M reviews',
      downloads: '50M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Alightmotion/Alight%20Motion.png',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Alightmotion/8.png'
      ]
    },
    'vn-video-editor': vnEditorData,
    'vn-editor': vnEditorData,
    'canva': {
      title: 'Canva: Design, Photo & Video',
      developer: 'Canva',
      description: 'Canva is your free photo editor, video collage maker, and graphic design app. Create stunning social media posts, videos, cards, flyers, photo collages & more.',
      rating: '4.8',
      reviews: '14M reviews',
      downloads: '500M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Canva/Canva.png',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Canva/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Canva/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Canva/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Canva/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Canva/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Canva/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Canva/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Canva/8.png'
      ]
    },
    'inshot': {
      title: 'InShot - Video Editor',
      developer: 'InShot Video Editor',
      description: 'Powerful all-in-one Video Editor and Video Maker with professional features. Add music, transition effects, text, emoji and filters, blur background and etc!',
      rating: '4.8',
      reviews: '18M reviews',
      downloads: '500M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Inshot/Inshot.png',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Inshot/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/8.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/9.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/10.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/11.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/12.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/13.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/14.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/15.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/16.png',
        '/Images/Video%20%26%20Photo%20Editing/Inshot/17.png'
      ]
    },
    'lightroom': {
      title: 'Adobe Lightroom Video & Photo',
      developer: 'Adobe',
      description: 'Adobe Photoshop Lightroom is a free, powerful photo & video editor and camera app that empowers you to capture and edit stunning images.',
      rating: '4.7',
      reviews: '10M reviews',
      downloads: '100M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Lightroom/Lightroom.png',
      screenshots: []
    },
    'picsart': {
      title: 'Picsart AI Photo Video Editor',
      developer: 'PicsArt, Inc.',
      description: 'Join the Picsart community of over 150 million creators worldwide. With the Picsart AI photo editor and video editor, you can bring your creativity to life.',
      rating: '4.5',
      reviews: '11M reviews',
      downloads: '1B+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Picsart/Picsart.png',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Picsart/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Picsart/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Picsart/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Picsart/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Picsart/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Picsart/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Picsart/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Picsart/8.png'
      ]
    },
    'remini': {
      title: 'Remini - AI Photo Enhancer',
      developer: 'Bending Spoons',
      description: 'Turn your old, pixelated, blurred, or damaged pictures into high-definition photos with just one tap! Generate mind-blowing AI Avatars of yourself.',
      rating: '4.6',
      reviews: '3M reviews',
      downloads: '100M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Remini/Remini.png',
      screenshots: []
    },
    'snapseed': {
      title: 'Snapseed',
      developer: 'Google LLC',
      description: 'Snapseed is a complete and professional photo editor developed by Google. It includes 29 Tools and Filters, including: Healing, Brush, Structure, HDR, Perspective.',
      rating: '4.4',
      reviews: '1.5M reviews',
      downloads: '100M+',
      iconUrl: '/Images/Video%20%26%20Photo%20Editing/Snapseed/Snapseed.png',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/1.png',
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/2.png',
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/3.png',
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/4.png',
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/5.png',
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/6.png',
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/7.png',
        '/Images/Video%20%26%20Photo%20Editing/Snapseed/8.png'
      ]
    },
    'chatgpt': {
      title: 'ChatGPT',
      developer: 'OpenAI',
      description: 'Get instant answers, find creative inspiration, learn something new. The official app from OpenAI is free and syncs your history across devices.',
      rating: '4.8',
      reviews: '12M reviews',
      downloads: '100M+',
      iconUrl: '/Images/Ai/ChatGPT/ChatGPT.png',
      screenshots: [
        '/Images/Ai/ChatGPT/1.png',
        '/Images/Ai/ChatGPT/2.png',
        '/Images/Ai/ChatGPT/3.png',
        '/Images/Ai/ChatGPT/4.png',
        '/Images/Ai/ChatGPT/5.png',
        '/Images/Ai/ChatGPT/6.png',
        '/Images/Ai/ChatGPT/7.png',
        '/Images/Ai/ChatGPT/8.png',
        '/Images/Ai/ChatGPT/9.png',
        '/Images/Ai/ChatGPT/10.png',
        '/Images/Ai/ChatGPT/11.png',
        '/Images/Ai/ChatGPT/12.png',
        '/Images/Ai/ChatGPT/13.png',
        '/Images/Ai/ChatGPT/14.png',
        '/Images/Ai/ChatGPT/15.png'
      ]
    },
    'grok-ai': {
      title: 'Grok AI',
      developer: 'xAI',
      description: 'Grok is an AI designed to answer questions with a bit of wit and has a rebellious streak. Grok has real-time knowledge of the world via x (formerly Twitter).',
      rating: '4.6',
      reviews: '500K reviews',
      downloads: '10M+',
      iconUrl: '/Images/Ai/Grok%20AI/Grok%20AI.png',
      screenshots: [
        '/Images/Ai/Grok%20AI/1.png',
        '/Images/Ai/Grok%20AI/2.png',
        '/Images/Ai/Grok%20AI/3.png',
        '/Images/Ai/Grok%20AI/4.png',
        '/Images/Ai/Grok%20AI/5.png',
        '/Images/Ai/Grok%20AI/6.png',
        '/Images/Ai/Grok%20AI/7.png'
      ]
    },
    'microsoft-copilot': {
      title: 'Microsoft Copilot',
      developer: 'Microsoft Corporation',
      description: 'Microsoft Copilot is a pioneering chat assistant powered by the latest OpenAI models, GPT-4 and DALL·E 3. Improve your productivity with AI!',
      rating: '4.7',
      reviews: '2.5M reviews',
      downloads: '50M+',
      iconUrl: '/Images/Ai/Microsoft%20Copilot/Microsoft%20Copilot.png',
      screenshots: [
        '/Images/Ai/Microsoft%20Copilot/1.png',
        '/Images/Ai/Microsoft%20Copilot/2.png',
        '/Images/Ai/Microsoft%20Copilot/3.png',
        '/Images/Ai/Microsoft%20Copilot/4.png',
        '/Images/Ai/Microsoft%20Copilot/5.png',
        '/Images/Ai/Microsoft%20Copilot/6.png',
        '/Images/Ai/Microsoft%20Copilot/7.png',
        '/Images/Ai/Microsoft%20Copilot/8.png'
      ]
    },
    'perplexity-ai': {
      title: 'Perplexity - Ask Anything',
      developer: 'Perplexity AI',
      description: 'Perplexity is your AI-powered search engine. Get instant, conversational answers on any topic, complete with inline citations and sources.',
      rating: '4.8',
      reviews: '800K reviews',
      downloads: '10M+',
      iconUrl: '/Images/Ai/Perplexity%20AI/Perplexity%20AI.png',
      screenshots: [
        '/Images/Ai/Perplexity%20AI/1.png',
        '/Images/Ai/Perplexity%20AI/2.png',
        '/Images/Ai/Perplexity%20AI/3.png',
        '/Images/Ai/Perplexity%20AI/4.png',
        '/Images/Ai/Perplexity%20AI/5.png',
        '/Images/Ai/Perplexity%20AI/6.png',
        '/Images/Ai/Perplexity%20AI/7.png',
        '/Images/Ai/Perplexity%20AI/8.png'
      ]
    }
  };

  const app = appDataMap[slug] || {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    developer: 'Unknown Developer',
    description: 'Download the latest version for free. Get the best features, premium tools, and unrestricted access immediately.',
    rating: '4.5',
    reviews: '10K reviews',
    downloads: '1M+',
    iconUrl: '',
    googleDriveId: undefined,
    screenshots: []
  };

  const fileSize = app.googleDriveId ? await getDriveFileSize(app.googleDriveId) : null;

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
            
            {/* File Size */}
            {fileSize && (
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fff' }}>{fileSize}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Size</div>
              </div>
            )}
          </div>
          
          {/* Interactive Install Button */}
          <DownloadButton slug={slug} />
        </div>
        
        {/* Right Side: Screenshots Gallery */}
        <ScreenshotsGallery screenshots={app.screenshots} title={app.title} />
      </div>
      
      <Footer />
    </main>
  );
}
