const path = require('path');

module.exports = {
  setupFilesAfterEnv: [path.join(__dirname, './test.setup.js')],
  moduleDirectories: ['node_modules'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/icons/**/*.js',
    '!src/**/index.{js,jsx}',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
