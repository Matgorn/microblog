const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: { minimize: true }
      }]
    }, {
      test: /\.js$/,
      exclude: /node-modules/,
      use: {
        loader: 'babel-loader'
      }
    },{
      test: /\.json$/,
      loader: 'json5-loader',
      options: {
        esModule: true
      },
      type: 'javascript/auto'
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: {
        loader: 'file-loader'
      }
    }],
  },
  plugins: [new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
  })]
};