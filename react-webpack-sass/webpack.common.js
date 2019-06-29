const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'assets',
        to: 'assets',
      },
    ]),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  output: {
    path: `${__dirname}/public`,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets'),
      components: path.resolve(__dirname, 'components'),
      icons: path.resolve(__dirname, 'icons'),
      themes: path.resolve(__dirname, 'themes'),
      utils: path.resolve(__dirname, 'utils'),
    },
  },
};
