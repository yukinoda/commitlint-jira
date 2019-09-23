module.exports = {
  collectCoverageFrom: [
    'packages/**/*.(ts)',
    '!packages/commitlint-jira-e2e-tests/**/*.test.(ts)',
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 59,
      functions: 100,
      lines: 90,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/packages/commitlint-jira-e2e-tests/'],
  preset: 'ts-jest',
}
