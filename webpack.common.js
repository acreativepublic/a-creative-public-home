const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

plugins: [
     new CleanWebpackPlugin(
),
     new HtmlWebpackPlugin({
       title: 'My killer app'
     })
   ],

entry: {
     app: './src/app.js'
   },

  output: {

    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
 module: {
     rules: [
{
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader'
           }
         ]
       },
 
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
         }
       }
     ]
   }
  }

