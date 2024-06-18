module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh','react','jest'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['babel.config.cjs'],
      env: {
        node: true,
      },
    },
    {
      files: ['jest.config.cjs'],
      env: {
        node: true,
      },
    },
    {
      files: ['fileMock.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['**/*.test.js'], // Apply the following settings to test files
      env: {
        jest: true // Add Jest environment
      },
      rules: {
        // Any additional rules specific to test files
      }
    }
  ],
}
