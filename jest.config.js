module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Generate coverage reports in the 'coverage' directory
  collectCoverage: true,
  coverageDirectory: 'coverage',
  // Configure a JUnit reporter to create test results for artifact upload
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-results', outputName: 'junit.xml' }],
  ],
};
