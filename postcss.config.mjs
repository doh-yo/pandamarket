module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "focus-within-pseudo-class": false,
      },
    },
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-global-import": {},
    "postcss-custom-properties": {},
  },
};
