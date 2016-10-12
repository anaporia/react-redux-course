const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new DashboardPlugin(),
  ],
};
