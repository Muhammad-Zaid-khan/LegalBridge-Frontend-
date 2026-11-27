/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Color: Deep Navy Blue (authority, trust, professionalism)
        navy: {
          50: '#F0F4FA',
          100: '#DCE5F2',
          200: '#BCCCE6',
          300: '#8FAAD4',
          400: '#5D82BD',
          500: '#3960A3',
          600: '#264987',
          700: '#1B3668',
          800: '#13274D',
          900: '#0F2342', // Primary Deep Navy
          950: '#09162B', // Deepest Hero/Sidebar Navy
        },
        // Accent Brand Color: Restrained Gold (prestige, legal heritage, highlights)
        gold: {
          50: '#FBF8F1',
          100: '#F5EEDC',
          200: '#EBDAB6',
          300: '#DEC189',
          400: '#CFA65E',
          500: '#C59B47', // Primary Restrained Gold
          600: '#A87E32', // High-contrast Gold for text/hover
          700: '#876228',
          800: '#6E4F24',
          900: '#5B4221',
        },
        // Supporting Soft Blue (Prescripto-inspired clean surface tint)
        softblue: {
          50: '#F5F8FC',
          100: '#EAF0F8',
          200: '#D4E2F2',
          500: '#3B6CB7',
        },
        // Neutral Surface Helpers
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          subtle: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'Noto Naskh Arabic', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 35, 66, 0.06), 0 4px 12px rgba(15, 35, 66, 0.04)',
        'card-hover': '0 10px 28px -6px rgba(15, 35, 66, 0.12), 0 4px 10px -2px rgba(15, 35, 66, 0.05)',
        soft: '0 2px 8px rgba(15, 35, 66, 0.06)',
        gold: '0 4px 14px rgba(197, 155, 71, 0.25)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
};
