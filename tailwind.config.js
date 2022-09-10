/** @type {import('tailwindcss').Config} */
module.exports = {
   mode:'jit',
   purge: [
      "./tailwindcss/**/*.html",
      "./tailwindcss/**/*.js",
   ],
  content: ["./tailwindcss/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
         '620px': '38.75rem'
      },
      spacing: {
         '40-c': '40rem'
      }
    },
  },
  plugins: [],
}
