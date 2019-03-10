const path = require('path')

module.exports = {
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
         test: /\.scss$/,
         use: [{
           loader: 'style-loader'
         }, {
           loader: 'css-loader'
         }, {
           loader: 'sass-loader'
         }]
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

