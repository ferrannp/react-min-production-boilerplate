var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    "./client/index"
  ],
  output: {
    path: path.join(process.env.PWD, 'dist'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.production.template.html',
      filename: 'index.html'
    }),
    
    new ExtractTextPlugin('[name]-[hash].min.css', {
      publicPath: '/',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass")
    },{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }],
    
    postcss: function () {
      return [
        autoprefixer({ browsers: ['last 2 versions'] })
      ];
    }
  }
};