/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primary: ["#475467"],
        secondary: ["#667085"],
        features_borders: ["#e63f3a80"],
        features_content: ["#E63F3A"],
        features_borders_sm: ["#E9D7FE"],
        headings: ["#101828"],
        button_red: ["#E63F3A"],
        button_purple: ["#743de2"],
        nav_dropdown: ["#fbfbfb"],
        background_secondary: ["#F9FAFB"],
        footer_new_resource: ["#ABEFC6"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        flicker: "flicker 0.15s",
      },
    },
  },
  plugins: [],
};
