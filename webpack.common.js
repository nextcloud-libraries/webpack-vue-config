const path = require('path')
const webpack = require('webpack')

const StyleLintPlugin = require('stylelint-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const appName = JSON.stringify(process.env.npm_package_name)
const appVersion = JSON.stringify(process.env.npm_package_version)
console.info('Building', appName, appVersion, '\n')

module.exports = {
	entry: {
		main: path.resolve(path.join('src', 'main.js')),
	},
	output: {
		path: path.resolve('./js'),
		publicPath: '/js/',
		filename: `${appName}-[name].js?v=[contenthash]`,
		chunkFilename: `${appName}-[name].js?v=[contenthash]`,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(js|vue)$/,
				use: 'eslint-loader',
				exclude: /node_modules/,
				enforce: 'pre',
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new StyleLintPlugin({
			files: 'src/**/*.{css,scss,vue}',
		}),

		// Make appName & appVersion available as a constant
		new webpack.DefinePlugin({ appName }),
		new webpack.DefinePlugin({ appVersion }),
	],
	resolve: {
		extensions: ['*', '.js', '.vue'],
		symlinks: false,
	},
}
