import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#033a16', // Color.fromARGB(255, 3, 58, 22)
        dark_primary: '#022b10',
        'on-primary': '#f5eddd', // Color.fromARGB(255, 245, 237, 221)
        secondary: '#f5eddd', // Color.fromARGB(255, 245, 237, 221)
        'on-secondary': '#033a16', // Color.fromARGB(255, 3, 58, 22)
        tertiary: '#462f21', // Color.fromARGB(255, 70, 47, 33)
        'on-tertiary': '#f5eddd', // Color.fromARGB(255, 245, 237, 221)
        'surface-bright': 'rgba(158, 158, 158, 0.5)', // Color.fromARGB(125, 158, 158, 158)
        surface: '#f5eddd', // Color.fromARGB(255, 245, 237, 221)
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
