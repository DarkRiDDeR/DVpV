const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const SRC_DIR = path.join(__dirname, "client");
const PUBLIC_DIR = path.join(__dirname, "public");

module.exports = (env, argv) => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    alias: {
      "@": __dirname
    }
  },
  entry: path.join(SRC_DIR, "main.js"),
  module: {
    rules: [

      {
        test: /\.vue$/,
        use: [
          "vue-loader",
          "eslint-loader",
        ],
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader",
          "eslint-loader",
        ]
      },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to `<template lang="pug">` in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // this applies to pug imports inside JavaScript
          {
            use: [
              'html-loader',
              'pug-plain-loader'
            ]
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          argv.mode !== "production"
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ]
  },
  output: {
    path: argv.mode !== "production" ? PUBLIC_DIR : path.join(PUBLIC_DIR, "dist"),
    publicPath: argv.mode !== "production" ?  "" : "/dist/",
    filename: "bundle.js"
  },
  devtool: argv.mode !== "production" ? "eval-cheap-module-source-map" : "source-map",
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIR, "index.pug"),
      filename: "index.html"
    }),
  ],
  devServer: {
    contentBase: SRC_DIR,
    watchContentBase: true,
    port: 8090,
    open: false
  }
});

