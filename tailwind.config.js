/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure your JSX files are included
    './public/index.html',        // Include your HTML files as well
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};