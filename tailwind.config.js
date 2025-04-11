/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",     // Roxo escuro
        secondary: "#a855f7",   // Roxo claro
        accent: "#ec4899",      // Rosa vibrante
        pink: "#f472b6",        // Rosa claro personalizado
        rose: "#f43f5e",        // Alternativa vibrante
        neutral: "#f3f4f6",     // Fundo claro
      },
    },
  },
  plugins: [],
};
