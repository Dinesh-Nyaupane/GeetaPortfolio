/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        navy: "#001F3F",
        darkRed: "#8B0000",
        grey: "#6B7280",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
