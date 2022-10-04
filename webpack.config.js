const path = require("path")

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./public/Controllers/worldController.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
  },
}
