module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true
  },

  extends: ['plugin:react/recommended', 'standard'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },

  plugins: ['react', '@typescript-eslint'],

  rules: {
    'no-undef': 'off',
    'space-before-function-paren': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
