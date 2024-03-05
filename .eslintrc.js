/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  ignorePatterns: ['src/@iconify/*.js', 'node_modules', 'dist', '*.d.ts'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
