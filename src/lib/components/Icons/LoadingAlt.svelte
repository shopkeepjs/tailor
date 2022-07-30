<script lang="ts">
	export let color: string;
	$: lineColor = `--lineColor: ${color}`;
</script>

<div class="loading-icon-container" style={`${lineColor}`}>
	<div class="line top" />
	<div class="line middle" />
	<div class="line bottom" />
</div>

<style>
	.loading-icon-container {
		display: flex;
		flex-flow: column;
		width: 3rem;
		gap: 5px;
		align-items: center;
		padding: 0.2rem;
	}
	.line {
		height: 0.25rem;
		border-radius: 2px;
		background-color: var(--lineColor);
		width: 65%;
		animation-duration: 0.6s;
		animation-name: back-and-forth;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-timing-function: ease-in-out;
		transform: translateX(-15px);
	}
	.middle {
		animation-delay: 0.13s;
	}
	.bottom {
	}
	@keyframes back-and-forth {
		from {
			transform: translateX(-15px);
		}
		to {
			transform: translateX(15px);
		}
	}
</style>
