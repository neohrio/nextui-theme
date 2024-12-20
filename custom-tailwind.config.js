const { nextui } = require('@nextui-org/theme/plugin');
const theme = require('./theme.json'); // Adjust path if needed

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.storybook/welcome.mdx",
    "../components/*/src/**/*.{js,jsx,ts,tsx}",
    "../components/*/stories/**/*.{js,jsx,ts,tsx}",
    "../core/theme/src/components/**/*.{js,jsx,ts,tsx}",
    "../core/theme/src/utils/**/*.{js,jsx,ts,tsx}",
    "../core/theme/stories/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: "light",
      themes: {
        "light": theme
      },
    }),
  ],
};
