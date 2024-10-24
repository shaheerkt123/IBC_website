// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add your custom theme extensions here
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
      },
      // Add custom spacing, breakpoints, etc.
    },
  },
  plugins: [],
};
