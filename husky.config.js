module.exports = {
  hooks: {
    "pre-commit": "yarn test && yarn lint",
    "pre-push": "yarn storybook:build"
  }
};
