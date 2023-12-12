/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "850px",
        },
        medium: {
          min: "1000px"
        }
      }
    },
  },
  plugins: [],
}