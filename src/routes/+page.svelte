<script lang="ts">
	import { Button } from '$library';
	import Plane from '$library/components/Icon/assets/Plane.svelte';
	import TailorThemeProvider from '$library/provider/TailorThemeProvider.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation!</p>
<TailorThemeProvider theme="green">
	<Button full iconBefore={Plane} size="sm" loading={false}>Submit</Button>
</TailorThemeProvider>
