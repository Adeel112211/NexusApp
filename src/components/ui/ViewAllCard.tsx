import Link from 'next/link';

interface ViewAllCardProps {
  href: string;
  title?: string;
}

export default function ViewAllCard({ href, title = "View All" }: ViewAllCardProps) {
  return (
    <Link href={href} className="group relative flex flex-col justify-center items-center h-full w-full bg-[#08080a] rounded-[24px] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden" style={{ aspectRatio: '1/1.2', minHeight: '180px' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
      <span className="text-white font-bold tracking-wider relative z-10 group-hover:text-cyan-400 transition-colors duration-300 text-sm uppercase">{title}</span>
    </Link>
  );
}
