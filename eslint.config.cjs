module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
  settings: {
    typescript: {
      project: ['tsconfig.json'],
    },
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
    'prettier/prettier': 'error',
  },
};
