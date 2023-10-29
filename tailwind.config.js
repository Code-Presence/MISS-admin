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
        'border-gray': '#c4c4c460',
        'background': '#f5f3f4',
        'beauty-green': '#02AF7B',
        'beauty-green-dark': '#55AE64',
        'beauty-green-light': '#87DD95',
        'beauty-purple': '#7B69D5',
        'beauty-purple-light': '#CAC3EE',
      },
      textColor: {
        'beauty-purple': '#2A234C',
        
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    }
    },
  },
  plugins: [],
})

