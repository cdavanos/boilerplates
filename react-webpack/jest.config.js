const path = require('path');

module.exports = {
  setupTestFrameworkScriptFile: path.join(__dirname, 'test.setup.js'),
  moduleDirectories: [
    'node_modules',
    // enables node_modules like import for files in TestHelpers.
    path.join(__dirname, 'src/utilities/TestHelpers'),
  ],
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.fixtures.{js,jsx}',
    '!src/**/index.{js,jsx}',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|jpg|png|woff|eot)$': path.join(
      __dirname,
      'src/utilities/TestHelpers/empty-module.js'
    ),
  },
};
