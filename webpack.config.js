const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ESLintPlugin = require('eslint-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  return {
    mode: env.production ? "production" : "development",
    target: env.production ? "browserlist" : "web",
    devtool: env.production ? "sorce-map" : "eval-cheap-module-source-map",
    output: {
      assetModuleFilename: "public/[name][ext][query]",
      clean: true,
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
      minimize: argv.mode === "production",
      moduleIds: "named",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Freeplan",
        favicon: "./src/img/favicon.ico",
        template: "./src/index.pug",
      }),
      new ESLintPlugin(),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
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
          test: /\.(ico|png|svg|jpe?g|gif|webp)$/i,
          type: "asset",
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [
            argv.mode === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [["autoprefixer"]],
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
};