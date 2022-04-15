module.exports = {
  globals: {
    FormData: true,
    console: true,
    navigator: true,
    setTimeout: true,
    setInterval: true,
    clearTimeout: true,
    clearInterval: true,
    require: true,
    __DEV__: true,
  },
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "no-console": "off",
    "no-case-declarations": "off",
  },
  parser: "babel-eslint",
  extends: ["prettier", "eslint:recommended", "plugin:react/recommended"],
  plugins: ["prettier"],
  env: {
    es6: true,
  },
};
