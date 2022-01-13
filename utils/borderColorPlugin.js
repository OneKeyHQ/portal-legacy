// eslint-disable-next-line @typescript-eslint/no-var-requires
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = ({ addUtilities, _, theme, variants }) => {
  const extendColors = theme("extends.colors");
  let colors = flattenColorPalette(theme("borderColor"));
  delete colors["default"];

  // Replace or Add custom colors
  if (extendColors) {
    colors = Object.assign(colors, extendColors);
  }

  const colorMap = Object.keys(colors).map((color) => ({
    [`.border-t-${color}`]: { borderTopColor: colors[color] },
    [`.border-r-${color}`]: { borderRightColor: colors[color] },
    [`.border-b-${color}`]: { borderBottomColor: colors[color] },
    [`.border-l-${color}`]: { borderLeftColor: colors[color] },
  }));
  const utilities = Object.assign({}, ...colorMap);

  addUtilities(utilities, variants("borderColor"));
};
