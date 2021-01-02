const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
   },
   module: {
      rules:[
         {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|browser_componenets)/,
            loader: "babel-loader",
            options:{
               presets: [
                  "@babel/env"
               ]
            }
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
               loader: "file-loader"
            }
         },
         {
            test: /\.scss$/,
            use: [
               "style-loader",
               "css-loader",
               "sass-loader"
            ]
         },
         {
            test: /\.html$/,
            use: [{
               loader: "html-loader",
               options: {
                  minimize: true
               }
            }]
         },
      ]
   },
   resolve: {
      extensions:["*" , ".js", ".jsx"]
   },
   devServer:{
      hotOnly: true,
      historyApiFallback: true
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: "src/index.html",
         filename: "index.html",
      }),
      new webpack.HotModuleReplacementPlugin(),
   ]
};