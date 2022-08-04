<script lang="ts">
	import { onMount } from 'svelte';

	import { colorStore, darkOrLightMode } from '../store';
	export let theme: 'purple' = 'purple';
	export let font = 'Montserrat';
	export let mode: 'dark' | 'light';

	const setTheme = (): void => {
		switch (theme) {
			case 'purple':
				colorStore.set({ ...$colorStore, prime: $colorStore.purple, complementary: $colorStore.green });
				break;
			default:
				break;
		}
	};
	setTheme();

	onMount(async () => {
		mode = mode || window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
	});
	$: darkOrLightMode.set(mode);
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
