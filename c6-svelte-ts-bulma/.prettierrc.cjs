module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  useTabs: false,
  trailingComma: 'all',
  printWidth: 120,
  proseWrap: 'preserve',
  arrowParens: 'avoid',
  requirePragma: false,
  // pnpm対応
  plugins: ['./node_modules/prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' },
    },
  ],
}
