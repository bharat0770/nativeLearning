/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

//   presets: [require('nativewind/preset')],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
