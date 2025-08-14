/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'segoe': ['Segoe UI', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        // Custom color palette
        'azure': {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#0078D4',
          600: '#0063B1',
          700: '#004E8E',
          800: '#00396B',
          900: '#002448',
          950: '#001224',
        },
        'neon': {
          50: '#F0FDFF',
          100: '#E0FBFF',
          200: '#C1F7FF',
          300: '#A2F3FF',
          400: '#83EFFF',
          500: '#38E8F8',
          600: '#2DD4BF',
          700: '#22C0A6',
          800: '#17AC8D',
          900: '#0C9874',
          950: '#01845B',
        },
        'purple': {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#9333EA',
          600: '#7C3AED',
          700: '#6B21A8',
          800: '#581C87',
          900: '#4C1D95',
          950: '#2E1065',
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
          950: '#0A0F1C',
        },
        'light': {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
          600: '#64748B',
          700: '#64748B',
          800: '#475569',
          900: '#334155',
        },
        'red': {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        'green': {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        'orange': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        'blue': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        'emerald': {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        'section': ['3.5rem', { lineHeight: '1.1' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'hero': ['4rem', { lineHeight: '1.1' }],
        'subtitle': ['1.25rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-90': '90vh',
        'screen-95': '95vh',
      },
      height: {
        'screen-90': '90vh',
        'screen-95': '95vh',
      },
      width: {
        'screen-90': '90vw',
        'screen-95': '95vw',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-out': 'scaleOut 0.3s ease-out',
        'neural-float': 'neural-float 8s ease-in-out infinite',
        'neural-pulse': 'neural-pulse 4s ease-in-out infinite',
        'neural-glow': 'neural-glow 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blinkCaret 0.75s step-end infinite',
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
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0' },
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          'from': { transform: 'translateY(-20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          'from': { transform: 'scale(0.9)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          'from': { transform: 'scale(1)', opacity: '1' },
          'to': { transform: 'scale(0.9)', opacity: '0' },
        },
        'neural-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(90deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
          '75%': { transform: 'translateY(-10px) rotate(270deg)' },
        },
        'neural-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(56, 232, 248, 0.3), 0 0 40px rgba(56, 232, 248, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(56, 232, 248, 0.5), 0 0 60px rgba(56, 232, 248, 0.2)' 
          },
        },
        'neural-glow': {
          '0%, 100%': { 
            filter: 'brightness(1) drop-shadow(0 0 10px rgba(56, 232, 248, 0.5))' 
          },
          '50%': { 
            filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(56, 232, 248, 0.8))' 
          },
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
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
      filter: {
        'neural': 'brightness(1.1) contrast(1.1) saturate(1.2)',
      },
      backdropFilter: {
        'neural': 'blur(10px) brightness(1.1)',
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