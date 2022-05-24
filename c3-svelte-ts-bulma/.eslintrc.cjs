module.exports = {
  root: true,

  env: {
    es2021: true,
    browser: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },

  plugins: ['html', 'svelte3', '@typescript-eslint'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],

  settings: {
    'svelte3/typescript': () => require('typescript'),
  },

  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },

  ignorePatterns: ['*.cjs', 'svelte.config.*', 'vite.config.*'],
}
