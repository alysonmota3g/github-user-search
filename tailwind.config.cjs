/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.tsx", "./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        mn: { max: "420px" },
        sm: { max: "640px" },
        md: { max: "768px" },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
