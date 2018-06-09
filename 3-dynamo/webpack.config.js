const slsw = require("serverless-webpack");

module.exports = {
  mode: "development",
  entry: slsw.lib.entries,
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
