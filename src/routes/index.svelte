<script lang="ts">
	import { Button, ShopkeepThemeProvider, Flex } from '../lib';
	import { Colors } from '../types';
	let color: Colors = Colors.prime;
	const doTheThing = () => {
		color = Colors.complementary;
	};
	let loading = true;
	setTimeout(() => {
		loading = false;
	}, 500000000);
</script>

<main>
	<ShopkeepThemeProvider>
		<Flex
			cs={{
				flexFlow: 'column wrap',
				gap: '1rem',
				alignItems: 'center',
				width: '100vw',
				minHeight: '100vh',
				backgroundColor: 'rgb(37, 32, 38)'
			}}
		>
			<h1 style="color: white;">Welcome to SvelteKit</h1>
			<Button label="Click me" onClick={doTheThing} />
			<Button label="Loaded!" onClick={() => null} {loading} />
			{#each [...Array(1).keys()] as _, index}
				<Button label="Turn me green" {color} {loading} onClick={() => null} />
			{/each}
		</Flex>
	</ShopkeepThemeProvider>
</main>

<style>
	.flex {
		display: flex;
		flex-flow: column wrap;
		gap: 1rem;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
		background-color: rgb(37, 32, 38);
	}
</style>
