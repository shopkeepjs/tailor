<script lang="ts">
	import purple from '../themes/purple';
	export let theme = 'purple';
	export let font = 'Montserrat';

	const setTheme = () => {
		switch (theme) {
			case 'purple':
				return purple.mediumGradient;
			case 'green':
				return '--primary-100: green';
			default:
				break;
		}
	};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=${font}:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div id="shopkeep-theme-provider" style={setTheme()}><slot /></div>

<style>
	#shopkeep-theme-provider {
		font-family: 'Montserrat', sans-serif;
	}
</style>
