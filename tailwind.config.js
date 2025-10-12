/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        coal: "#18181b",
        smoke: "#9ca3af",
        paper: "#f5f5f5",
      },
      boxShadow: {
        insetSoft: "inset 0 0 0 2px rgba(255,255,255,0.06)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
