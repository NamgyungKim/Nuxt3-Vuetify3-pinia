<template>
	<div id='aboveNav'>
		<nav>
			<NuxtLink v-if="$route.path !== '/login'" to='/login'>Go To Login</NuxtLink>
			<NuxtLink v-if="$route.path !== '/login/joinUs'" to='/login/joinUs'>Go To JoinUs</NuxtLink>
			<NuxtLink v-if="$route.path !== '/'" to='/'>Go To Index</NuxtLink>
			<NuxtLink v-if="$route.path !== '/about'" to='/about'>Go To About</NuxtLink>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'above',
};
</script>

<style lang='scss'>
%main-display {
	display: flex;
	justify-content: center;
	align-items: center;
}

#aboveNav {
	@extend %main-display;
	flex-direction: column;
}

body {
	@extend %main-display;
	margin: 0;
}

nav {
	@extend %main-display;
	background-color: black;
	width: 100vw;

	& > a {
		text-decoration: none;
		font-weight: bold;
		color: white;
		margin: 10px;

		&:hover {
			color: darken(white, 30%);
		}
	}
}
</style>