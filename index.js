module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: [
    "prettier",
    "react",
    "hooks",
    "react-hooks",
    "sort-destructure-keys",
    "sort-keys-fix",
    "simple-import-sort",
  ],
  rules: {
    "hooks/sort": [
      "error",
      {
        groups: [
          "useReducer",
          "useContext",
          "useState",
          "useRef",
          "useDispatch",
          "useCallback",
          "useEffect",
        ],
      },
    ],
    "no-case-declarations": "off",
    "no-console": "off",
    "prettier/prettier": "error",
    "react/jsx-sort-props": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  env: {
    es6: true,
  },
};
