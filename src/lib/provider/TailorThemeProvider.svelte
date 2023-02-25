<script lang="ts">
	import { onMount } from 'svelte';
	import { colorStore, polarity } from '../store';
	import type { ColorStrings } from '../design/color';

	export let theme: ColorStrings = 'purple';
	export let font = 'Montserrat';
	export let mode: 'dark' | 'light' | null = null;
	const setTheme = (): void => {
		switch (theme) {
			case 'purple':
				colorStore.set({ ...$colorStore, prime: $colorStore.purple, complementary: $colorStore.green });
				break;
			case 'green':
				colorStore.set({ ...$colorStore, prime: $colorStore.green, complementary: $colorStore.purple });
				break;
			case 'teal':
				colorStore.set({ ...$colorStore, prime: $colorStore.teal, complementary: $colorStore.orange });
				break;
			case 'orange':
				colorStore.set({ ...$colorStore, prime: $colorStore.orange, complementary: $colorStore.teal });
				break;
			default:
				((x: never) => {
					throw new Error(`${x} is not a correct color choice!`);
				})(theme);
		}
	};
	onMount(async () => {
		setTheme();
		polarity.set(mode || window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=${font}:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div style={`font-family:${font}, sans-serif`}><slot /></div>
