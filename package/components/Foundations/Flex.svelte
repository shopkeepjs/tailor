<script>import { parse } from '../../utils';
export let cs = {};
</script>

<div style={cs && parse(cs)}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-flow: row nowrap;
	}
</style>
