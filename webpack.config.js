var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/main.ts' // our angular app
  },
  output: {
    path: `build/`,
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'ts',
          'angular2-template-loader',
          'strip-loader?strip[]=debug,strip[]=console.log'
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'app/css', to: 'css' },
      { from: 'app/js', to: 'js' },
      { from: 'app/images', to: 'images' },
      { from: 'app/*.html', to: './' }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new CommonsChunkPlugin({name: ['vendor', 'polyfills']}),
    new HtmlWebpackPlugin({template: './app/index.html', chunksSortMode: 'dependency'})
  ],
  ts: {
    include: ['app/**/*.ts']
  }
};

module.exports = config;
