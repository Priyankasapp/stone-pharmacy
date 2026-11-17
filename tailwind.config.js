/** @type {import('tailwindcss').Config} */


const customColors = [
  'charcoal',
  'summer-lime',
  'ice-blue',
  'dark-charcoal',
  'silver',
  'card-blue',
  'chrome-white',
  'reach-blue-green',
  'manganese-blue'
]
const colotTheme = customColors.reduce((acc, color )=>{
  acc[color] = `var(--color-${color})`
  return acc 
}, {})

module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:colotTheme,
      fontFamily:{
        clash:['var(--font-clash-grotesk)', 'sans-serif'],
        poppins:['var(--font-poppins)'],
        acumin:['var(--font-acumin)'],
        nightSerif:['var(--font-night-serif)'],
        proximaNovaAlt:['--font-proxim-alt'],
        
      },
    },
  },
  plugins: [],
}

