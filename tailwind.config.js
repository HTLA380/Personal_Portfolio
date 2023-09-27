/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "flat-black": "#0a0a0a",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        pink: "#c5a0a0",
        "light-blue": "#8f8bb4",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-pink": "linear-gradient(to right, #CB356B, #BD3F32)",

        "gradient-darkblue": "linear-gradient(81deg, #1e2646, #010026)",

        "gradient-lightGreen": "linear-gradient(43deg, #ff00cc, #333399)",

        "gradient-lightblue":
          "linear-gradient(to bottom, #010026, #1e2646, #010026)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
        righteous: ["Righteous", "cursive"],
        genos: ["Genos", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
    screens: {
      xxs: "420px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "960px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
