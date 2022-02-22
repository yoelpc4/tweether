module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: {
    'no-console': 'off',
    'no-control-regex': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
