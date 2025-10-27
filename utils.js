/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Get package version by requiring its package.json
 *
 * @param {string} package - Module name to require the package.json from
 * @return {string} Package version from its package.json
 */
function getPackageVersion(package) {
	try {
		return require(package + '/package.json').version
	} catch {
		return undefined
	}
}

/**
 * Get installed Vue version
 * 
 * @return {2 | 3} Vue version (2 or 3)
 */
function getVueVersion() {
	const vueVersion = getPackageVersion('vue')
	if (vueVersion) {
		if (vueVersion.startsWith('3.')) {
			return 3
		}
		if (vueVersion.startsWith('2.7')) {
			return 2
		}
		if (vueVersion.startsWith('2.')) {
			throw new Error('Vue < 2.7 is not supported. Please upgrade to Vue 2.7.x or Vue 3.x.')
		}
		throw new Error(`Unexpected Vue version: ${vueVersion}. This package only supports Vue 2.7.x and Vue 3.x.`)
	}
	throw new Error('Vue is not installed. Please install Vue 2.7.x or Vue 3.x.')
}

module.exports = {
	getPackageVersion,
	getVueVersion,
}
