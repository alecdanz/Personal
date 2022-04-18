module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        night: "#22252D",
        overcast: "#414140",
        cloudy: "#B5B4AE",
        "cloudy-white": "#76756D",
        cream: "#ECEBE2",
        clear: "#F5F5F5",
        orange: "#ff7a00",
        magenta: "#ff00e5",
        yellow: "#ffe500",
        cyan: "#00f0ff",
      },
      fontSize: {
        big: ["40px", "60px"],
        regular: ["24px", "36px"],
        medium: ["20px", "30px"],
        paragraph: ["16px", "24px"],
      },
    },
  },
  plugins: [],
};