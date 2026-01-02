import antfu from "@antfu/eslint-config";

export default antfu(
  {
    vue: true,
    typescript: true,
    ignores: [
      "**/dist/**",
      "**/dist-ssr/**",
      "**/coverage/**",
      "**/src-tauri/**",
    ],
  },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/one-component-per-file": 0,
      "vue/no-reserved-component-names": 0,
      "vue/no-useless-v-bind": 0,
      "vue/multi-word-component-names": 0,
      "vue/html-self-closing": ["error", {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      }],
    },
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      "pnpm/json-enforce-catalog": 0,
      "symbol-description": 0,
      "no-console": 1,
      "no-tabs": 0,
      "import/first": 0,
      "node/prefer-global/process": 0,
      "style/no-tabs": 0,
      "unused-imports/no-unused-vars": 0,
      "unicorn/no-new-array": 0,
      "import-x/consistent-type-specifier-style": 0,
      "style/quotes": ["error", "double"],
      "style/semi": ["error", "always"],
      "style/quote-props": ["error", "as-needed"],
      "style/member-delimiter-style": ["error", {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      }],
    },
  },
);
