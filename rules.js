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
		use: ['style-loader', 'css-loader', 'sass-loader'],
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
