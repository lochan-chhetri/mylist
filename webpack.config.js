var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('./public/style.css');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
    	filename: 'bundle.js'
	},
	resolve: {
	    modulesDirectories: ['node_modules', 'src'],
	    extensions: ['', '.js']
  	},
  	module: {
  	  loaders: [
  	    {
  	      test: /\.jsx?$/,
  	      exclude: /node_modules/,
  	      loaders: ['babel?presets[]=react,presets[]=es2015']
  	    },
  	    {
  	    	test: /\.scss$/i,
  	    	loader: extractCSS.extract(['css','sass'])
  	    }
  	  ]
  	},
  	plugins: [
  	  new webpack.HotModuleReplacementPlugin(),
  	  new webpack.NoErrorsPlugin(),
  	  extractCSS
  	]
};