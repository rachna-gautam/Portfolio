/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fef7f3',
          100: '#feeee6',
          200: '#fdd9cc',
          300: '#fbbea8',
          400: '#f79574',
          500: '#F97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'pulse': 'pulse 3s ease-in-out infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translate3d(0,0,0)'
          },
          '40%, 43%': {
            transform: 'translate3d(0, -30px, 0)'
          },
          '70%': {
            transform: 'translate3d(0, -15px, 0)'
          },
          '90%': {
            transform: 'translate3d(0, -4px, 0)'
          }
        }
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      }
    },
  },
  plugins: [],
};