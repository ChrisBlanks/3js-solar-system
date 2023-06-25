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
        title: 'Solar System'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: "assets/textures/[name][ext]"
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