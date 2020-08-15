const path = require("path");
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {

  entry: "./src/index.js",
  output: { path: path.join(__dirname, "/dist"), filename: "bundle.js" },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.scss$/,

        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env'), // Path to .env file (this is the default)
    })
  ],
};
