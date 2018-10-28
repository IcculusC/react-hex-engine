module.exports = {
  collectCoverageFrom: ["src/**/*.js"],
  setupFiles: ["<rootDir>/test/setupTests.js"],
  testMatch: ["<rootDir>/test/src/**/*.js"],
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  moduleFileExtensions: ["js"],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        outputPath: "./test/report.html",
        pageTitle: "React Hex Engine"
      }
    ]
  ]
};
