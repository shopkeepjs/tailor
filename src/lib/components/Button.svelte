<script lang="ts">
	import type { Sizes, Colors } from '../../types';
	import type { SvelteComponent } from 'svelte';
	import { colorStore } from '../themes';
	import { Loading } from './Icons';

	export let label: string;
	export let size: Sizes = 'md';
	export let variant: 'primary' | 'secondary' = 'primary';
	export let color: 'prime' | 'complementary' | Colors = 'prime';
	export let onClick: () => unknown;
	export let iconBefore: typeof SvelteComponent | undefined = undefined;
	export let iconAfter: typeof SvelteComponent | undefined = undefined;
	export let loading: boolean = false;
	export let disabled: boolean = false;

	$: backgroundGradient = `--backgroundGradient: ${$colorStore[color]?.mediumGradient};`;
	$: lightColor = `--lightColor: ${$colorStore[color]?.light};`;
	$: darkColor = `--darkColor: ${$colorStore[color]?.['700']};`;
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

<button
	on:click={onClick}
	class="{size} {variant} {disabled} {loading && `disabled`}"
	style={`${backgroundGradient} ${lightColor} ${darkColor}`}
>
	{#if !loading}
		{#if iconBefore}
			<svelte:component this={iconBefore} />
		{/if}
		{label}
		{#if iconAfter}
			<svelte:component this={iconAfter} />
		{/if}
	{:else}
		<Loading color={$colorStore[color]?.[`500`]} />
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
		font-size: 1rem;
		isolation: isolate;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 8px;
		font-weight: 700;
		height: max-content;
		cursor: pointer;
		background: var(--backgroundGradient);
		transition: all 0.5s;
		min-width: 135px;
		max-height: 50px;
		color: var(--lightColor);
	}

	button:hover:not(:active, .disabled) {
		filter: brightness(130%);
		padding-inline: 2.3rem;
	}
	button:active:not(.disabled) {
		filter: brightness(80%);
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
		padding-inline: 2.3rem;
	}
	button:focus {
		padding-inline: 2.3rem;
		outline-offset: 5px;
		outline: 3px var(--darkColor) solid;
	}
	.disabled {
		background: rgba(127, 120, 128, 0.25);
		background-image: linear-gradient(
			45deg,
			rgba(0, 0, 0, 0.25) 25%,
			transparent 25%,
			transparent 50%,
			rgba(0, 0, 0, 0.25) 50%,
			rgba(0, 0, 0, 0.25) 75%,
			transparent 75%,
			transparent
		);
		cursor: default;
		background-size: 2em 2em, auto auto;
		animation: loadingAnimation 2s linear infinite;
	}
	@keyframes loadingAnimation {
		0% {
			background-position: 2em 0;
		}
		100% {
			background-position: 0 0;
		}
	}
	.lg {
		padding: 1.5rem 2rem;
	}
	.md {
		padding: 1rem 2rem;
	}
	.sm {
		padding: 0.5rem 2rem;
	}
</style>
