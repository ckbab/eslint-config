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
    __DEV__: true,
    clearInterval: true,
    clearTimeout: true,
    console: true,
    module: true,
    process: true,
    require: true,
    setInterval: true,
    setTimeout: true,
  },
  env: {
    es6: true,
  },
};
