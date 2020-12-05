/* eslint-disable linebreak-style */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/script/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src/script'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          fix: true,
        },
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[hash:7].[name].[ext]',
          outputPath: 'assets/audio',
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[hash:7].[name].[ext]',
          outputPath: 'assets/img',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {outputPath: 'assets/fonts'},
      },
      {
        test: /\.html$/i,
        include: path.resolve(__dirname, './src'),
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src/script'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      cache: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/fav', to: './',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
