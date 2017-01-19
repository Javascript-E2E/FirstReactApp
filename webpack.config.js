const webpack = require('webpack')

var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
//    devServer: {
//       inline: true,
//       port: 8080
//    },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },

   plugins: [
       new webpack.optimize.DedupePlugin(),
       new webpack.optimize.UglifyJsPlugin({
           minimize : true,
           compress : {
               warnings : false
           }
       }),

       new webpack.DefinePlugin({
           'process.env' : {
               'NODE_ENV': JSON.stringify('production')
           }
       })
   ]
}

module.exports = config;