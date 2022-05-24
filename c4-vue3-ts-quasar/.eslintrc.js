module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended'],

  parserOptions: {
    ecmaVersion: 12,
  },

  plugins: ['vue', '@typescript-eslint'],

  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/singleline-html-element-content-newline': ['warn', { ignores: ['div', 'span', 'footer'] }],
    'vue/multi-word-component-names': 'off',
  },
}
