/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Professional blue palette
        brand: { DEFAULT: '#1d4ed8', dark: '#1e3a8a' }
      },
      boxShadow: { soft: '0 12px 32px rgba(37,99,235,0.12)' },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: []
};
