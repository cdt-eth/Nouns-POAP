module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "nouns-bg-blue": "#3E64FF",
        "nouns-bg-grey": "#F2F2F2",
        "nouns-blue": "#002AFF",
        "nouns-grey": "#7A7A7A",
        "nouns-yellow": "#FDF45F",
        "nouns-darkblue": "#1F1D28",
      },
    },
    screens: {
      xs: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
