# Webpack vue base config

Use this base config package to cleanup all your complicated setups and rely on automated dependencies updates.

## How-to
:warning: Make sure to have all the peer dependencies installed 

```js
// webpack.js

const webpackConfig = require('@nextcloud/webpack-vue-config')

module.exports = webpackConfig
```

```json
// package.json

...
"scripts": {
		"build": "NODE_ENV=production webpack --progress --config webpack.js",
		"dev": "NODE_ENV=development webpack --progress --config webpack.js",
		"watch": "NODE_ENV=development webpack --progress --watch --config webpack.js",
}
...
```

## Extend with your own configs
Here is an example on how to add your own  config to the base one

```js
// webpack.js

const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('@nextcloud/webpack-vue-config')

const config = {
	entry: {
		'files-action': path.join(__dirname, 'src', 'files_action.js'),
	},
	plugins: [
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
	],
}

module.exports = merge(config, webpackConfig)
```
### Replace existing rule
All the rules are available indiidually on the `@nextcloud/webpack-vue-config/rules` file. You can import them and use the one you want.

If you want to overrride a rule that is already provided by this package, you can use the following to replace it:

```js
// webpack.js

const { merge } = require('webpack-merge')
const webpackConfig = require('@nextcloud/webpack-vue-config')
const webpackRules = require('@nextcloud/webpack-vue-config/rules')

// Filter out js rule
webpackConfig.module.rules = Object.keys(webpackRules)
	.filter(rule => rule !== 'RULE_JS')
	.map(rule => webpackRules[rule])

// Adding our custom js rule
webpackConfig.module.rules.push({
	// vue-plyr uses .mjs file
	test: /\.m?js$/,
	loader: 'babel-loader',
	exclude: BabelLoaderExcludeNodeModulesExcept([
		'@nextcloud/dialogs',
		'@nextcloud/event-bus',
		'camelcase',
		'fast-xml-parser',
		'hot-patcher',
		'semver',
		'vue-plyr',
		'webdav',
		'toastify-js',
	]),
})

module.exports = webpackConfig
```
