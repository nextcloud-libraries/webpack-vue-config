/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import Vue from 'vue'
import MainView from './views/MainView.vue'

// Init vue
export default new Vue({
	el: '#content',
	// eslint-disable-next-line vue/match-component-file-name
	name: 'AppRoot',
	render: h => h(MainView),
})
