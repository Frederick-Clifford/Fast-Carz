/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      colors: {
        "primary-color": "#4f46e5",
        "primary-color-dark": "#3730a3"
      },

      fontFamily: {
        "lilita": ["Lilita One", "sans-serif"],
        "oleo-script": ["Oleo Script", "system-ui"],
        "kalam": ["Kalam", "cursive"],
        "crimson-pro": ["Crimson Pro", "serif"]
      }

    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }

  },

  plugins: [],
}