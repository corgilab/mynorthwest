const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const PATH_TO_RESOURCES = {
	prod: JSON.stringify('https://mynorthwest.ams3.digitaloceanspaces.com/fonts/GothamPro-Light.woff'),
	dev: JSON.stringify('/resources'),
}

const ENV = process.env.NODE_ENV;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{ 
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: ['babel-loader']
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.svg$/,
				loader: ['svgo-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new webpack.DefinePlugin({
			'PATH_TO_RESOURCES': PATH_TO_RESOURCES[ENV],
		}),
	]
};