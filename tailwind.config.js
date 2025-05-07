// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}
