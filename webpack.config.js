const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const PATH_TO_RESOURCES = {
	prod: JSON.stringify('https://mynorthwest.ams3.digitaloceanspaces.com'),
	dev: JSON.stringify('/resources'),
}

const ENV = process.env.NODE_ENV;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
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
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
			favicon: "./favicon.ico"
		}),
		new webpack.DefinePlugin({
			'PATH_TO_RESOURCES': PATH_TO_RESOURCES[ENV],
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	}
};