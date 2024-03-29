/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "950px",
      },
      colors: {
        primary: {
          scissors: {
            50: "hsla(39, 89%, 49%, 1)",
            100: "hsla(39, 87%, 49%, 1)",
            200: "hsla(39, 86%, 50%, 1)",
            300: "hsla(39, 85%, 50%, 1)",
            400: "hsla(39, 85%, 51%, 1)",
            500: "hsla(40, 85%, 51%, 1)",
            600: "hsla(40, 85%, 52%, 1)",
            700: "hsla(40, 84%, 52%, 1)",
            800: "hsla(40, 84%, 53%, 1)",
            900: "hsla(40, 84%, 53%, 1)",
          },
          paper: {
            50: "hsla(230, 89%, 62%, 1)",
            100: "hsla(230, 89%, 62%, 1)",
            200: "hsla(230, 88%, 63%, 1)",
            300: "hsla(230, 88%, 63%, 1)",
            400: "hsla(230, 88%, 63%, 1)",
            500: "hsla(230, 89%, 64%, 1)",
            600: "hsla(230, 89%, 64%, 1)",
            700: "hsla(230, 89%, 64%, 1)",
            800: "hsla(230, 89%, 65%, 1)",
            900: "hsla(230, 89%, 65%, 1)",
          },
          rock: {
            50: "hsla(349, 71%, 52%, 1)",
            100: "hsla(349, 71%, 53%, 1)",
            200: "hsla(349, 71%, 53%, 1)",
            300: "hsla(349, 71%, 53%, 1)",
            400: "hsla(349, 70%, 54%, 1)",
            500: "hsla(349, 71%, 54%, 1)",
            600: "hsla(349, 71%, 55%, 1)",
            700: "hsla(349, 70%, 55%, 1)",
            800: "hsla(349, 70%, 55%, 1)",
            900: "hsla(349, 70%, 56%, 1)",
          },
        },
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
        background: {
          50: "hsla(214, 47%, 23%, 1)",
          100: "hsla(216, 47%, 22%, 1)",
          200: "hsla(219, 47%, 21%, 1)",
          300: "hsla(219, 48%, 20%, 1)",
          400: "hsla(222, 47%, 19%, 1)",
          500: "hsla(225, 47%, 19%, 1)",
          600: "hsla(229, 47%, 18%, 1)",
          700: "hsla(230, 48%, 17%, 1)",
          800: "hsla(234, 48%, 16%, 1)",
          900: "hsla(238, 48%, 15%, 1)",
        },
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        triangle: "url('/assets/bg-triangle.svg')",
        rock: "url('/assets/icon-rock.svg')",
        paper: "url('/assets/icon-paper.svg')",
        scissors: "url('/assets/icon-scissors.svg')",
      },
    },
  },
  plugins: [],
};
