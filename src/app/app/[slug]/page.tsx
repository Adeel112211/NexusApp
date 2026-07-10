import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { getDriveFileSize } from '@/lib/drive';
import ScreenshotsGallery from '@/components/ScreenshotsGallery';
import AppsCarousel from '@/components/AppsCarousel';
import AppCard from '@/components/AppCard';

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

  let app = appDataMap[slug];

  if (!app) {
    const fs = require('fs');
    const path = require('path');
    const baseDir = path.join(process.cwd(), 'public', 'Images');
    let foundCategory = null;
    let foundApp = null;
    
    try {
      if (fs.existsSync(baseDir)) {
        const categories = fs.readdirSync(baseDir);
        for (const cat of categories) {
          if (!fs.statSync(path.join(baseDir, cat)).isDirectory()) continue;
          const apps = fs.readdirSync(path.join(baseDir, cat));
          for (const a of apps) {
            if (a.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug) {
              foundCategory = cat;
              foundApp = a;
              break;
            }
          }
          if (foundApp) break;
        }
      }
    } catch(e) { console.error(e) }

    let iconUrl = '';
    let screenshots: string[] = [];

    if (foundApp && foundCategory) {
      const appDir = path.join(baseDir, foundCategory, foundApp);
      const files = fs.readdirSync(appDir);
      
      let icon = files.find((f: string) => f.toLowerCase() === `${foundApp?.toLowerCase()}.png` || f.toLowerCase() === `${foundApp?.toLowerCase()}.webp` || f.toLowerCase() === `${foundApp?.toLowerCase()}.jpg`);
      if (!icon) icon = files.find((f: string) => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg'));
      if (icon) {
        iconUrl = `/Images/${encodeURIComponent(foundCategory)}/${encodeURIComponent(foundApp)}/${encodeURIComponent(icon)}`;
      }

      const screenshotFiles = files.filter((f: string) => f !== icon && (f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg')));
      screenshotFiles.sort((a: string, b: string) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });
      
      screenshots = screenshotFiles.map((f: string) => `/Images/${encodeURIComponent(foundCategory)}/${encodeURIComponent(foundApp!)}/${encodeURIComponent(f)}`);
    }

    app = {
      title: foundApp || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      developer: 'Unknown Developer',
      description: 'Download the latest version for free. Get the best features, premium tools, and unrestricted access immediately.',
      rating: (Math.random() * (4.9 - 4.2) + 4.2).toFixed(1),
      reviews: '10K reviews',
      downloads: '1M+',
      iconUrl: iconUrl,
      googleDriveId: undefined,
      screenshots: screenshots
    };
  }

  const fileSize = app.googleDriveId ? await getDriveFileSize(app.googleDriveId) : null;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
        
      <div className="container animate-fade-up flex flex-wrap gap-8 items-center justify-center" style={{ paddingTop: '32px', paddingBottom: '48px' }}>
        {/* Left Side: App Info */}
        <div className="flex-1 flex flex-col pt-4" style={{ minWidth: '350px', maxWidth: '460px' }}>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-1 leading-tight">
            {app.title}
          </h1>
          
          <div className="text-success text-lg font-medium mb-1">
            {app.developer}
          </div>
          
          <div className="text-text-muted text-sm" style={{ marginBottom: '40px' }}>
            In-app purchases
          </div>
          
          <p className="text-text-main/90 text-lg leading-relaxed" style={{ marginBottom: '24px' }}>
            {app.description}
          </p>
          
          {/* Stats & Download Container */}
          <div className="w-fit">
            {/* Stats Row */}
            <div className="flex items-center" style={{ marginBottom: '32px' }}>
              {/* Logo */}
              {app.iconUrl ? (
                <div className="flex items-center justify-center flex-shrink-0 rounded-[20px] overflow-hidden shadow-lg" style={{ width: '84px', height: '84px', marginRight: '32px' }}>
                  <Image src={app.iconUrl} alt="icon" width={84} height={84} className="object-cover w-full h-full" priority quality={100} />
                </div>
              ) : (
                <div className="flex-shrink-0 rounded-[20px] bg-white/10" style={{ width: '84px', height: '84px', marginRight: '32px' }} />
              )}
              
              {/* Rating */}
              <div className="flex flex-col justify-center">
                <div className="font-bold text-white flex items-center" style={{ fontSize: '18px', whiteSpace: 'nowrap', gap: '4px' }}>
                  {app.rating}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                </div>
                <div className="text-text-muted" style={{ fontSize: '13px', whiteSpace: 'nowrap', marginTop: '2px' }}>{app.reviews}</div>
              </div>
              
              {/* Divider */}
              <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 32px' }} />
              
              {/* Downloads */}
              <div className="flex flex-col justify-center">
                <div className="font-bold text-white" style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>{app.downloads}</div>
                <div className="text-text-muted" style={{ fontSize: '13px', whiteSpace: 'nowrap', marginTop: '2px' }}>Downloads</div>
              </div>
              
              {/* Divider */}
              {fileSize && (
                <>
                  <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 32px' }} />
                  
                  {/* File Size */}
                  <div className="flex flex-col justify-center">
                    <div className="font-bold text-white" style={{ fontSize: '18px', whiteSpace: 'nowrap' }}>{fileSize}</div>
                    <div className="text-text-muted" style={{ fontSize: '13px', whiteSpace: 'nowrap', marginTop: '2px' }}>Size</div>
                  </div>
                </>
              )}
            </div>
            
            {/* Interactive Install Button */}
            <DownloadButton slug={slug} />
          </div>
        </div>
        
        {/* Right Side: Screenshots Gallery */}
        <ScreenshotsGallery screenshots={app.screenshots} title={app.title} />
      </div>
      
      {/* AI Tools Section */}
      <section className="container animate-fade-up mt-16 pt-8 border-t border-white/5">
        <h2 className="text-lg font-extrabold uppercase tracking-wider text-white mb-6">AI TOOLS</h2>
        <AppsCarousel>
          <AppCard title="ChatGPT" rating={4.8} iconUrl="/Images/Ai/ChatGPT/ChatGPT.png" isFree={true} priority={true} />
          <AppCard title="Grok AI" rating={4.6} iconUrl="/Images/Ai/Grok%20AI/Grok%20AI.png" isFree={true} priority={true} />
          <AppCard title="Microsoft Copilot" rating={4.7} iconUrl="/Images/Ai/Microsoft%20Copilot/Microsoft%20Copilot.png" isFree={true} />
          <AppCard title="Perplexity AI" rating={4.8} iconUrl="/Images/Ai/Perplexity%20AI/Perplexity%20AI.png" isFree={true} />
        </AppsCarousel>
      </section>
      
      <Footer />
    </main>
  );
}