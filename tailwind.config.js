/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind is not workning when using below line
  // content: ["./app", "./components/**/*.{js,jsx,ts,tsx}"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}