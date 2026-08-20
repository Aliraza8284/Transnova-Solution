/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'brand-black': '#111111',
        'brand-orange': '#FF6B35',
        'brand-off-white': '#FAF9F6',
        'brand-warm-grey': '#EDEAE4',
        'brand-muted-taupe': '#9B948A',
        
        // Extended Palette
        'brand-orange-dark': '#E85C2D',
        'brand-orange-light': '#FF8A5C',
        'brand-black-light': '#1A1A1A',
        'brand-black-lighter': '#222222',
        'brand-white': '#FFFFFF',
        'brand-success': '#22C55E',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'fade-in-right': 'fadeInRight 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
        'scale-in': 'scaleIn 0.4s ease forwards',
        'bounce': 'bounce 2s ease-in-out infinite',
      },
      boxShadow: {
        'brand-sm': '0 2px 10px rgba(0,0,0,0.04)',
        'brand-md': '0 8px 30px rgba(17,17,17,0.12)',
        'brand-orange': '0 4px 15px rgba(255,107,53,0.30)',
        'brand-orange-lg': '0 8px 30px rgba(255,107,53,0.40)',
      },
    },
  },
  plugins: [],
}