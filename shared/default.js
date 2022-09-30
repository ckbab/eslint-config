module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "prettier"],
  plugins: [
    "prettier",
    "sort-destructure-keys",
    "sort-keys-fix",
    "simple-import-sort",
  ],
  rules: {
    "no-case-declarations": "off",
    "no-console": "off",
    "prettier/prettier": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  env: {
    node: true,
    es6: true,
  },
};
