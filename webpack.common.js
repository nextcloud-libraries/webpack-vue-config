const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const appName = process.env.npm_package_name
const appVersion = process.env.npm_package_version

module.exports = {
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/js/',
		filename: `${appName}.js`,
		chunkFilename: '[name].js?v=[contenthash]',
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
			{
				test: /\.svg$/,
				// illustrations
				loader: 'svg-inline-loader',
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new StyleLintPlugin(),
		// Make appName & appVersion available as a constant
		new webpack.DefinePlugin({ appName }),
		new webpack.DefinePlugin({ appVersion }),
	],
	resolve: {
		extensions: ['*', '.js', '.vue'],
		symlinks: false,
	},
}
