/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#00f2ea',
        'dark-bg': '#0a0a0a',
      }
    },
  },
  plugins: [],
}