module.exports = {
  hooks: {
    "pre-commit": "yarn test && yarn lint"
  }
};
