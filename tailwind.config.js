/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'segoe': ['Segoe UI', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      colors: {
        // AI-Themed Microsoft Azure Color Palette
        'azure': {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#0078D4', // Core Azure Blue - primary brand tone
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
          950: '#0A0F1C', // Rich Navy - dark mode background
        },
        'purple': {
          50: '#F3E8FF',
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#A855F7',
          500: '#9333EA', // Vibrant Purple - accents and gradients
          600: '#7C3AED',
          700: '#6B21A8',
          800: '#581C87',
          900: '#3B0764',
          950: '#1E0B36',
        },
        'neon': {
          50: '#F0FDFF',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#38E8F8', // Neon Cyan - glows and animated borders
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        'dark': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#0A0F1C', // Rich Navy - dark mode background
        },
        'light': {
          50: '#F5F9FF', // Ultra-soft light mode background
          100: '#EBF4FF',
          200: '#D6E7FF',
          300: '#B3D1FF',
          400: '#80B3FF',
          500: '#4D94FF',
          600: '#1A75FF',
          700: '#0052CC',
          800: '#003D99',
          900: '#002966',
        },
        // Legacy colors for backward compatibility
        'neon-cyan': '#38E8F8',
        'neon-pink': '#FF007A',
        'dark-gray': '#0A0F1C',
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'subtitle': ['1.75rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'code': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '256': '64rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in': 'fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-gentle': 'bounceGentle 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blinkCaret 0.75s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(56, 232, 248, 0.5), 0 0 10px rgba(56, 232, 248, 0.3)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(56, 232, 248, 0.8), 0 0 30px rgba(56, 232, 248, 0.6), 0 0 40px rgba(56, 232, 248, 0.4)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        neonPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(56, 232, 248, 0.5), 0 0 10px rgba(56, 232, 248, 0.3), 0 0 15px rgba(56, 232, 248, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(56, 232, 248, 0.8), 0 0 20px rgba(56, 232, 248, 0.6), 0 0 30px rgba(56, 232, 248, 0.4)' 
          },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-10px) translateX(5px) rotate(90deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(0px) rotate(180deg)' 
          },
          '75%': { 
            transform: 'translateY(-10px) translateX(-5px) rotate(270deg)' 
          },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blinkCaret: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#38E8F8' },
        },
      },
      textShadow: {
        'neon': '0 0 10px rgba(56, 232, 248, 0.8), 0 0 20px rgba(56, 232, 248, 0.6)',
        'azure': '0 0 10px rgba(0, 120, 212, 0.8), 0 0 20px rgba(0, 120, 212, 0.6)',
        'purple': '0 0 10px rgba(147, 51, 234, 0.8), 0 0 20px rgba(147, 51, 234, 0.6)',
        'subtle': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(56, 232, 248, 0.3), 0 0 40px rgba(56, 232, 248, 0.2)',
        'azure': '0 0 20px rgba(0, 120, 212, 0.3), 0 0 40px rgba(0, 120, 212, 0.2)',
        'purple': '0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-glow': 'inset 0 0 20px rgba(56, 232, 248, 0.1)',
      },
      gradientColorStops: {
        'azure-start': '#0078D4',
        'azure-end': '#38E8F8',
        'purple-start': '#9333EA',
        'purple-end': '#C084FC',
        'neon-start': '#38E8F8',
        'neon-end': '#2DD4BF',
        'dark-start': '#0A0F1C',
        'dark-end': '#1E293B',
        'light-start': '#F5F9FF',
        'light-end': '#EBF4FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, #0078D4 0%, #9333EA 25%, #38E8F8 50%, #9333EA 75%, #0078D4 100%)',
        'neural-pattern': 'radial-gradient(circle at 25% 25%, rgba(56, 232, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
      transitionProperty: {
        'all': 'all',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
        'filter': 'filter',
        'backdrop': 'backdrop-filter',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 