// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all your React files
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // ✅ your custom breakpoint
      },
    },
  },
  plugins: [],
}
