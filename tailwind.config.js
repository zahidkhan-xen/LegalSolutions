/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // For headings
        body: ['Poppins', 'sans-serif'],   // For body text
      },
      gridTemplateColumns: { "70/30": "70% 28%" }, // Define columns in the details page
    },
  },
  plugins: [],
};
