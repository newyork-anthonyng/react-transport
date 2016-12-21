const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './lib/Transport.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};
