const path = require("path")

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "wwwroot", "js"),
    filename: "app.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [],
  },
  plugins: [],
}
