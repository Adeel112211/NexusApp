import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-hover': '#4338CA',
        secondary: '#06B6D4',
        'bg-dark': '#050505',
        'bg-light': '#F8FAFC',
        surface: '#111827',
        'surface-light': '#1F2937',
        border: '#E5E7EB',
        'border-dark': '#374151',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        'text-main': '#F3F4F6',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shine: 'shine 4s linear infinite',
        spin: 'spin 1s linear infinite',
        'float-orb': 'floatOrb 60s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          to: { backgroundPosition: '200% center' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        floatOrb: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(2vw, -2vh) scale(1.05)' },
          '66%': { transform: 'translate(-1vw, 3vh) scale(0.95)' },
          '100%': { transform: 'translate(1vw, 1vh) scale(1.02)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--primary) 0%, #6366f1 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #6366f1 0%, var(--secondary) 100%)',
        'gradient-text': 'linear-gradient(90deg, var(--secondary) 0%, var(--primary) 50%, var(--secondary) 100%)',
        'animated-bg': 'radial-gradient(ellipse at 50% -20%, rgba(120, 119, 198, 0.25) 0%, transparent 60%), radial-gradient(rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px)',
      },
      backgroundSize: {
        'animated': '100% 100%, 24px 24px',
      },
      backgroundPosition: {
        'animated': 'center top, center center',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(79, 70, 229, 0.2)',
        'download': '0 8px 24px rgba(16, 185, 129, 0.3)',
        'download-hover': '0 12px 28px rgba(16, 185, 129, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(16, 185, 129, 0.2)',
        'screenshot': '0 10px 25px rgba(0,0,0,0.3)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '16px',
        'card': '24px',
      },
    },
  },
  plugins: [],
}
export default config