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
        // Brand palette
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dim: '#8A6E2F',
          pale: 'rgba(201,168,76,0.08)',
        },
        void: '#050505',
        deep: '#0A0A0A',
        surface: '#111111',
        obsidian: '#0D0D0D',
        glass: 'rgba(255,255,255,0.04)',
        // Text scale
        'text-primary': '#F0EDE8',
        'text-secondary': '#8A8680',
        'text-muted': '#4A4845',
        // Accents
        'ferrari-red': '#C0392B',
        'lambo-green': '#6DCC30',
        'bugatti-purple': '#9B59B6',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        condensed: ['Barlow Condensed', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(56px, 8vw, 110px)', { lineHeight: '0.92', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(40px, 5vw, 68px)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(32px, 4vw, 52px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'label': ['11px', { letterSpacing: '0.4em', lineHeight: '1' }],
        'label-sm': ['10px', { letterSpacing: '0.3em', lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '120': '30rem',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C, #E8C96A)',
        'void-gradient': 'linear-gradient(135deg, #050505, #0A0A0A)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        'hero-gradient': 'linear-gradient(135deg, #050505 0%, #0d0d0d 40%, #080508 70%, #050505 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.5s ease forwards',
        'marquee': 'marquee 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'expand-line': 'expandLine 2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.02)' },
        },
        expandLine: {
          from: { width: '0' },
          to: { width: '60px' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'gold-sm': '0 10px 30px rgba(201, 168, 76, 0.15)',
        'gold-md': '0 20px 40px rgba(201, 168, 76, 0.2)',
        'gold-lg': '0 24px 48px rgba(201, 168, 76, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.08)',
        'glass-hover': 'rgba(255, 255, 255, 0.15)',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

export default config
