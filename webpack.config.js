const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "public/[name][ext]",
    clean: true,
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  optimization: {
    moduleIds: "deterministic",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Freeplan",
      favicon: "./src/img/favicon.ico",
      template: "./src/index.pug",
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackInlineSVGPlugin({
      svgoConfig: [
        {
          removeEmptyAttrs: true
        },
        {
          removeEmptyContainers: true
        },
        {
          removeUselessStrokeAndFill: true
        },
        {
          cleanupAttrs: true 
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.pug$/i,
        loader: "pug-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "variables.scss";`,
            },
          },
        ],
      },
    ],
  },
};