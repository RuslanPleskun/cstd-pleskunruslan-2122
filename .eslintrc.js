module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': 'module',
  },
  'rules': {
    'max-len': 'off',
    'require-jsdoc': 0,
    'no-unused-vars': 'off',
    'camelcase': 'off',
  },
};
