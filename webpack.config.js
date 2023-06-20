const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //development only
  devtool: 'inline-source-map', //development only debugging
  entry: {
    index: './src/index.js',
  }, 
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module :{
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'           
        }
    ]
  }
};