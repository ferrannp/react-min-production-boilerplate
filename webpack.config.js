var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

const PORT = process.env.PORT || 3000;

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },{
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "postcss-loader", "sass?sourceMap"]
    }],
    postcss: function () {
      return [autoprefixer({ browsers: ['last 2 versions'] })];
    }
  }
};
