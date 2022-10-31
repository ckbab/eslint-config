module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "hooks", "react-hooks"],
  rules: {
    "hooks/sort": [
      "error",
      {
        groups: ["useState", "useCallback", "useEffect"],
      },
    ],
    "react/jsx-sort-props": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
