import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import { getDriveFileInfo } from '@/lib/drive';
import ScreenshotsGallery from '@/components/ui/ScreenshotsGallery';
import AppsCarousel from '@/components/ui/AppsCarousel';
import AppCard from '@/components/ui/AppCard';
import { playDataMap } from '@/data/playData';

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
    googleDriveId: '1Cbs9AmRjpbyg_3CBwNWGCGQbQlajZ9es',
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
      googleDriveId: '1A_M6JFJ6eASPcsDhMEwEm_gb13ZL73el',
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
      googleDriveId: '1YEOxe7nKgs7-Tj3U9iD05QJAHFmMDB0g',
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
      googleDriveId: '1v3XSDYiUADtSvASnsxJth8qBdsQWGwm1',
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
      googleDriveId: '1v3XSDYiUADtSvASnsxJth8qBdsQWGwm1',
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
      googleDriveId: '1z0wZ69tSZ8qTDCeP2NgHbWfZJKeqQW4_',
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
      googleDriveId: '13JpgO4s5rEEGPRlbk7FLAZ7aqBVBv2Ym',
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
      googleDriveId: '14Yohr3wgU9xJusuFUDLX5yrVjVo_kWF5',
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
      googleDriveId: '1UrIqa7WYXCbVhCHaWx4k2eAaEli7zEhs',
      screenshots: [
        '/Images/Video%20%26%20Photo%20Editing/Remini/1.webp',
        '/Images/Video%20%26%20Photo%20Editing/Remini/2.webp',
        '/Images/Video%20%26%20Photo%20Editing/Remini/3.webp',
        '/Images/Video%20%26%20Photo%20Editing/Remini/4.webp',
        '/Images/Video%20%26%20Photo%20Editing/Remini/5.webp',
        '/Images/Video%20%26%20Photo%20Editing/Remini/6.webp',
        '/Images/Video%20%26%20Photo%20Editing/Remini/7.webp',
        '/Images/Video%20%26%20Photo%20Editing/Remini/8.webp'
      ]
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
      googleDriveId: '19QKfgW0E4_AQ6n3udi6HIRa-e1RBzSt1',
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
      googleDriveId: '1Gi0l0HgYwNbZkSRljLfcaTu3jgxk43jf',
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
  const playStoreInfo = playDataMap[slug];

  if (app && playStoreInfo) {
    app = {
      ...app,
      title: playStoreInfo.title,
      developer: playStoreInfo.developer,
      description: playStoreInfo.description,
      rating: playStoreInfo.rating,
      reviews: playStoreInfo.reviews,
      downloads: playStoreInfo.downloads
    };
  }

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
      title: playStoreInfo?.title || foundApp || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      developer: playStoreInfo?.developer || 'Unknown Developer',
      description: playStoreInfo?.description || 'Download the latest version for free. Get the best features, premium tools, and unrestricted access immediately.',
      rating: playStoreInfo?.rating || (Math.random() * (4.9 - 4.2) + 4.2).toFixed(1),
      reviews: playStoreInfo?.reviews || '10K reviews',
      downloads: playStoreInfo?.downloads || '1M+',
      iconUrl: iconUrl,
      googleDriveId: {
        '8-ball-pool': '1-NfyjE93pZilJlB28lWqMUQlMMRXvLiJ',
        'clash-of-clans': '1pJkryS8mrSaZYNbcCHzHi5mr5FaZIkZV',
        'dream-league-soccer': '1oBJOTRtMLbzyfFqaBtsRgbes_TGvhja5',
        'gta-san-andreas': '1hRpPqsYEcuvtS486xoVMwouuUXD0rucx',
        'clash-royale': '13iHQ-MY8hA5m0iZD4B_JhCzKxFWSLNWm',
        'car-parking-multiplayer': '1mdfX9Y_0GueY95rbhdmdbe9xfvRx3DT4',
        'minecraft': '1sik4Sb97LPuRQ-TPnNZwI8T7NITJltH8',
        'hill-climb-racing': '1w1k7lOjgdHsVlMXiYueO59N2kNWIa5nF',
        'hill-climb-racing-2': '1U3qZ7NLbjUr3QaoS4-dU_hF3-Lpg7Zuv',
        'roblox': '1TFC4Zla1fvyoyNxNlKOJBdEY8zLrnCmn',
        'amazon-music': '1Qc9FxP9sz9huskXdna3gUJayiIGE_7Ww',
        'anghami': '1rfjw12uyiUl8TkEKrKUSjKi6QIG03lqU',
        'gaana': '1Ajyjdp5RdhStC8g3Qh-EgHN-Q085RuRm',
        'soundcloud': '1hEZc1kEV3AD0vYPafs1wiYgadYRyWZlq',
        'spotify': '1pjt9_oIs2vLVHzWziH0vWsN9QdJNTSxE',
        'youtube-music': '11-EJAkyZXBTmRj7jmYfzifQFf0XsTpoT',
        'proton-vpn': '1nopFSHyjT_3EpUUmXRmU-VKP2Qo0rDKL',
        'psiphon-vpn': '1poed-XLk2xk19ky5hJrHqVEYoCX4Ol9g',
        'supervpn': '1p-6PhP17Xi3puMb3NuVQgUiCQoUhWH-L',
        'thunder-vpn': '1VyCCHu6VOZNNclb04iTVWyVvZq53UCs0',
        'turbo-vpn': '1Fa0Op_cwMhxSTvca4c0b0Kttnmq2l-ni',
        'snapseed': '1Jrc3qb11uTUY275rJMnIyY9iv_0HjAHJ',
        'deezer': '1Vxd_aq4lAvyD6Yn3P9AW1AU2U6AdfoP4',
        'audiomack': '1x_0qWK6TSspjiXZDBgdJEbu-cBMHFaf2',
        'stumble-guys': '1Q0aPcJwBFmRhZgklxKIZdNeCPHHcoFMw',
        'subway-surfers': '1M1X7RBSgaLIt9WRycCiMzoA-Vvy3V0sD',
        'chatgpt': '175H20oYttYKADOrqmQA9CIYygNMv-rRP',
        'vpn-windscribe': '1hwRF0BBj7xMti1XtVe5qG1pgAC2XDavu',
        'expressvpn': '19Tl4I_k9W6e3fuguLbBgJlAfU_VOEa8w',
        'nordvpn': '1roTOre5gcENzu8nnQJE_p16OO2KoArpj',
        'hide.me-vpn': '1djFMul3Pd5x7gRfzRVaUFSlUdNZ5mb7F',
        'boomplay': '1cfxVUhK9FPhapbcKpbF9B3jkXIp4nDBS',
        'napster': '1teRZ8KvK9m9H5xkAIdP3CBvUYp-yXS_D'
      }[slug as string] || undefined,
      screenshots: screenshots
    };
  }

  const fileInfo = app.googleDriveId ? await getDriveFileInfo(app.googleDriveId) : { size: null, version: null };
  const fileSize = fileInfo.size;
  const fileVersion = fileInfo.version;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
        
      <div className="container animate-fade-up flex flex-wrap gap-12 lg:gap-24 items-center justify-between" style={{ paddingTop: '32px', paddingBottom: '48px' }}>
        {/* Left Side: App Info */}
        <div className="w-full md:flex-1 flex flex-col pt-4" style={{ minWidth: '0', maxWidth: '460px' }}>
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
          <div className="w-full max-w-full overflow-hidden">
            <style>{`
              .app-stats-row { flex-wrap: nowrap; margin-bottom: 32px; }
              .app-stats-logo { width: 84px; height: 84px; margin-right: 24px; border-radius: 20px; flex-shrink: 0; }
              .app-stats-val { font-size: 18px; }
              .app-mod-badge {
                position: absolute;
                bottom: -2px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, #FF0055 0%, #B3003B 100%);
                color: #ffffff;
                font-size: 0.5rem;
                font-weight: 900;
                letter-spacing: 0.05em;
                padding: 2px 8px;
                border-radius: 8px 8px 0 0;
                z-index: 10;
                box-shadow: 0 -2px 10px rgba(255, 0, 85, 0.4);
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2px;
                white-space: nowrap;
              }
              .app-mod-badge-icon { width: 8px; height: 8px; }
              
              @media (max-width: 500px) {
                .app-stats-logo { width: 56px; height: 56px; margin-right: 12px; border-radius: 12px; }
                .app-stats-val { font-size: 13px; }
                .app-stats-lbl { font-size: 10px; }
                .app-stats-div { margin: 0 12px; height: 24px; }
                .app-mod-badge {
                  font-size: 0.4rem;
                  padding: 1px 4px;
                  border-radius: 6px 6px 0 0;
                }
                .app-mod-badge-icon { width: 6px; height: 6px; }
              }
            `}</style>
            
            {/* Stats Row */}
            <div className="flex items-center pb-2 w-full" style={{ marginBottom: '2.5rem' }}>
              {/* Logo */}
              {app.iconUrl ? (
                <div className="flex items-center justify-center overflow-hidden shadow-lg app-stats-logo relative">
                  <Image src={app.iconUrl} alt="icon" width={84} height={84} className="object-cover w-full h-full" priority quality={100} unoptimized={true} />
                  <div className="app-mod-badge">
                    <svg className="app-mod-badge-icon" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    MOD APK
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 app-stats-logo relative" />
              )}
              
              {/* Stats Container */}
              <div className="flex items-center justify-between flex-1 sm:flex-none sm:gap-8 min-w-0">
                {/* Rating */}
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  <div className="font-bold text-white flex items-center app-stats-val" style={{ whiteSpace: 'nowrap', gap: '4px' }}>
                    {app.rating}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  </div>
                  <div className="text-text-muted app-stats-lbl" style={{ whiteSpace: 'nowrap', marginTop: '4px' }}>{app.reviews}</div>
                </div>
                
                {/* Divider */}
                <div className="w-[1px] h-8 bg-white/10 flex-shrink-0 mx-2 sm:mx-0" />
                
                {/* Downloads */}
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  <div className="font-bold text-white app-stats-val" style={{ whiteSpace: 'nowrap' }}>{app.downloads}</div>
                  <div className="text-text-muted app-stats-lbl" style={{ whiteSpace: 'nowrap', marginTop: '4px' }}>Downloads</div>
                </div>
                
                {/* Version */}
                {fileVersion && (
                  <>
                    {/* Divider */}
                    <div className="w-[1px] h-8 bg-white/10 flex-shrink-0 mx-2 sm:mx-0" />
                    
                    <div className="flex flex-col items-center justify-center flex-shrink-0">
                      <div className="font-bold text-white app-stats-val" style={{ whiteSpace: 'nowrap' }}>{fileVersion}</div>
                      <div className="text-text-muted app-stats-lbl" style={{ whiteSpace: 'nowrap', marginTop: '4px' }}>Version</div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Interactive Install Button */}
            <div style={{ marginTop: '1rem' }}>
              <DownloadButton slug={slug} fileSize={fileSize} googleDriveId={app.googleDriveId} />
            </div>
          </div>
        </div>
        
        {/* Right Side: Screenshots Gallery */}
        <ScreenshotsGallery screenshots={app.screenshots} title={app.title} />
      </div>
      
      {/* AI Tools Section */}
      <section className="container animate-fade-up mt-16 pt-8 border-t border-white/5 mb-16">
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