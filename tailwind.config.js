module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will make Tailwind scan your src directory for classes
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        reenie: ['"Reenie Beanie"', 'cursive'],
      }
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000608',
      'red': '#6F1A07',
      'green': '#39DFAA'
    }, 
  },
  plugins: [],
};