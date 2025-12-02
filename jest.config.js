module.exports = {
  testEnvironment: "node",
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@app/(.*)$": "<rootDir>/src/application/$1",
    "^@infra/(.*)$": "<rootDir>/src/infrastructure/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!src/infrastructure/**"],
  coverageThreshold: {
    global: {
      lines: 85,
      statements: 85
    }
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setup/jest.setup.js"]
};