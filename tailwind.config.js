/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        baby: {
          pink: '#ffc0d3',
          rose: '#ff9eb5',
          blush: '#ffd6e0',
          50: '#fff5f7',
          100: '#ffe9ee',
          200: '#ffd0dc',
          300: '#ffb3c6',
          400: '#ff8fa9',
          500: '#ff6b8b',
        },
        cherry: {
          DEFAULT: '#e63946',
          light: '#ff5a6e',
          dark: '#c1272d',
        },
        cream: {
          DEFAULT: '#fff8f0',
          dark: '#f5ebe0',
        },
        burgundy: {
          DEFAULT: '#800020',
          light: '#a01030',
          dark: '#5c0017',
        },
      },
      fontFamily: {
        handwritten: ['"Caveat"', '"Comic Sans MS"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        'petal-fall': 'petalFall 15s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'pop-in': 'popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'page-peel': 'pagePeel 1.5s ease-in-out forwards',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.15)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateY(110vh) translateX(100px) rotate(360deg)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 139, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 139, 0.9), 0 0 60px rgba(230, 57, 70, 0.4)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pagePeel: {
          '0%': { transform: 'rotateY(0deg)', opacity: '1' },
          '100%': { transform: 'rotateY(180deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
