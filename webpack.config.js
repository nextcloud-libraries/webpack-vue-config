/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const path = require('path')
const webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const appName = process.env.npm_package_name
const appVersion = process.env.npm_package_version
const buildMode = process.env.NODE_ENV
const isDev = buildMode === 'development'
console.info('Building', appName, appVersion, '\n')

const rules = require('./rules')

module.exports = {
	target: 'web',
	mode: buildMode,
	devtool: isDev ? 'cheap-source-map' : 'source-map',

	entry: {
		main: path.resolve(path.join('src', 'main.js')),
	},
	output: {
		path: path.resolve('./js'),
		publicPath: path.join('/apps/', appName, '/js/'),

		// Output file names
		filename: `${appName}-[name].js?v=[contenthash]`,
		chunkFilename: `${appName}-[name].js?v=[contenthash]`,

		// Clean output before each build
		clean: true,

		// Make sure sourcemaps have a proper path and do not
		// leak local paths https://github.com/webpack/webpack/issues/3603
		devtoolNamespace: appName,
		devtoolModuleFilenameTemplate(info) {
			const rootDir = process.cwd()
			const rel = path.relative(rootDir, info.absoluteResourcePath)
			return `webpack:///${appName}/${rel}`
		},
	},

	devServer: {
		hot: true,
		host: '127.0.0.1',
		port: 3000,
		client: {
			overlay: false,
		},
		devMiddleware: {
			writeToDisk: true,
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},

	optimization: {
		chunkIds: 'named',
		splitChunks: {
			automaticNameDelimiter: '-',
		},
		minimize: !isDev,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false,
					}
				},
				extractComments: true,
			}),
		],
	},

	module: {
		rules: Object.values(rules),
	},

	plugins: [
		new VueLoaderPlugin(),

		// Make sure we auto-inject node polyfills on demand
		// https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed
		new NodePolyfillPlugin({
			additionalAliases: ['process'],
		}),

		new webpack.DefinePlugin({ 
			// Make appName & appVersion available as a constant
			appName: JSON.stringify(appName),
			appVersion: JSON.stringify(appVersion),
			// Vue compile time flags
			// See: https://vuejs.org/api/compile-time-flags.html#compile-time-flags
			// See: https://github.com/vuejs/core/blob/v3.5.24/packages/vue/README.md#bundler-build-feature-flags
			// > The build will work without configuring these flags,
			// > however it is strongly recommended to properly configure them in order to get proper tree-shaking in the final bundle
			// Unlike Vite plugin, vue-loader does not do this automatically for Webpack
			// Although documentation says, it is optional, sometimes it breaks with:
			// ReferenceError: __VUE_PROD_DEVTOOLS__ is not defined
			__VUE_OPTIONS_API__: JSON.parse(process.env.__VUE_OPTIONS_API__ ?? 'true'),
			__VUE_PROD_DEVTOOLS__: JSON.parse(process.env.__VUE_PROD_DEVTOOLS__ ?? 'false'),
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.parse(process.env.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ ?? 'false'),
		}),

		// @nextcloud/moment since v1.3.0 uses `moment/min/moment-with-locales.js`
		// Which works only in Node.js and is not compatible with Webpack bundling
		// It has an unused function `localLocale` that requires locales by invalid relative path `./locale`
		// Though it is not used, Webpack tries to resolve it with `require.context` and fails
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.[/\\]locale$/,
			contextRegExp: /moment[/\\]min$/,
		}),
	],

	resolve: {
		extensions: ['*', '.ts', '.js', '.vue'],
	},
}
