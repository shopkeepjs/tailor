<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ShopkeepThemeProvider from '$lib/providers/ShopkeepThemeProvider.svelte';
</script>

<main>
	<h1>Welcome to SvelteKit</h1>
	<ShopkeepThemeProvider>
		<div class="flex">
			<Button label="Button1" onClick={() => console.log('hello1!')} size="lg" />
			<Button label="Button2" onClick={() => console.log('hello2!')} size="md" />
			<Button label="Button3" iconBefore={Icon} onClick={() => console.log('hello3!')} size="md" />
			<Button label="Button4" onClick={() => console.log('hello4!')} size="md" iconAfter={Icon} />
		</div>
	</ShopkeepThemeProvider>
</main>

<style>
	.flex {
		display: flex;
		flex-flow: row;
		gap: 1rem;
		align-items: center;
	}
</style>
