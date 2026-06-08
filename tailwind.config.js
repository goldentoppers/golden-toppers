javascript;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        // This links your Google Fonts to Tailwind classes
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // Define clean, muted dark colors instead of extension-generated mud grays
        studioDark: {
          surface: "#1c1917", // Elegant stone-900 background slate
          card: "#262220", // Slightly lighter card container backing
          inkMuted: "#78716c", // Perfect, high-contrast accessible gray for inactive text
        },
      },
    },
  },
  plugins: [],
};
