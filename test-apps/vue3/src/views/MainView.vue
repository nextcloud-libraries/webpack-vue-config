<!--
  - SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
  -->

<script setup>
const style = {
	position: 'absolute',
}
</script>

<template>
	<div :style="style" class="test" role="note">
		This is some dummy content for the app
	</div>
</template>

<style lang="scss" scoped>
html {
	background-color: red;

	:deep(.test) {
		background-color: blue;
	}
}
</style>
