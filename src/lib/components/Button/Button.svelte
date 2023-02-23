<script lang="ts">
	export let name = 'Button';
	export let test: string;

	let buttonName = name;
	const onClick = () => {
		buttonName = test;
	};
</script>

<button on:click={onClick}>{buttonName}</button>
