module.exports = {
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   parserOptions: {
      project: './tsconfig.json',
   },
   rules: {
      '@typescript-eslint/no-unsafe-return': 'error',
   },
};
