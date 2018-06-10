module.exports = {
  target: "node",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: "babel-loader" }
      }
    ]
  }
};
