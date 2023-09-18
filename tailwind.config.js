const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#FF6C44",
      white: '#ffffff',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      text: {
        DEFAULT: "#1F2937",
        light: "#6C7281",
        'green': "#19777A",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },
    },
    extend: {
      minHeight:{
        'card-home-1': "270px",
      },
      minWidth:{
        'card-home-1': "490px",
      },
      width:{
        'button-card-1': "400px",
      },
      boxShadow: {
        'shadow-button': "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}
