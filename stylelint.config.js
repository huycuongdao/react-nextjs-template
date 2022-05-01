module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
  ],
  plugins: [
    "stylelint-scss",
  ],
  ignoreFiles: [
    "node_modules/**",
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
  ],
  rules: {
    "string-quotes": "double",
  },
};
