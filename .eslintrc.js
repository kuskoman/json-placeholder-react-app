module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    "testing-library/no-render-in-setup": "off",
    "testing-library/no-wait-for-multiple-assertions": "off",
    "prefer-const": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "no-unused-vars": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
