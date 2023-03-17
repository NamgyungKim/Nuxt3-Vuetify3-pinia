<template>
	<div>
		<h1>about</h1>
		<v-text-field label="Label"></v-text-field>
		<client-only>
			<Calendar locale='ko' :attributes="attributes" />
		</client-only>
	</div>
</template>

<script setup>
import { Calendar } from 'v-calendar';

const attributes = ref([
	{
		highlight: true,
		dates: {
			start: new Date(2022, 10, 7),
			repeat: {
				every: [2, 'weeks'],
				weekdays: 2,
			},
		},
	},
]);
</script>

<style scoped>

</style>