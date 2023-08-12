module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  reporters: ['default', 'jest-junit'],
  coverageReporters: ['html', 'cobertura'],
  coveragePathIgnorePatterns: ['jest-global-mocks.ts', 'test/mocks']
};
