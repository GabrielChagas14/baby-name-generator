/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    //"./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    screens: {
      'tablet': '682px',
    },
    extend: {
      fontFamily: {
        'sans': ['sans-serif', 'Arial'],
      },
      colors: {
        'blue': '#1B3C8A',
        'pink': '#FFEEEC',
        'dark-pink':'#F95759'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      width: {
        '28pc': '28%', 
      },
    },
  },
  plugins: [],
}
