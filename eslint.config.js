module.exports = [
  {
    ignores: [
      'node_modules/**',
      'eslint.config.js',
      'package-lock.json',
      '*.config.js'
    ]
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        alert: 'readonly',
        prompt: 'readonly',
        confirm: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'error'
    }
  }
];