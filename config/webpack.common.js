const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const envPath = path.resolve(__dirname, ".env");
const envVars = require("dotenv").config({ path: envPath }).parsed || {};
// Webpack configuration
module.exports = {
  stats: { children: true },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "main.bundle-[hash].js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
      filename: "index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin('public/assets/icons/yandrydev.png') 
  ],

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/assets/pdf/",
            },
          },
        ],
      },
      {
        test: /\.s?css$/, // archivos .css o .scss
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "public/assets/img/[hash].[ext]" },
          },
        ],
      },
    ],
  },
};
