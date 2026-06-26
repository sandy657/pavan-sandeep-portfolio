/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#05060a',
          800: '#0a0c14',
          700: '#10131f',
          600: '#161a2b',
        },
        // Theme-aware semantic tokens (driven by CSS variables in index.css).
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        strong: 'rgb(var(--text-strong) / <alpha-value>)',
        base: 'rgb(var(--text-base) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        faint: 'rgb(var(--text-faint) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        accent: {
          DEFAULT: '#7c5cff',
          soft: '#a78bff',
          glow: '#22d3ee',
          warm: '#ff7eb6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 92, 255, 0.55)',
        card: '0 20px 60px -25px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        blob: 'blob 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
