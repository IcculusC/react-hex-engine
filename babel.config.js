module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-async-to-generator"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};
