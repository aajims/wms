module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'adenvt'
  ],
  globals: {
    $: true,
  },
  overrides: [
    {
      files: ['pages/**/*.vue', 'layouts/**/*.vue'],
      rules: { 'unicorn/filename-case': ['error', { case: 'camelCase' }] },
    },
    {
      files: ['components/**/*.vue', 'components/*.vue', 'layouts/*.vue'],
      rules: { 'unicorn/filename-case': ['error', { case: 'kebabCase' }] },
    }
  ]
}
