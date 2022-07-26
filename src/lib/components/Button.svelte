<script lang="ts">
	import type { Sizes } from '../../types';
	import type { SvelteComponent, SvelteComponentTyped } from 'svelte';

	export let label: string;
	export let size: Sizes;
	export let onClick: () => any;
	export let iconBefore: typeof SvelteComponent | undefined = undefined;
	export let iconAfter: typeof SvelteComponent | undefined = undefined;
	export const loading: boolean = false;
</script>

<!--
  @component 
  Here's some documentation for this component.
  It will show up on hover.
  
  - You can use markdown here.
  - You can also use code blocks here.
  - Usage:
	```tsx
	<main name="Arethra">
		```
-->

<button on:click={onClick} class={`${size}`}>
	{#if !loading}
		{#if iconBefore}
			<svelte:component this={iconBefore} />
		{/if}
		{label}
		{#if iconAfter}
			<svelte:component this={iconAfter} />
		{/if}
	{:else}
		Loading...
	{/if}
</button>

<style>
	button {
		outline: none;
		border: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: var(--mediumGradient);
		font-size: 1rem;
		isolation: isolate;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 8px;
		font-weight: 700;
		color: white;
		height: max-content;
		cursor: pointer;
	}
	.lg {
		padding: 1.5rem 2rem;
	}
	.md {
		padding: 1rem 2rem;
	}
</style>
