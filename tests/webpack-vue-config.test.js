/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const fs = require('node:fs/promises')
const { test, after, before } = require('node:test')
const assert = require('node:assert')
const { execSync } = require('node:child_process')
const { resolve, join } = require('node:path')
const { version } = require('../package.json')

const testAppsPath = resolve(__dirname, '../test-apps/')
const tempPath = resolve(__dirname, '../temp/')

before(async () => {
	// Just in case, remove node_modules from the test apps
	await fs.rm(join(testAppsPath, 'vue2/node_modules'), { recursive: true, force: true })
	await fs.rm(join(testAppsPath, 'vue2--wrong-vue-loader/node_modules'), { recursive: true, force: true })
	await fs.rm(join(testAppsPath, 'vue3/node_modules'), { recursive: true, force: true })
	// Copy the test apps to a temp directory
	await fs.cp(testAppsPath, tempPath, { recursive: true, force: true })
	// Prepare the package
	execSync('npm pack', { stdio: 'inherit' })
})

test('Vue 2 app install and build', () => {
	const cwd = join(tempPath, 'vue2')
	execSync(`npm i -D ../../nextcloud-webpack-vue-config-${version}.tgz`, { cwd, stdio: 'inherit' })
	execSync('npm ci', { cwd, stdio: 'inherit' })
	execSync('npm run build', { cwd, stdio: 'inherit' })
})

test('Vue 3 app install and build', () => {
	const cwd = join(tempPath, 'vue3')
	execSync(`npm i -D ../../nextcloud-webpack-vue-config-${version}.tgz`, { cwd, stdio: 'inherit' })
	execSync('npm ci', { cwd, stdio: 'inherit' })
	execSync('npm run build', { cwd, stdio: 'inherit' })
})

test('Vue 2 app without vue-loader@legacy installed fails with a useful error message', () => {
	const cwd = join(tempPath, 'vue2--wrong-vue-loader')
	assert.throws(
		() => execSync(`npm i -D ../../nextcloud-webpack-vue-config-${version}.tgz`, { cwd, stdio: 'pipe' }),
		(error) => error.stderr.includes('npm install --save-dev vue-loader@legacy')
	)
})

after(async () => {
	await fs.rm(tempPath, { recursive: true, force: true })
	await fs.rm(resolve(__dirname, `../nextcloud-webpack-vue-config-${version}.tgz`))
})
