/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        secondary: "#a855f7",
        accent: "#ec4899"
      }
    },
  },
  plugins: [],
};