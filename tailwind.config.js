
module.exports = {
  mode: "jit",
  content: ["/src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#396DE5",
        secondary: "#F3F3F9",
        gray: "#0E2736",
        darkBlue: "#2C2D60"
      },
    },
  },
  plugins: [],
};

