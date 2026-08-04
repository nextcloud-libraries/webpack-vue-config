/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

 module.exports = {
	RULE_CSS: {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	},
	RULE_SCSS: {
		test: /\.scss$/,
		use: [
			'style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						// Sass emits BOM for CSS files with non-ASCII characters in production build by default
						// PostCSS (used in css-loader and Vue SFC compiler) starting from v8.5.24 stops removing BOM
						// Merging these styles keeps BOM in the middle of the file, breaking the first selector of each merged stylesheet
						// Disabling charset prevents breaking styles (a workaround until css-loader is fixed for the new PostCSS)
						// This is safe since the document has "<meta charset="utf-8">" anyway
						charset: false,
					},
				},
			},
		],
	},
	RULE_VUE: {
		test: /\.vue$/,
		loader: 'vue-loader',
	},
	RULE_JS: {
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
	},
	RULE_TS: {
		test: /\.tsx?$/,
		use: [
			'babel-loader',
			'ts-loader',
		],
		exclude: /node_modules/,
	},
	RULE_ASSETS: {
		test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/,
		type: 'asset/inline',
	},
}
