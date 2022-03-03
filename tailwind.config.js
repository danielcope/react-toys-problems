module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    minHeight: {
      400: "400px",
      "9/10": "90%",
    },
    boxShadow: {
      "3xl": "1px 3.5px 15px 2px #a3a3a362",
      inner: "inset 0.5px 0.5px 3px 0.5px rgb(175, 175, 175)",
      button: "0px 1px 5px 1px rgba(49, 48, 48, 0.288)",
    },
    colors: {
      blue: {
        300: "#577399",
        200: "#bdd5ea",
        100: "#f7f7ff",
      },
      grey: {
        100: "#495867",
      },
      red: {
        100: "#fe5f55",
      },
    },
  },
  plugins: [],
};
