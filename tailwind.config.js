/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#eef6fb',
          100: '#d5e8f5',
          200: '#a7d0ea',
          300: '#6fb2db',
          400: '#3f90c7',
          500: '#1c74b1',
          600: '#145d92',
          700: '#114b74',
          800: '#123f60',
          900: '#10344f',
        },
        sand: {
          50: '#fcfaf5',
          100: '#f6f0e3',
          200: '#efe1c7',
          300: '#e2cba4',
          400: '#d2b27a',
          500: '#c39a56',
          600: '#aa7f3a',
          700: '#8a6430',
          800: '#6f512a',
          900: '#5a4224',
        },
        sage: {
          50: '#f3f7f3',
          100: '#e0ebe1',
          200: '#c3d7c5',
          300: '#9dbf9f',
          400: '#7aa680',
          500: '#5e8d64',
          600: '#4a7350',
          700: '#3c5c42',
          800: '#324a37',
          900: '#2a3d2f',
        },
        ink: {
          50: '#f5f6f7',
          100: '#e2e4e8',
          200: '#c6cad2',
          300: '#9ea4af',
          400: '#787f8c',
          500: '#5c6371',
          600: '#494f5b',
          700: '#3d414b',
          800: '#2a2e36',
          900: '#1f232a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -40px rgba(15, 23, 42, 0.35)',
        card: '0 18px 40px -32px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(17, 75, 116, 0.85), rgba(17, 75, 116, 0.35), rgba(16, 52, 79, 0.9))',
      },
    },
  },
  plugins: [],
}
