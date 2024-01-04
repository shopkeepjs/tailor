<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { Sizes, Styles } from '$lib/design/index.d';
	import type { ButtonVariants } from './Button';
	import { parse } from '$lib/design/utils';
	import { colorStore } from '$lib/store';
	import { Loading } from '$components/Icon/assets';
	import type { ColorStrings } from '$library/design/color/index.d';
	/**
	 * Set the width of the button
	 * @default false
	 */
	export let full = false;
	/**
	 * Set the icon before the button text
	 * @default undefined
	 */
	export let iconBefore: typeof SvelteComponent | undefined = undefined;
	/**
	 * Set the icon after the button text
	 * @default undefined
	 */
	export let iconAfter: typeof SvelteComponent | undefined = undefined;
	// TODO Allow an array of sizes for resPponsive design
	/**
	 * Set the size height of the button. Use any of these: 'sm', 'md', 'lg', 'small', 'medium', 'large'.
	 * @default medium
	 */
	export let size: Sizes = 'medium';
	/**
	 * Set the size of the button. Use any of these: 'primary', 'secondary', 'tertiary', 'danger', 'link'
	 * @default primary
	 */
	export let variant: ButtonVariants = 'primary';
	/**
	 * Disables the button from interaction. Caution: This has a11y ramifications, and should be used sparingly. Consider validation or other alternatives before disabling a button.
	 * @default false
	 */
	export let disabled = false;
	/**
	 * Shows a loading spinner in place of the button text and disables the button from interaction. This is useful for async actions.
	 * @default false
	 */
	export let loading = false;
	/**
	 * Allows passing in CSS properties to the button
	 * @default undefined
	 */
	export let cs: Styles | undefined = undefined;
	/**
	 * Allows changing the color of the button - either to your theme's prime/complementary colors or you can set it to a specific color from the color palette.
	 * @default prime
	 */
	export let color: 'prime' | 'complementary' | ColorStrings = 'prime';

	$: backgroundGradient = `--backgroundGradient: ${$colorStore[color]?.mediumGradient}`;
	$: textColor = `--textColor: ${$colorStore[color]?.light};`;
	$: accentColor = `--accentColor: ${$colorStore[color]?.['700']};`;
</script>

<button
	type="button"
	class:full
	on:click
	class={size}
	class:variant
	class:disabled
	class:loading
	style={`${backgroundGradient} ${textColor} ${accentColor} ${cs ? parse(cs) : ''}`}
>
	{#if !loading}
		{#if iconBefore}
			<svelte:component this={iconBefore} />
		{/if}
		<slot />
		{#if iconAfter}
			<svelte:component this={iconAfter} />
		{/if}
	{:else}
		{Loading}
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
		transition: all 0.2s;
		min-width: 135px;
		max-height: 50px;
		color: var(--textColor);
		gap: 5px;
	}
	button:hover:not(:active, .disabled) {
		filter: brightness(130%);
	}
	button:focus-visible {
		padding-inline: 2.3rem;
		outline-offset: 5px;
		outline: 3px var(--accentColor) solid;
	}
	button:active:not(.disabled) {
		filter: brightness(85%);
		transform: scale(0.96);
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.light.disabled {
		background: rgba(44, 36, 45, 0.7);
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
		background-size: 2em 2em, auto auto;
	}
	.dark.disabled {
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
		background-size: 2em 2em, auto auto;
	}
	.disabled {
		cursor: default;
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
	.lg,
	.large {
		padding: 1.5rem 2rem;
	}
	.md,
	.medium {
		padding: 1rem 2rem;
	}
	.sm,
	.small {
		padding: 0.5rem 2rem;
	}
</style>
