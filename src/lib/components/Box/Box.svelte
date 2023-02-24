<script lang="ts">
	import type { Styles } from '../../design';
	import { parse } from '../../design/utils';

	export let cs: Styles = {};
</script>

<div style={cs && parse(cs)}>
	<slot />
</div>
