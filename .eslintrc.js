module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "@nuxtjs/eslint-config-typescript"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    "no-console": "off",
    "vue/no-unused-components": ["warn"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "vue/component-definition-name-casing": ["error", "kebab-case"],
    "vue/multi-word-component-names": "off",
    "no-useless-constructor": "off",
    "no-useless-catch": ["warn"],
    "@typescript-eslint/no-empty-interface": "off"
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
      }
    }
  ]
}
