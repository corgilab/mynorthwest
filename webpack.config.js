const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{ 
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: { 
					loader: 'babel-loader'
				},
			}
		]
	},
	plugins: [htmlPlugin]
};