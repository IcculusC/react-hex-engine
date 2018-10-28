module.exports = {
  module: {
    rules: [
      {
        test: /stories\/(.*)\.js$/,
        loaders: [require.resolve("@storybook/addon-storysource/loader")],
        enforce: "pre"
      },
      {
        test: /stories\/(.*)\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
