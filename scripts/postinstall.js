/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const { execSync } = require('node:child_process')
const { loadModule, getVueVersion } = require('../utils.js')
const packageJson = require('../package.json')

const isCompatible = (installed, expected) => expected.match(/\d+/)[0] === installed.match(/\d+/)[0]

const [vueLoaderForVue2, vueLoaderForVue3] = packageJson.peerDependencies['vue-loader'].split('||').map((version) => version.trim())

try {
	const vueVersion = getVueVersion()
	console.info(`[@nextcloud/webpack-vue-config | postinstall] Found Vue@${vueVersion}`)

	const vueLoaderVersion = vueVersion === 2 ? vueLoaderForVue2 : vueLoaderForVue3

	const installedVueLoader = loadModule('vue-loader/package.json').version
	if (installedVueLoader && isCompatible(installedVueLoader, vueLoaderVersion)) {
		console.info(`[@nextcloud/webpack-vue-config | postinstall] Found compatible vue-loader@${installedVueLoader}`)
		process.exit(0)
	} else if (installedVueLoader) {
		console.info(`[@nextcloud/webpack-vue-config | postinstall] Found incompatible vue-loader@${installedVueLoader}. Expected ${vueLoaderVersion}`)
	}
	
	console.info(`[@nextcloud/webpack-vue-config | postinstall] Installing vue-loader@${vueLoaderVersion}`)

	execSync(`npm install --no-save vue-loader@${vueLoaderVersion}`, { stdio: 'inherit', cwd: process.env.INIT_CWD })

	console.info(`[@nextcloud/webpack-vue-config | postinstall] vue-loader${vueLoaderVersion} installed`)
} catch (error) {
	console.error(error.message)
	process.exit(1)
}
