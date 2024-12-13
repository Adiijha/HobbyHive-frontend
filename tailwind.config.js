/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bnt': ['BNT', 'big-noodle-titling'],
        'mon' : ['Monigue', 'monigue'],
        'awe' : ['Awesome', 'awesome'],
      },
      colors:{
        'somig':'#ADE8E6',
        'brco':'#FF6F61',
        'mutel':'#2C7A7B',
        'warber':'#FFB703',
        'beige':'#F8F9FA',
        'chgrey':'#343A40',
        'cogrey':'#6C757D',
        'chblack':'#212529',
        'mugrbl':'#343A40',

      }
    },
  },
  plugins: [],
}