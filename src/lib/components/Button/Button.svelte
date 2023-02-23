<script lang="ts">
	export let name = 'Button';
	export let text: string;

	let buttonName = name;
	const onClick = () => {
		buttonName = text;
	};
</script>

<button on:click={onClick}>{buttonName}</button>
