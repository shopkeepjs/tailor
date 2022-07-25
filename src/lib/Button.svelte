<script lang="ts">
	import type { Sizes } from '../types';
	export let label: string;
	export let size: Sizes = 'md';
	export let onClick: () => any;
</script>

<button on:click={onClick} class={`${size}`}>
	{label}
</button>
