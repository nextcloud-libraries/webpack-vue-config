<!--
  - SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
  -->

<template>
	<div :style="style" class="test" role="note">
		This is some dummy content for the app
	</div>
</template>

<script>
export default {
	name: 'MainView',

	data() {
		return {
			style: {
				position: 'absolute',
			},
		}
	},
}
</script>

<style lang="scss" scoped>
html {
	background-color: red;

	:deep(.test) {
		background-color: blue;
	}
}
</style>
