/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const { getPackageVersion, getVueVersion } = require('../utils.js')
const packageJson = require('../package.json')

const isCompatible = (installed, expected) => expected.match(/\d+/)[0] === installed.match(/\d+/)[0]

const [vueLoaderForVue2, vueLoaderForVue3] = packageJson.peerDependencies['vue-loader'].split('||').map((version) => version.trim())

try {
	const vueVersion = getVueVersion()
	const requiredVueLoaderVersion = vueVersion === 2 ? vueLoaderForVue2 : vueLoaderForVue3
	console.info(`[@nextcloud/webpack-vue-config] Found Vue@${vueVersion}, requires vue-loader@${requiredVueLoaderVersion}`)

	const vueLoaderVersion = getPackageVersion('vue-loader')
	if (!vueLoaderVersion) {
		// Likely an installation not in an npm environment (like nixpkgs)
		// Skip the check. In case of incompatibility, the compilation will fail later anyway
		console.warn(`[@nextcloud/webpack-vue-config] vue-loader is not installed. This is unexpected, skipping compatibility check.`)
		process.exit(0)
	}
	console.info(`[@nextcloud/webpack-vue-config] Found vue-loader@${vueLoaderVersion}`)

	if (isCompatible(vueLoaderVersion, requiredVueLoaderVersion)) {
		console.info(`[@nextcloud/webpack-vue-config] Installed vue-loader@${vueLoaderVersion} is compatible with Vue@${vueVersion}`)
		process.exit(0)
	}

	console.error([
		'',
		'🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻',
		'',
		'  @nextcloud/webpack-vue-config',
		'',
		`  You have "vue-loader@${vueLoaderVersion}" installed incompatible with "Vue ${vueVersion}".`,
		`  You must have "vue-loader@${requiredVueLoaderVersion}" installed.`,
		'',
		'  You can install it via:',
		'',
		`  npm install --save-dev vue-loader${vueVersion === 2 ? '@legacy' : ''}`,
		'',
		'🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺',
		'',
	].join('\n'))
	process.exit(1)
} catch (e) {
	// The purpose of the script is to warn in a simple way about an incompatible vue-loader version
	// If something goes wrong, just skip the check
	// (for example, nixpkgs or other unusual setups might run postinstall when dependencies are not installed as expected by npm)
	// In case of incompatibility, an error will be raised when using the package anyway, just less directly - with compilation errors
	console.warn('[@nextcloud/webpack-vue-config] Error during postinstall check:', e)
	process.exit(0)
}
