const common = require("./webpack.common");
const path = require("path");
const { merge } = require("webpack-merge");
const prodConfig = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js", // Nombre único para fragmentos
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // Busca en los módulos de node
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};

module.exports = merge(common, prodConfig);
