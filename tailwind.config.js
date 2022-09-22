/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7fcc41",

          "secondary": "#2fcec1",

          "accent": "#f7adef",

          "neutral": "#1F1B22",

          "base-100": "#F8FAFC",

          "info": "#92CBED",

          "success": "#157F45",

          "warning": "#FBC94B",

          "error": "#F9230B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};