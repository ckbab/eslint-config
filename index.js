module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["prettier", "eslint:recommended", "plugin:react/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "no-console": "off",
    "no-case-declarations": "off",
  },
  globals: {
    console: true,
    setTimeout: true,
    setInterval: true,
    clearTimeout: true,
    clearInterval: true,
    require: true,
    __DEV__: true,
  },
  env: {
    es6: true,
  },
};
