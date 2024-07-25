/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF7C5B",

          secondary: "#599C9E",

          accent: "#473849",

          neutral: "#FCFFFD",

          "base-100": "#FCFFFD",

          info: "#473849",

          success: "#D8F793",

          warning: "#E3C567",

          error: "#F8333C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
