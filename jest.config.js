/* -----------------------------------
 *
 * Jest
 *
 * -------------------------------- */

module.exports = {
  testEnvironment: 'jsdom',
  globals: { __DEV__: true },
  roots: ['<rootDir>'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/tests/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '(.*).d.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 87,
      functions: 100,
      lines: 95,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
