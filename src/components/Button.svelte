<script lang="ts">
	let message = '';
	const onClick = () => {
		message = 'You clicked me!';
	};
</script>

<button type="button" on:click={onClick}>Click me</button>
{#if message}
	<p>{message}</p>
{/if}

<style>
</style>
