// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Urbanist", "Arial", "sans-serif"],
      // Add more font families here
      serif: ["Georgia", "Times New Roman", "serif"],
      mono: ["Oswald", "monospace"],
      handwriting: ["'Comic Sans MS'", "cursive"],
      custom: ["'YourCustomFont', sans-serif"],
    },
    extend: {
      colors: {
        graylight: "#e5e5e5",
        cyanlight: "#caf0f8",
        orange: "#fca311",
        cyan: "#48cae4",
        black: {
          DEFAULT: "#000", // Default black
          dark: "#333", // Darker shade of black
          darker: "#1a1a1a", // Even darker shade of black
          light: "#666", // Lighter shade of black
          lighter: "#999", // Even lighter shade of black
        },
        backg: "#f7e1d3",
      },
    },
  },
  plugins: [],
};