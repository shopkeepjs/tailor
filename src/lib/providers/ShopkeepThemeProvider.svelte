<script lang="ts">
	import { colorStore } from '../themes';
	export let theme = 'purple';
	export let font = 'Montserrat';

	const setTheme = (): string => {
		switch (theme) {
			case 'purple':
				colorStore.set({ ...$colorStore, prime: $colorStore.purple, complementary: $colorStore.green });
			default:
				return '';
		}
	};

	setTheme();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=${font}:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div id="shopkeep-theme-provider"><slot /></div>

<style>
	#shopkeep-theme-provider {
		font-family: 'Montserrat', sans-serif;
	}
</style>
