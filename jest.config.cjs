module.exports = {
  moduleDirectories: ['./node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom'
}