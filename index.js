const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ matchUtilities, theme, addVariant }) {
    matchUtilities(
      {
        "animation-delay": (value) => ({
          animationDelay: value,
        }),
      },
      { values: theme("animationDelay") }
    );
  },
  {
    theme: {
      extend: {
        animation: {
          "fade-in": "fade-in 0.5s ease-in forwards",
        },
        keyframes: {
          "fade-in": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
      },
      animationDelay: {
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
    },
    variants: ["typically"],
  }
);
