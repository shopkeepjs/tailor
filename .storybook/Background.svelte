<script lang="ts">
	export let mode: 'dark' | 'light';
</script>

<div class={`${mode}`}>
	<slot />
</div>

<style>
	div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dark {
		background-color: darkslategrey;
	}
	.light {
		background-color: antiquewhite;
	}
</style>
