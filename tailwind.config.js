/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffc727",
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", //default all capital or all small check
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}