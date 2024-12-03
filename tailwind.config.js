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
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' }
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' }
      },

      'caret-blink': {
        '0%,70%,100%': { opacity: '1' },
        '20%,50%': { opacity: '0' }
      },
      buttonheartbeat: {
        '0%': {
          'box-shadow': '0 0 0 0 theme("colors.gray.500")',
          transform: 'scale(1)'
        },
        '50%': {
          'box-shadow': '0 0 0 7px theme("colors.gray.500/0")',
          transform: 'scale(1.05)'
        },
        '100%': {
          'box-shadow': '0 0 0 0 theme("colors.gray.500/0")',
          transform: 'scale(1)'
        }
      }
    },
    animation: {
      buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'caret-blink': 'caret-blink 1.25s ease-out infinite'
    }
  
  },
  plugins: [],
};
