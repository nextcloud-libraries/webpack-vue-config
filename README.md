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
		"build": "NODE_ENV=production webpack --progress --hide-modules --config webpack.js",
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
