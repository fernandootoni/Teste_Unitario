export default {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/useCases/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: "babel",
  coverageReporters: [
    'text-summary', 'lcov'
  ],
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
  testEnvironment: "node",
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$'
};