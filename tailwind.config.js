/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-gray': '#c4c4c4',
        'background': '#f5f3f4',
        'green': '#02AF7B',
        'purple': '#7B69D5',
        'purple-light': '#CAC3EE',
      },
      textColor: {
        'purple': '#2A234C',
        
      }
    },
  },
  plugins: [],
})

