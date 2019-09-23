module.exports = {
  collectCoverageFrom: [
    'packages/**/*.(ts)',
    '!packages/commitlint-jira-e2e-tests/**/*.test.(ts)',
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 62,
      functions: 92,
      lines: 92,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/packages/commitlint-jira-e2e-tests/'],
  preset: 'ts-jest',
}
