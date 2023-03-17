<template>
    <div>
		<NuxtLayout :name='headerLayout' />
		<NuxtPage />
	</div>
</template>

<script setup>
	const headerLayout = 'header';
</script>