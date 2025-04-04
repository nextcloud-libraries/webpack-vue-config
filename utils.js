/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Require a module, but return undefined if it fails
 *
 * @param {string} name - Module name to require
 * @return {any} Loaded module or undefined if not found
 */
function loadModule(name) {
	try {
		return require(name)
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
	const vue = loadModule('vue')
	if (vue && vue.version) {
		if (vue.version.startsWith('3.')) {
			return 3
		}
		if (vue.version.startsWith('2.7')) {
			return 2
		}
		if (vue.version.startsWith('2.')) {
			throw new Error('Vue < 2.7 is not supported. Please upgrade to Vue 2.7.x or Vue 3.x.')
		}
		throw new Error(`Unexpected Vue version: ${vue.version}. This package only supports Vue 2.7.x and Vue 3.x.`)
	}
	throw new Error('Vue is not installed. Please install Vue 2.7.x or Vue 3.x.')
}

module.exports = {
	loadModule,
	getVueVersion,
}
