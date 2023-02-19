// eslint-disable-next-line import/no-named-as-default
import App from './App.svelte';

const app = new App({
	// @ts-expect-error - This is svelte boilerplate I'm not touching
	target: document.getElementById('app'),
});

export default app;
