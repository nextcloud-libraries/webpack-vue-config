/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import Vue from 'vue'
import MainView from './views/MainView.vue'

new Vue({
	el: '#content',
	name: 'AppRoot',
	render: h => h(MainView),
})
