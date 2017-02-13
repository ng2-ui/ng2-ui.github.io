const webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  resolve: {
    extensions: ['', '.ts', '.js',  '.json', '.css', '.html']
  },
  devtool: 'source-map',
  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/main.ts' // our angular app
  },
  output: {
    path: '.',
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw' },
      {test: /\.json$/, loader: 'json'},
    ]
  },
  plugins: [
    new CommonsChunkPlugin({name: ['vendor', 'polyfills']}),
    new HtmlWebpackPlugin({template: './public/index.html', chunksSortMode: 'dependency'})
  ]
};

if (process.env.NODE_ENV === 'prod') {
  config.output = {
    path: '.',
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  };
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  );
  config.module.loaders.push({
    test: /\.ts$/, loader: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;
