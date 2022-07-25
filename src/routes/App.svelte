<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Icon from '$lib/Icon.svelte';
	import ShopkeepThemeProvider from '$lib/ShopkeepThemeProvider.svelte';
</script>

<ShopkeepThemeProvider>
	<div class="flex">
		<Button label="Button1" onClick={() => console.log('hello1!')} size="lg" />
		<Button label="Button2" onClick={() => console.log('hello2!')} size="md" />
		<Button label="Button3" iconBefore={Icon} onClick={() => console.log('hello3!')} size="md" />
		<Button label="Button4" onClick={() => console.log('hello4!')} size="md" iconAfter={Icon} />
	</div>
</ShopkeepThemeProvider>

<style>
	.flex {
		display: flex;
		flex-flow: row;
		gap: 1rem;
		align-items: center;
	}
</style>
