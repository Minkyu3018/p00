/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 

  ],
  theme: {
    extend: {
      colors: {
        //스벅
        'sb-03': '#f9f9f9',
        'sb-02': '#1e3932',
        'sb-01': '#d4e9e2',
        //올리브영
        'oy-01': '#a6cd48',
        'oy-02': '#e7c5e6',
        'oy-03': '#dee28b',
        'oy-04': '#c4e2e4',
        'oy-05': '#ebd6b9',
        'oy-06': '#eddbdb',

      }
      

    },
  },
  plugins: [],
}

