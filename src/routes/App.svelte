<script lang="ts">
	import Button from '$lib/Button.svelte';
</script>

<main>
	<Button label="Button1" onClick={() => console.log('hello1!')} size="lg" />
	<Button label="Button2" onClick={() => console.log('hello2!')} />
</main>

<style>
</style>
