/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4.8px 12px 0 rgba(32, 33, 37, .1)",
      },
    },

    screens: {
      sm: "359px",
      

    },
  },
  plugins: [],
};
