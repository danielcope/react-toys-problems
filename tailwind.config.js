module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        lsd: "lsd 8s ease-in-out infinite",
      },
      keyframes: {
        lsd: {
          "0%": {
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            filter: "hue-rotate(-80deg)",
          },
          "100%": {
            filter: "hue-rotate(0deg)",
          },
        },
      },
    },
    minHeight: {
      400: "400px",
      "9/10": "90%",
    },
    boxShadow: {
      "3xl": "1px 3.5px 15px 2px #a3a3a362",
      card: "1px 3.5px 15px 2px #a3a3a362",
      cardDark: "2px 2px 15px 5px #1d1a1a2d",
      inner: "inset 0.5px 0.5px 3px 0.5px rgb(175, 175, 175)",
      button: "0px 1px 5px 1px rgba(49, 48, 48, 0.288)",
      nav: "2px 2px 15px 5px rgba(0, 0, 0, 0.705)",
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
      black: {
        200: "#111111ef",
      },
    },
  },
  plugins: [],
};
