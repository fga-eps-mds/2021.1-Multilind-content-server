/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverage: true,
  collectCoverageFrom: ["src/models/**/*.js"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  testMatch: ["**/tests/**/index.spec.js"],
};
