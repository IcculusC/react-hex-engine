module.exports = {
  collectCoverageFrom: ["src/**/*.js"],
  setupFiles: ["<rootDir>/test/setupTests.js"],
  testMatch: [
    "<rootDir>/test/**/*.js"
  ],
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],

  moduleFileExtensions: [
    "js",
  ]
};
