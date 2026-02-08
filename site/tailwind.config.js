/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./templates/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0f5f3c",
          accent: "#2f8f5b",
          muted: "#dcebe3",
          surface: "#f4f9f6",
          ink: "#0f2d1f",
        },
      },
      fontFamily: {
        sans: ["\"Source Sans 3\"", "system-ui", "sans-serif"],
        display: ["\"Space Grotesk\"", "\"Source Sans 3\"", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
