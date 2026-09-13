/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF9',
        ink: '#1E1B1B',
        muted: '#6B6664',
        blush: {
          50: '#FDF3F4',
          100: '#F9D9DE',
          200: '#F4C2CB',
          300: '#F4A6B7',
          400: '#EE93A6',
          500: '#E8899E',
          600: '#DE6E88',
        },
      },
      fontFamily: {
        sans: ['"General Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '28px',
        xl3: '32px',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(30, 27, 27, 0.15)',
        card: '0 10px 40px -12px rgba(30, 27, 27, 0.12)',
      },
    },
  },
  plugins: [],
}
