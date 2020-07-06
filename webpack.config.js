const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.ts',
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist', 'js'),
    publicPath: '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../index.html',
      hash: true,
    })
  ]
};
