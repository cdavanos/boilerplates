const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:import/errors'],
  parser: 'babel-eslint',
  plugins: ['jest', 'react', 'react-hooks', 'prettier'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    strict: 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'no-console': 'off',
  },
  overrides: [
    {
      // withing test files use jest as our modules resolver.
      files: ['*.test.js'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, 'jest.config.js'),
          },
        },
      },
    },
  ],
};